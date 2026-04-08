# Agentic AI

Canopy uses [GitHub Copilot coding agent](https://docs.github.com/en/copilot/concepts/agents/coding-agent/about-copilot-coding-agent) to automate specific development tasks. The configuration lives in `.github/agents/`, `.github/skills/`, `.agents/skills/`, and `skills/`.

## Agents

Agents are specialised Copilot personas with tailored expertise and instructions for a specific task. They are configured as `*.agent.md` files in `.github/agents/` and are available to use from the GitHub Copilot Chat agents dropdown in your IDE, or from the [Copilot agents tab](https://github.com/copilot/agents) on GitHub.

| Agent | File | Purpose | How to trigger |
|-------|------|---------|----------------|
| **Dependency Updater** | `.github/agents/dependency-updater.agent.md` | Manages npm dependency updates — patch, minor, and major — including breaking-change research, Angular and Storybook migration tooling, and PR creation. | Create an issue using the **Dependency Update** template, then assign it to `@copilot` |
| **Migration Guide Writer** | `.github/agents/migration-guide-writer.agent.md` | Generates a formatted migration guide comment on a pull request by analysing the code diff and build output to identify breaking changes. | Create an issue using the **Migration Guide** template, run via the [Copilot agents tab](https://github.com/copilot/agents), or select the agent in the IDE Copilot Chat panel |
| **Migration Skill Generator** | `.github/agents/migration-skill-generator.agent.md` | Generates an installable Copilot skill for a published major release, so consumers can apply breaking-change migrations with AI assistance. Also updates `docs/COPILOT_SKILLS.md`. | Create an issue using the **Migration Skill** template, then assign it to `@copilot` |

### Using an agent

How you trigger an agent depends on whether it is designed for cloud or local use:

> **Note on auto-assignment:** GitHub does not currently support auto-assigning the Copilot coding agent from issue templates. After creating the issue you must manually assign it to `@copilot` and select the agent in the GitHub UI.

**Dependency Updater — via a GitHub issue (recommended for cloud):**
1. Create a new issue using the [Dependency Update](../.github/ISSUE_TEMPLATE/dependency-update.yml) issue template, filling in the scope and any exclusions.
2. Once the issue is created, assign it to `@copilot` and select the **Dependency Updater** agent.
3. The agent will run automatically and open a pull request when done.

**Migration Guide Writer — via a GitHub issue:**
1. Create a new issue using the [Migration Guide](../.github/ISSUE_TEMPLATE/migration-guide.yml) issue template, providing the PR number that contains the breaking changes.
2. Once the issue is created, assign it to `@copilot` and select the **Migration Guide Writer** agent.
3. The agent will analyse the PR's code diff and output a formatted migration guide in the issue conversation for you to copy and paste into the PR.

**Migration Guide Writer — via the Copilot agents tab (cloud):**
1. Navigate to the [Copilot agents tab](https://github.com/copilot/agents) on GitHub.com.
2. Use the repository dropdown to select `Legal-and-General/canopy`.
3. Select the **Migration Guide Writer** agent from the agent dropdown.
4. Provide the PR number in your prompt, e.g.:
   > "Create the migration guide for PR #1234"
5. The agent will analyse the PR's code diff and output a formatted migration guide in the conversation for you to copy and paste into the PR.

**Migration Guide Writer — IDE / local:**
Open Copilot Chat in your IDE, select the **Migration Guide Writer** agent from the dropdown, and provide the PR number:
> "Create the migration guide for PR #1234"

**Migration Skill Generator — via a GitHub issue (recommended for cloud):**
1. Create a new issue using the [Migration Skill](../.github/ISSUE_TEMPLATE/migration-skill.yml) issue template, providing the major version number.
2. Once the issue is created, assign it to `@copilot` and select the **Migration Skill Generator** agent.
3. The agent will fetch the release notes, generate the skill, update `docs/COPILOT_SKILLS.md`, and open a pull request. Consumers can then install the skill with:
   ```bash
   npx skills add Legal-and-General/canopy --skill canopy-v{N}-migration
   ```

> **Note:** once your application has been fully migrated to the new version, uninstall the skill to keep your Copilot context clean:
> ```bash
> npx skills remove Legal-and-General/canopy --skill canopy-v{N}-migration
> ```

**Any agent — via the Copilot agents tab (cloud):**
1. Navigate to the [Copilot agents tab](https://github.com/copilot/agents) on GitHub.com.
2. Use the repository dropdown to select `Legal-and-General/canopy`.
3. Select the agent from the agent dropdown.
4. Type your prompt directly in the chat box — be explicit about the update scope, e.g.:
   > "Update all production patch dependencies. Exclude `typescript`. Apply the changes and open a PR."
5. Copilot will run the agent and open a pull request when done.

**Any agent — IDE / local:**
Open Copilot Chat in your IDE and select the agent from the dropdown at the bottom of the chat panel.

### Adding a new agent

1. Create a new `.agent.md` file in `.github/agents/`.
2. Add YAML frontmatter with at minimum a `name` and `description`.
3. Write the agent's instructions in the Markdown body (maximum 30,000 characters).
4. Add a row to the table above.

```markdown
---
name: My Agent
description: One sentence describing what the agent does and when to use it.
---

# My Agent

...instructions...
```

## Copilot Skills

Skills are domain-specific instruction packages that extend Copilot's knowledge for a particular task or technology. Unlike agents (which are standalone modes), skills are loaded by Copilot automatically when a request matches their domain — no explicit invocation needed.

There are two kinds of skill in this repo:

| Kind | Audience | Location |
|---|---|---|
| **Internal skills** | The Canopy team (IDE / Cloud Copilot) | `.github/skills/` and `.agents/skills/` |
| **Consumer migration skills** | Developers consuming the `@legal-and-general/canopy` package | `skills/` (installable via `npx skills add`) |

Consumer migration skills are documented in [`docs/COPILOT_SKILLS.md`](COPILOT_SKILLS.md) and generated automatically by the **Migration Skill Generator** agent.

### How they work

Each skill is a `SKILL.md` file containing curated guidance, patterns, and examples. When you ask Copilot something that falls within a skill's domain (e.g. writing a unit test, generating an Angular component), Copilot reads the relevant skill file first before responding, ensuring its output matches the conventions of this monorepo.

Skills live in one of two locations depending on their origin:

| Location | Purpose |
|---|---|
| `.github/skills/{skill-name}/SKILL.md` | Skills **authored locally** in this repo by the team |
| `.agents/skills/{skill-name}/SKILL.md` | Skills **installed from external sources** (e.g. GitHub repos), managed by Copilot tooling |
| `skills/{skill-name}/SKILL.md` | Consumer migration skills generated by the Migration Skill Generator agent |

> **Note:** Consumer migration skills (e.g. `canopy-v22-migration`) live in `skills/` and are committed directly to the repo by the Migration Skill Generator agent. They are **not** listed in `skills-lock.json`. Only skills installed from external repositories (under `.agents/skills/`) appear in `skills-lock.json`.

### Installed skills

Installed skills and their versions are tracked in [`skills-lock.json`](../skills-lock.json) at the repo root. This file is committed to source control so that everyone on the team uses the same skill versions — treat it like a lockfile.

```json
{
   "version": 1,
   "skills": {
      "angular-developer": {
         "source": "angular/angular",
         "sourceType": "github"
      }
   }
}
```

### Installing or updating skills

Skills are managed via the `skills` CLI — **not via npm**. Run `npx skills --help` or see the [skills package on npm](https://www.npmjs.com/package/skills) for the full list of commands.

The `skills-lock.json` file is updated automatically and should be committed to source control.
