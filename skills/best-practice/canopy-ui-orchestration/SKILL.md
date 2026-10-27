---
name: canopy-ui-orchestration
description: >
  Version-aware discovery, selection, composition, and verification of Canopy components,
  directives, utilities, tokens, and assets. Use whenever implementing or reviewing Angular
  UI with @legal-and-general/canopy.
license: MIT
metadata:
  category: guidance
  source: https://github.com/Legal-and-General/canopy/tree/master/docs/CANOPY_UI_SKILL.md
---

# Canopy UI Orchestration

Use this skill to turn a consumer's UI intent into a complete, supported Canopy
composition. It coordinates the component-specific Canopy skills; it does not replace them.

## Boundaries

- Treat the consumer's installed Canopy version as authoritative.
- Use Canopy's public surface before creating custom UI.
- Do not silently upgrade Canopy.
- Do not copy private component markup or override internal selectors.
- Do not treat source-code capability as design approval.
- Report unsupported or uncertain requirements instead of inventing APIs.
- Require rendered visual and accessibility checks where the result depends on layout,
  styling, projection, or interaction.

## 1. Resolve the Canopy Version

1. Read `@legal-and-general/canopy` from the consumer's package manifest.
2. Confirm the resolved version from the lockfile or installed package.
3. Check that installed Canopy skills use the matching `v<version>` repository tag.
4. Ask before installing, refreshing, or upgrading dependencies or skills.
5. Use evidence from the matching tag. Do not use the latest Storybook as evidence for an
   older installed version without confirming compatibility.
6. If exact-version evidence is unavailable, state the gap before recommending an API.

## 2. Discover Capabilities

1. Translate the request into intent phrases, constraints, content, actions, and states.
2. Search [capabilities.json](./references/capabilities.json) for exact names, selectors,
   public symbols, intents, aliases, category, and related capabilities.
3. Consider components, directives, services, pipes, tokens, utilities, icons, pictograms,
   and documented patterns.
4. Shortlist candidates with a reason, confidence, compatibility warning, and relevant
   pattern IDs.
5. Load only the shortlisted component-specific skills.
6. Read the matching version's detailed skills and evidence before implementation.

When generated references are unavailable, use this temporary routing guide:

| Intent                                | Start with                            | Also inspect                                     |
| ------------------------------------- | ------------------------------------- | ------------------------------------------------ |
| Group related content or form content | `canopy-card`                         | `canopy-button`, relevant form skills            |
| Place one or more actions             | `canopy-button`                       | Owning container skill                           |
| Collect radio choices                 | `canopy-forms-radio`                  | `canopy-forms-validation`, `canopy-forms-design` |
| Collect checkbox choices              | `canopy-forms-checkbox`               | `canopy-forms-validation`, `canopy-forms-design` |
| Show a prominent contextual message   | `canopy-notice`                       | `canopy-pictogram`, `canopy-button`              |
| Show inline feedback                  | `canopy-alert`                        | Relevant form or content skill                   |
| Constrain responsive page content     | `canopy-content-area`                 | `canopy-grid`, spacing skills                    |
| Show journey progress                 | `canopy-progress-indicator`           | `canopy-page`, `canopy-content-area`             |
| Show a loading state                  | `canopy-spinner` or `canopy-skeleton` | Owning content skill                             |
| Use an icon-only action               | `canopy-button`, `canopy-icon`        | Accessibility guidance                           |

## 3. Build a Composition Map

Before editing code, prepare an internal map containing:

- parent capability;
- required and optional children;
- projected slots and directives;
- action count and whether actions are related;
- icon or illustrative asset requirements;
- spacing ownership and responsive behaviour;
- accessibility behaviour;
- relevant component skills and evidence.

Combine conditional rules; do not blindly union component lists.

```text
One action belonging to a card
→ lg-card
  → lg-card-content
  → lg-card-footer
    → button[lg-button]

Two related actions belonging to a card
→ lg-card
  → lg-card-content
  → lg-card-footer
    → lg-button-group
      → button[lg-button]
      → button[lg-button]
```

Use [compositions.json](./references/compositions.json) for generated conditional patterns.
Preserve words such as "one", "two or more", "at most", "may", and "when related".

## 4. Select the Implementation

Use this order:

1. Use the documented Canopy capability that owns the required semantics.
2. Configure its public API.
3. Compose public Canopy primitives when no single capability covers the request.
4. Use the closest supported predecessor when a capability exists only in a later version.
5. Build a thin consumer component only when necessary.
6. Ask for an upgrade or design decision when a material compromise remains.

Import every selected public symbol from `@legal-and-general/canopy`. Never import from
Canopy's internal source paths.

## 5. Verify

Before reporting completion:

1. Verify every import is publicly exported in the installed version.
2. Run Angular template type-checking and relevant consumer tests.
3. Inspect the rendered DOM for projected and composite patterns.
4. Check computed styles, responsive layouts, and supported colour modes where relevant.
5. Run accessibility checks, including keyboard use, focus, names, descriptions, and status
   announcements.
6. Report unsupported, uncertain, or unverified behaviour explicitly.

Skill guidance and generated metadata do not prove rendered visual fidelity.

## Reference Data

- [Capability index](./references/capabilities.json)
- [Conditional compositions](./references/compositions.json)
- [Schema and release compatibility](./references/schema-version.json)
