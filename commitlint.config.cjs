module.exports = {
  extends: ['@commitlint/config-angular'],
  ignores: [
    (message) => message.trim() === 'Initial plan',
    (message) => message.trim().startsWith('doc(skills): generate migration skill for v38'),
  ],
};
