export default {
  branches: [{ name: 'main' }, { name: 'develop', prerelease: true }],
  plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', ['@semantic-release/github', { assets: ['dist/**'] }], '@semantic-release/git'],
}
