export const notes = `
# Spacing

## Purpose
Provides available spacing via CSS variables

## Variables
| Name | Value | Equivalent in px (based on 16px font-size)
|------|-------------|-------------|
| \`\`--space-unit\`\` | 1rem | 16px |
| \`\`--space-xxxs\`\` | calc(0.25 * var(--space-unit)) | 4px |
| \`\`--space-xxs\`\` | calc(0.5 * var(--space-unit)) | 8px |
| \`\`--space-xs\`\` | calc(0.75 * var(--space-unit)) | 12px |
| \`\`--space-sm\`\` | var(--space-unit) | 16px |
| \`\`--space-md\`\` | calc(1.5 * var(--space-unit)) | 24px |
| \`\`--space-lg\`\` | calc(2 * var(--space-unit)) | 32px |
| \`\`--space-xl\`\` | calc(2.5 * var(--space-unit)) | 40px |
| \`\`--space-xxl\`\` | calc(3 * var(--space-unit)) | 48px |
| \`\`--space-xxxl\`\` | calc(4.5 * var(--space-unit)) | 72px |
| \`\`--space-xxxxl\`\` | calc(9 * var(--space-unit)) | 144px |

### For components padding:
| Name | Value from 0 to md breakpoint | Value from md breakpoint |
|------|-------------|-------------|
| \`\`--component-padding\`\` | var(--space-sm) | var(--space-lg) |

### For components margin:
| Name | Value from 0 to lg breakpoint | Value from lg breakpoint |
|------|-------------|-------------|
| \`\`--component-margin\`\` | var(--space-md) | var(--space-lg) |
`;
