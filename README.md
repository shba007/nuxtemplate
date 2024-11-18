# Nuxt Template

# Todo - 

- [x] Add Authentication and Authorization
- [x] Add Database
- [ ] Add Testing
- [x] Add Git Precommit Hooks
  - Lint
  - Format
  - Gitleaks
- [x] Modify CI/CD Pipeline

## Clone Template

Clone the template

```bash
pnpx giget@latest gh:shba007/nuxtemplate
```

## Change Placeholder Value

### In package.json change the following

- name
- description
- docker:build
- docker:start

### In nuxt.config.ts change the following

- site
  - url
  - name
- pwa
  - manifest
    - name
    - short_name
    - description
    - theme_color
    - background_color

### In tailwind.config.ts change the following

- fontFamily
  - head
  - body
- colors
  - light
  - dark
  - primary
  - success
  - warning
  - alert

### In src-tauri/Cargo.toml change the following

- name
- description
- repository

### In src-tauri/tauri.conf.json change the following

- productName
- identifier
- app
  - windows
    - title

### In .github\worflows\deploy.yml change the following

- asset_name [deploy.yml](.github/workflows/deploy.yml) in line 271

### In github registry add Repo or Org Vars following

- Vars
  - REGISTRY
  - USERNAME
  - PORT
  - NITRO_PRESET

## Change the Icons and Screenshots

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
