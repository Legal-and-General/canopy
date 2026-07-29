module.exports = {
  extends: ['@commitlint/config-angular'],
  ignores: [(message) => message.trim() === 'Initial plan'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['build', 'ci', 'doc', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
  },
};
