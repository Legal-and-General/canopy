---
name: review-pr-feedback
description: Fetches unresolved review comments from a GitHub PR using the GH CLI, groups and summarises them, automatically reads the referenced files locally to pre-investigate each issue, then offers to fix or investigate further. Use when the user asks to "review PR comments", "check comments on a PR", "fetch PR feedback", "summarise PR review", or similar.
---

# Review PR Feedback Skill

Given a PR number (and optionally a reviewer's GitHub username), fetch all unresolved inline review comments, produce a structured summary, then offer to act on the issues.

---

## Trigger phrases

- "review PR comments"
- "check comments on PR #N"
- "fetch PR feedback"
- "summarise PR review"
- "what did [reviewer] say on PR #N"
- `/review-pr-feedback`

---

## Step 0 — Resolve the PR number

**First, try to detect the PR from the current branch** (do this before asking the user anything):

```bash
git branch --show-current
```

Then look up the PR for that branch:

```bash
gh pr view {branch} --repo {REPO} --json number,title,headRefName
```

If a PR is found, use its number automatically and confirm to the user:
> "Found PR #{number}: {title} — using that."

**Only fall back to asking** if:
- No PR exists for the current branch (`gh pr view` returns an error or no result)
- The user explicitly provided a different PR number in their message (e.g. "look at PR #1234" — honour that over the auto-detected one)

When a PR number is provided by the user, accept any of these formats: `8979`, `#8979`, `PR #8979`, `PR8979`. Strip any leading `#` and non-numeric prefix characters to get a plain integer.

If no PR can be detected and none was provided, ask: "Which PR number would you like me to review?"

---

## Step 1 — Resolve the repo

Run to confirm the remote:

```bash
git remote get-url origin
```

Extract the `owner/repo` slug from the URL. The remote may use an SSH alias (e.g. `git@github.com-work:Owner/repo.git`) — strip the alias prefix and `.git` suffix to get `Owner/repo`.

The repo for this workspace is: `Legal-and-General/canopy`

---

## Step 2 — Fetch inline review comments

Run the following, replacing `{PR}` and `{REPO}` as resolved above:

```bash
gh api repos/{REPO}/pulls/{PR}/comments 2>&1 | python3 -c "
import sys, json
data = json.load(sys.stdin)
print(json.dumps(data, indent=2))
"
```

If a specific reviewer was requested (e.g. `some-reviewer`), filter by `c['user']['login'] == '{USERNAME}'`.

Also fetch top-level PR review summaries (may contain a body comment):

```bash
gh pr view {PR} --repo {REPO} --json reviews
```

---

## Step 3 — Identify unresolved comments

A comment is considered **unresolved** unless:
- It has been replied to with a resolving message (e.g. "done", "fixed", "resolved")
- Its thread shows a subsequent commit that addresses the concern

When in doubt, treat a comment as unresolved. Emoji-only comments (e.g. 👍, ✅, 🧑‍💻) are **informational** — flag them separately as acknowledgements.

---

## Step 4 — Produce the summary

Output one numbered entry per comment in this format:

---

**N. `path/to/file.component.scss` — line L**
> "[exact quote of the comment body]"

[1–2 sentence interpretation of what the issue is and what likely needs to change]

---

Group acknowledgement-only comments (emoji, short reactions) at the end under a collapsible section titled **Acknowledgements**.

At the top of the summary, include:

- PR title and number
- Reviewer(s) who commented
- Total count: X actionable comments, Y acknowledgements

---

## Step 5 — Pre-investigate all actionable comments

Immediately after producing the summary, **without waiting for user input**, read every file referenced in an actionable comment:

For each actionable comment:

1. Read the file locally using `read_file` at the indicated path — focus on the flagged line and surrounding context (±20 lines)
2. Read the git diff for that file to understand what was changed in this PR:
   ```bash
   git diff origin/master -- {file}
   ```
3. Determine:
   - **What changed** — what was removed or modified at/near the flagged line
   - **Is the reviewer's concern valid?** — does the diff confirm the issue they raised?
   - **Recommended action** — `fix`, `revert`, `leave as-is with explanation`, or `needs clarification`

Append a short investigation note under each summary entry, e.g.:

> **Investigation:** The `cursor: pointer` rule was removed in this PR as part of a Canopy token migration. The reviewer is correct — no Canopy token replaces this behaviour. **Recommended: fix.**

---

## Step 6 — Offer targeted actions

After the pre-investigation findings, present a consolidated action prompt:

> Based on my investigation, here's what I recommend:
> - **Comment 2** — Fix: restore the removed CSS class
> - **Comment 3** — Fix: restore `cursor: pointer`
> - **Comment 4** — Needs clarification: visual change may be intentional
> - **Comment 5** — Fix: restore `display: inline-block`
> - **Comment 6** — Investigate further: unclear why attribute was added
>
> Reply with the numbers you'd like me to act on (e.g. "fix 2, 3, 5" or "fix all").

---

## Step 7 — Execute the chosen action

### Fix

For each comment chosen for fixing:

1. Re-read the file if needed for fresh context
2. Apply the minimal change that addresses the reviewer's concern
3. Confirm the fix with a one-line explanation

### Investigate further

For each comment needing deeper investigation:

1. Search for the symbol, class, or attribute mentioned in wider context across the codebase if needed
2. Report findings clearly: what changed, whether it's intentional, and what the recommended next action is

---

## Step 8 — Produce the final summary with PR replies

After all fixes and investigations are complete, output a final summary using this consistent template for every comment — including those left as-is or needing clarification:

---

**N. `path/to/file.component.scss` — line L**
> "[exact quote of the comment body]"

**Status:** Fixed / Investigated — left as-is / Needs clarification

**What was done:** [One sentence describing the action taken or finding]

**Suggested PR reply:**
> [Ready-to-paste reply addressed to the reviewer. Be concise and specific. For fixes, confirm what was restored/changed and why. For leave-as-is, explain the intent. For clarifications, pose the question clearly.]

---

Group the entries in the same order as the original summary. Acknowledgement comments do not need a PR reply suggestion.

At the top of the final summary include:
- Total: X fixed, Y investigated, Z need clarification

After the per-comment entries, add a **Test commands** section.

For each changed file, derive the test command:
- To run the full test suite: `npm test`
- To run a single spec file: `npm test -- projects/canopy/src/lib/<component>/<component>.component.spec.ts`

Deduplicate — if multiple comments touched the same component, list its spec file once.

Example output:

```
## Test commands

Run the following to verify unit tests pass after the changes:

npm test -- projects/canopy/src/lib/button/button.component.spec.ts
npm test -- projects/canopy/src/lib/card/card.component.spec.ts
```

## Notes

- Always use `gh api` for inline comments and `gh pr view` for review-level comments — they are different endpoints
- The GH CLI must be authenticated; if it reports "No default remote repository", pass `--repo {REPO}` or use `gh api` with the full path
- Resolved threads are not returned by default from the GitHub API; treat all returned comments as unresolved unless context suggests otherwise
- If pagination is needed (>30 comments), append `?per_page=100` to the `gh api` URL
