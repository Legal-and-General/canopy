module.exports = {
  extends: ['@commitlint/config-angular'],
  ignores: [(message) => message.trim() === 'Initial plan'],
};
