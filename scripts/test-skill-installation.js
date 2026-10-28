import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

// This smoke test exercises the real installer because source-tree tests cannot
// prove that auxiliary references are copied with an installed skill.
const repositoryRoot = resolve(import.meta.dirname, '..');
const installationRoot = mkdtempSync(join(tmpdir(), 'canopy-skill-install-'));
const skillPath = join(installationRoot, '.claude', 'skills', 'canopy-ui-orchestration');

try {
  // A temporary consumer directory keeps agent configuration and installed
  // files out of the Canopy working tree.
  execFileSync(
    'npx',
    [
      '--yes',
      'skills',
      'add',
      join(repositoryRoot, 'skills', 'best-practice'),
      '--skill',
      'canopy-ui-orchestration',
      '--agent',
      'claude-code',
      '--copy',
      '--yes',
    ],
    {
      cwd: installationRoot,
      env: {
        ...process.env,
        DISABLE_TELEMETRY: '1',
        DO_NOT_TRACK: '1',
      },
      stdio: 'inherit',
    },
  );

  for (const relativePath of [
    'SKILL.md',
    'references/capabilities.json',
    'references/compositions.json',
    'references/schema-version.json',
  ]) {
    assert.ok(
      existsSync(join(skillPath, relativePath)),
      `Installed skill is missing ${relativePath}`,
    );
  }

  console.info('Canopy UI orchestration skill installation passed.');
} finally {
  // Clean up even when installation or an assertion fails.
  rmSync(installationRoot, { recursive: true, force: true });
}
