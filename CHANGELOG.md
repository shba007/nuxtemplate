# Changelog

## v1.5.0

[compare changes](https://github.com/shba007/nuxtemplate/compare/v1.0.0...v1.5.0)

### 🚀 Enhancements

- Update README to reflect addition of auto release feature ([ad25606](https://github.com/shba007/nuxtemplate/commit/ad25606))

### 🩹 Fixes

- Update release configuration to include main branch and prerelease for develop ([2716049](https://github.com/shba007/nuxtemplate/commit/2716049))
- Correct syntax for skip CI condition in GitHub Actions workflow ([76e6644](https://github.com/shba007/nuxtemplate/commit/76e6644))
- Update output formatting in integrate.yml for version bump ([cc4f838](https://github.com/shba007/nuxtemplate/commit/cc4f838))
- Streamline version bump process in integrate.yml and update PR body to include CHANGELOG ([2e42445](https://github.com/shba007/nuxtemplate/commit/2e42445))
- Read CHANGELOG.md content into environment variable for PR body ([bba817c](https://github.com/shba007/nuxtemplate/commit/bba817c))
- Add pnpm setup to release workflow for improved package management ([99056d3](https://github.com/shba007/nuxtemplate/commit/99056d3))
- Remove existing CHANGELOG.md before bumping version ([e7a6614](https://github.com/shba007/nuxtemplate/commit/e7a6614))
- Streamline CHANGELOG handling in integrate workflow ([3c6f285](https://github.com/shba007/nuxtemplate/commit/3c6f285))
- Update dependencies and package manager version in package.json ([fd808a8](https://github.com/shba007/nuxtemplate/commit/fd808a8))
- Comment out git reset command in integrate workflow ([2c254bc](https://github.com/shba007/nuxtemplate/commit/2c254bc))
- Comment out version bump step in release workflow ([aaff3db](https://github.com/shba007/nuxtemplate/commit/aaff3db))
- Update release workflow to trigger on chore(release) and merge develop into main ([367d2ee](https://github.com/shba007/nuxtemplate/commit/367d2ee))
- Enhance workflows to skip CI on merge pull requests ([917db00](https://github.com/shba007/nuxtemplate/commit/917db00))
- Update CI workflow to skip builds on merge branch commits ([9764d60](https://github.com/shba007/nuxtemplate/commit/9764d60))
- Update CI workflow condition to use startsWith for merge messages ([bbfe21a](https://github.com/shba007/nuxtemplate/commit/bbfe21a))

### 💅 Refactors

- Remove semantic release configuration and related dependencies ([0a339fe](https://github.com/shba007/nuxtemplate/commit/0a339fe))

### 🏡 Chore

- Add ESLint and Prettier configuration, update Docker setup, and enhance Nuxt configuration ([3eaf932](https://github.com/shba007/nuxtemplate/commit/3eaf932))
- Remove unused image assets and add load testing script ([feb6131](https://github.com/shba007/nuxtemplate/commit/feb6131))
- Update @prisma/nuxt version in package.json and adjust nuxt.config.ts formatting ([9d4e7ba](https://github.com/shba007/nuxtemplate/commit/9d4e7ba))
- Update release process by removing semantic-release to auto ([4944681](https://github.com/shba007/nuxtemplate/commit/4944681))
- Add GitHub token to workflow environment variables ([a3cf1ba](https://github.com/shba007/nuxtemplate/commit/a3cf1ba))
- Update GitHub Actions workflow to use pnpm for release and add GH_TOKEN environment variable ([a0d365e](https://github.com/shba007/nuxtemplate/commit/a0d365e))
- Update release command in GitHub Actions workflow to use 'auto pr' ([60f99dd](https://github.com/shba007/nuxtemplate/commit/60f99dd))
- Add semantic-release configuration and update GitHub Actions workflow ([a1ecd66](https://github.com/shba007/nuxtemplate/commit/a1ecd66))
- Update GitHub Actions workflows to streamline permissions and add release automation ([e3835af](https://github.com/shba007/nuxtemplate/commit/e3835af))
- Remove CHANGELOG.md file ([96149cc](https://github.com/shba007/nuxtemplate/commit/96149cc))
- **release:** Update version ([315f6a3](https://github.com/shba007/nuxtemplate/commit/315f6a3))
- **release:** Update version ([aa93060](https://github.com/shba007/nuxtemplate/commit/aa93060))
- **release:** Update version ([cbb0b11](https://github.com/shba007/nuxtemplate/commit/cbb0b11))
- **release:** Update version ([9e5be4d](https://github.com/shba007/nuxtemplate/commit/9e5be4d))

### 🤖 CI

- **deploy:** Add environment variables for API base URL and Google Analytics ID ([a92ce16](https://github.com/shba007/nuxtemplate/commit/a92ce16))

### ❤️ Contributors

- Shirsendu Bairagi ([@shba007](https://github.com/shba007))
- Shba007 ([@shba007](https://github.com/shba007))
