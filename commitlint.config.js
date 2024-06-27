module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
    "scope-enum": [2, "always", ["core", "ui", "api", "config", "deps", "docs", "test", "changelog", "release"]],
    "subject-case": [2, "always", ["sentence-case"]],
  },
};
