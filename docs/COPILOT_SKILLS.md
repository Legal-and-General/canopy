# Canopy Copilot Migration Skills

Canopy publishes installable [Copilot skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills) for each major release that contains breaking changes. These skills guide your AI coding agent to apply the migration changes automatically in your project.

## Installing a skill

Skills are installed via the [`skills` CLI](https://www.npmjs.com/package/skills) and work with GitHub Copilot, Claude Code, Cursor, and [40+ other coding agents](https://www.npmjs.com/package/skills#supported-agents).

```bash
# List all available Canopy skills without installing
npx skills add Legal-and-General/canopy --list

# Install a specific migration skill (replace v22 with the version you need)
npx skills add Legal-and-General/canopy --skill canopy-v22-migration

# Install all available Canopy migration skills
npx skills add Legal-and-General/canopy --skill '*'
```

Once installed, ask your agent:
> "Apply the Canopy v22 migration to my project."

## Available skills

| Skill | Migrates | Release notes |
|---|---|---|
| `canopy-v22-migration` | v21 → v22 | [v22.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v22.0.0) |
| `canopy-v21-migration` | v20 → v21 | [v21.0.0](https://github.com/Legal-and-General/canopy/releases/tag/v21.0.0) |
