/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['develop'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: ['dist/**'],
      },
    ],
    '@semantic-release/git',
  ],
}
