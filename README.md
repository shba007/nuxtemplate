<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/shba007/nuxtemplate/main/public/logo.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/shba007/nuxtemplate/main/public/logo.png">
    <img src="https://raw.githubusercontent.com/shba007/nuxtemplate/main/public/logo.png" alt="NuxTemplate Logo" width="80" />
  </picture>
</p>

<h1 align="center">NuxTemplate</h1>

<p align="center">
  <strong>Universal Full-Stack Application Template powered by Nuxt 4, TypeScript, Tailwind CSS, and Tauri 2</strong>
</p>

<p align="center">
  <a href="https://github.com/shba007/nuxtemplate/releases"><img src="https://img.shields.io/github/v/release/shba007/nuxtemplate?color=3b82f6&logo=github" alt="GitHub Release" /></a>
  <a href="https://github.com/shba007/nuxtemplate/blob/main/LICENSE"><img src="https://img.shields.io/github/license/shba007/nuxtemplate?color=green" alt="License: MIT" /></a>
  <a href="https://github.com/shba007/nuxtemplate/actions/workflows/integrate.yml"><img src="https://github.com/shba007/nuxtemplate/actions/workflows/integrate.yml/badge.svg" alt="Nuxt CI" /></a>
  <a href="https://github.com/shba007/nuxtemplate/actions/workflows/deploy.yml"><img src="https://github.com/shba007/nuxtemplate/actions/workflows/deploy.yml/badge.svg" alt="Nuxt CD" /></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/Bun-%3E%3D1.2.9-black?logo=bun" alt="Bun Runtime" /></a>
  <a href="https://nuxt.com"><img src="https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js&logoColor=white" alt="Nuxt 4" /></a>
  <a href="https://tauri.app"><img src="https://img.shields.io/badge/Tauri-2.x-24C8DB?logo=tauri&logoColor=white" alt="Tauri 2" /></a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/shba007/nuxtemplate/main/public/previews/landing.webp" alt="NuxTemplate Landing Preview" width="850" />
</p>

---

## Overview

**NuxTemplate** is a battle-tested, production-ready starter template for building universal applications across **Web**, **Desktop** (macOS, Windows, Linux), and **Mobile** (Android) from a single Vue 3 codebase. Engineered with Nuxt 4 and Tauri 2, it comes fully wired with server-side rendering, desktop auto-updates, offline PWA service workers, push notifications, and automated GitHub Actions CI/CD pipelines.

Designed for rapid delivery, the template features native Google OAuth 2.0 and email OTP authentication, Prisma ORM with SQLite, Model Context Protocol (MCP) server support, and a complete modern developer toolchain powered by Bun.

### Features

- 🌐 **Cross-Platform Target**: Ship simultaneously to Web (SSR/Edge via Nitro), Desktop (macOS Universal, Windows x64, Linux GTK via Tauri 2), and Mobile (Android APK & AAB).
- 🔄 **Cryptographic In-App Auto-Updates**: Built-in desktop updater (`useAppUpdater`) validating releases against GitHub Releases using Minisign signatures.
- 📱 **Offline-Ready PWA & Push Notifications**: Workbox service worker caching (NetworkFirst HTML, StaleWhileRevalidate API, CacheFirst assets) paired with Web Push notifications.
- 🔐 **Authentication & User Management**: Preconfigured Google OAuth 2.0 and passwordless OTP authentication via `nuxt-auth-utils`, integrated with Notion database user sync.
- 🤖 **Model Context Protocol (MCP) Integration**: Built-in AI tool server powered by `@nuxtjs/mcp-toolkit` and Zod schema validation.
- 🛠️ **Production Toolchain**: Fast development powered by Bun 1.4, Prisma 7 ORM, Pinia state management, Regle form validation, Tailwind CSS dark mode, Vitest unit testing, and Docker Swarm deployment.

---

## Quick Start

### 1. Scaffold a New Project

Clone the template into a new directory using `giget`:

```bash
# Using Bun (Recommended)
bunx giget@latest gh:shba007/nuxtemplate#main my-app

# Using PNPM
pnpm dlx giget@latest gh:shba007/nuxtemplate#main my-app

# Using NPX
npx giget@latest gh:shba007/nuxtemplate#main my-app
```

### 2. Install Dependencies

```bash
cd my-app
bun install
```

> **Note**: The `postinstall` script automatically executes `nuxt prepare && prisma generate`.

### 3. Configure Environment

Copy the example environment configuration:

```bash
cp .env.example .env
```

Populate the required credentials in `.env` (see [Environment Variables](#environment-variables)).

### 4. Run Development Server

```bash
# Web application (http://localhost:3000)
bun run dev

# Desktop application (Tauri + Nuxt Dev)
bun run tauri:dev

# Android mobile application
bun run tauri:dev:mobile
```

---

## Template Customization Checklist

When starting a new project from this template, replace the following project identifiers:

| File                               | Target Fields / Keys                                                                                                         | Description                                                                   |
| :--------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **`package.json`**                 | `name`, `description`, `author`, `repository.url`, `docker:build`, `docker:start`                                            | Package name, metadata, and Docker container tag.                             |
| **`nuxt.config.ts`**               | `site.name`, `site.url`, `mcp.name`, `pwa.manifest` (`name`, `short_name`, `description`, `theme_color`, `background_color`) | Site metadata, MCP server name, and PWA manifest properties.                  |
| **`tailwind.config.ts`**           | `theme.fontFamily.main`, `theme.fontFamily.sub`, `theme.colors` (`light`, `dark`, `primary`, `success`, `warning`, `alert`)  | Custom fonts and color palette scales.                                        |
| **`src-tauri/Cargo.toml`**         | `[package]` `name`, `description`, `authors`, `repository`                                                                   | Rust crate metadata.                                                          |
| **`src-tauri/tauri.conf.json`**    | `productName`, `identifier`, `app.windows[0].title`, `plugins.updater.pubkey`, `plugins.updater.endpoints`                   | App bundle ID (e.g. `com.company.app`), window title, and update server URLs. |
| **`.github/workflows/deploy.yml`** | Lines 270 & 278 (`asset_name`)                                                                                               | Output filename for Android release artifacts (`.apk` and `.aab`).            |
| **`public/pwa/` & `public/`**      | `logo.png`, `logo.svg`, `favicon.ico`, `public/pwa/icon-*.png`                                                               | Replace template icons and branding assets.                                   |

### Generate Application Icons

Generate cross-platform application icons for Tauri (Desktop & Mobile) and PWA from a source image:

```bash
bun tauri icon ./public/logo.svg
```

---

## Codebase Architecture & API Reference

### Project Structure

```
├── app/                  # Nuxt 3/4 Application Layer
│   ├── assets/           # Icons and style assets
│   ├── components/       # Vue components (AppInstallPrompt, etc.)
│   ├── composables/      # useAPI, useAppUpdater
│   ├── middleware/       # Route navigation guards (auth, guest)
│   ├── pages/            # File-based routing (index, auth/signin, auth/signup)
│   ├── plugins/          # Nuxt plugins (api client, native links handler)
│   └── app.vue           # Root component (SEO, schema, service worker, auto-updater)
├── server/               # Nitro Server Engine
│   ├── api/              # API Endpoints (health, user, push notifications, sitemap)
│   ├── emails/           # Transactional email definitions & templates
│   ├── mcp/              # Model Context Protocol tools (defineMcpTool)
│   ├── middleware/       # Server request middleware (auth verification)
│   ├── routes/           # Server routes (Google OAuth callback, Email OTP)
│   └── utils/            # Prisma client instance, Notion integration, helpers
├── shared/               # Universal code shared between client and server
│   ├── types/            # Zod validation schemas (emailFormSchema, userFormSchema)
│   └── utils/            # Case conversion and shared utilities
├── prisma/               # Database schema & migrations (SQLite default)
├── public/               # Static assets & Service Worker scripts (sw-main.ts, sw-push.ts)
├── src-tauri/            # Tauri 2 native desktop and mobile configuration
└── test/                 # Test suites (k6 load testing, Vitest unit tests)
```

### Key Composables

#### `useAppUpdater(options?: UseAppUpdaterOptions)`

Configures desktop background update checking and installation via `@tauri-apps/plugin-updater`.

- **Options Interface**:
  ```ts
  interface UseAppUpdaterOptions {
    checkOnStartup?: boolean // Default: true
    autoInstall?: boolean // Default: false
  }
  ```
- **Returns**:
  ```ts
  {
    isChecking: Ref<boolean>,
    isDownloading: Ref<boolean>,
    updateAvailable: Ref<boolean>,
    progress: Ref<number>,
    error: Ref<string | null>,
    version: Ref<string | null>,
    releaseNotes: Ref<string | null>,
    checkForUpdates: () => Promise<void>,
    downloadAndInstall: () => Promise<void>
  }
  ```

#### `useAPI(url, options)`

Custom wrapper over Nuxt's `createUseFetch` automatically pre-pending `runtimeConfig.public.siteUrl` as the base API URL.

### Server API Endpoints

| Endpoint                                 |  Method  |  Authentication  | Description                                                                                 |
| :--------------------------------------- | :------: | :--------------: | :------------------------------------------------------------------------------------------ |
| `/api/health`                            |  `GET`   |      Public      | Returns server health status, build time, and host node identifier.                         |
| `/auth/google`                           |  `GET`   |      Public      | Initiates Google OAuth 2.0 flow; syncs user profile with Notion and issues session cookie.  |
| `/auth/email`                            |  `POST`  |      Public      | Handles two-stage passwordless login: generates 8-char OTP, sends email, and validates OTP. |
| `/api/user`                              |  `POST`  |     Required     | Validates input against `userFormSchema` and updates profile in Notion.                     |
| `/api/notification/push/subscribe`       |  `POST`  |      Public      | Saves browser `PushSubscription` into storage (`data:subscription:notification`).           |
| `/api/notification/push/send`            |  `POST`  | Internal / Admin | Broadcasts a push notification to all stored subscribers.                                   |
| `/api/notification/push/:id/send`        |  `POST`  | Internal / Admin | Sends a push notification to a specific subscription ID.                                    |
| `/api/notification/push/:id/unsubscribe` | `DELETE` |      Public      | Removes a push notification subscription by ID.                                             |
| `/api/__sitemap__/urls`                  |  `GET`   |      Public      | Dynamic sitemap URL provider consumed by `@nuxtjs/seo`.                                     |

---

## Desktop & Mobile Release Signing

### 1. Desktop Updater Signing (Tauri)

The desktop updater verifies update bundles cryptographically before installation.

1. **Generate Minisign Keypair**:
   ```bash
   bun x @tauri-apps/cli signer generate -w ./src-tauri/app-sign.key
   ```
2. **Configure Public Key**:
   Paste the generated public key into `src-tauri/tauri.conf.json`:
   ```json
   {
     "plugins": {
       "updater": {
         "pubkey": "YOUR_GENERATED_PUBLIC_KEY",
         "endpoints": ["https://github.com/<OWNER>/<REPO>/releases/latest/download/latest.json"]
       }
     }
   }
   ```
3. **Configure CI Secrets**:
   Save the private key and password as GitHub repository secrets:
   - `TAURI_SIGNING_PRIVATE_KEY`: Complete content of `./src-tauri/app-sign.key`
   - `TAURI_SIGNING_PRIVATE_KEY_PASSWORD`: Passphrase used when generating the key (leave blank if none).

### 2. Android Keystore Signing

1. **Generate Keystore**:
   ```bash
   cd src-tauri/gen/android
   keytool -genkey -v -keystore release-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias release-key
   ```
2. **Export Keystore to Base64 (for CI)**:
   ```bash
   cat release-keystore.jks | base64
   ```
3. **Local Android Development**:
   Create `src-tauri/gen/android/keystore.properties`:
   ```properties
   keyAlias=release-key
   password=YOUR_KEYSTORE_PASSWORD
   storeFile=../release-keystore.jks
   ```
4. **Re-initialize Android (if modifying bundle ID)**:
   ```bash
   rm -rf src-tauri/gen/android
   bun tauri android init
   ```

---

## Environment Variables

Configure the following environment variables in `.env` (development) and your production deployment:

| Variable                                  |  Type   | Required | Description                                                                          |
| :---------------------------------------- | :-----: | :------: | :----------------------------------------------------------------------------------- |
| `NODE_ENV`                                | String  |   Yes    | Runtime environment (`development` \| `production`).                                 |
| `DATABASE_URL`                            | String  |   Yes    | Prisma connection string (e.g. `file:./dev.db`).                                     |
| `NUXT_SESSION_PASSWORD`                   | String  |   Yes    | At least 32-character random string used by `nuxt-auth-utils` to seal cookies.       |
| `NUXT_PUBLIC_SITE_URL`                    |   URL   |   Yes    | Canonical public URL of the application.                                             |
| `NUXT_OAUTH_GOOGLE_CLIENT_ID`             | String  | Optional | Google Cloud OAuth Client ID for social authentication.                              |
| `NUXT_OAUTH_GOOGLE_CLIENT_SECRET`         | String  | Optional | Google Cloud OAuth Client Secret.                                                    |
| `NUXT_OAUTH_GOOGLE_REDIRECT_URL`          |   URL   | Optional | Authorized OAuth redirect URL.                                                       |
| `NOTION_API_KEY`                          | String  | Optional | Notion Integration token for user profile database persistence.                      |
| `NUXT_PRIVATE_NOTION_DB_ID`               | JSON/ID | Optional | Target Notion Database ID mapping for user storage.                                  |
| `NUXT_PUBLIC_VAPID_KEY`                   | String  | Optional | Public VAPID key for Web Push client subscription.                                   |
| `NUXT_PRIVATE_VAPID_KEY`                  | String  | Optional | Private VAPID key for signing web push payloads.                                     |
| `NUXT_PRIVATE_VAPID_SUBJECT`              | String  | Optional | `mailto:` address associated with VAPID keys.                                        |
| `NUXT_PUBLIC_SCRIPTS_GOOGLE_ANALYTICS_ID` | String  | Optional | Google Analytics Measurement ID (e.g. `G-XXXXXXXXXX`).                               |
| `NUXT_OG_IMAGE_SECRET`                    | String  | Optional | Secret key for dynamic OpenGraph image signing.                                      |
| `NUXT_PRIVATE_EMAIL_API_URL`              |   URL   | Optional | Endpoint URL for email dispatch API (e.g. Resend, webhook, or custom email service). |
| `NUXT_PRIVATE_EMAIL_API_KEY`              | String  | Optional | API key / Bearer token used for authenticating with the email dispatch API.          |

### GitHub Actions Secrets & Variables

Configure these settings under **Settings > Secrets and variables > Actions** for automated CI/CD:

| Name                                 |   Type   | Description                                                  |
| :----------------------------------- | :------: | :----------------------------------------------------------- |
| `USERNAME`                           | Variable | GitHub / Container registry username.                        |
| `SITE_URL`                           | Variable | Production site URL passed to Docker and Tauri builds.       |
| `DATABASE_URL`                       | Variable | Database connection string used during integration tests.    |
| `GH_PAT`                             |  Secret  | GitHub Personal Access Token for changelog release creation. |
| `TAURI_SIGNING_PRIVATE_KEY`          |  Secret  | Private key for signing Tauri desktop updater binaries.      |
| `TAURI_SIGNING_PRIVATE_KEY_PASSWORD` |  Secret  | Password for the Tauri updater private key.                  |
| `ANDROID_KEY_ALIAS`                  |  Secret  | Key alias name in `release-keystore.jks`.                    |
| `ANDROID_KEY_PASSWORD`               |  Secret  | Password for the Android release keystore.                   |
| `ANDROID_KEY_BASE64`                 |  Secret  | Base64-encoded string of `release-keystore.jks`.             |

---

## Production Deployment

### Docker Container

The project includes an optimized multi-stage `Dockerfile` running on `oven/bun:1-alpine`.

```bash
# Build the container image
bun run docker:build

# Run the container locally on port 4000
bun run docker:start
```

### Docker Swarm Stack

The production stack configuration is defined in `docker-compose.prod.yml`:

1. **Initialize Swarm on Manager Node**:
   ```bash
   docker swarm init --advertise-addr <MANAGER-IP>
   ```
2. **Create Persistent Data Directory on Host**:
   ```bash
   mkdir -p /root/nuxtemplate/.data
   ```
3. **Deploy the Stack**:
   ```bash
   docker stack deploy --compose-file docker-compose.prod.yml nuxtemplate
   ```
4. **Scale Services**:
   ```bash
   docker service scale nuxtemplate_app=2
   ```

---

## Development

<details>
<summary><strong>Available Scripts & Tasks</strong></summary>

All scripts are executed using Bun:

| Script                          | Command                                              | Purpose                                                    |
| :------------------------------ | :--------------------------------------------------- | :--------------------------------------------------------- |
| `bun run dev`                   | `nuxt dev`                                           | Start Nuxt development server with hot-module replacement. |
| `bun run build`                 | `nuxt build`                                         | Build the full-stack Nuxt application for production.      |
| `bun run generate`              | `nuxt generate`                                      | Prerender static HTML for distribution (used by Tauri).    |
| `bun run preview`               | `nuxt preview`                                       | Locally preview the production build output.               |
| `bun run start`                 | `node --env-file=.env.prod .output/server/index.mjs` | Start production server with environment variables.        |
| `bun run clean`                 | `nuxt cleanup && (cd src-tauri && cargo clean)`      | Clean Nuxt build cache and Cargo artifacts.                |
| `bun run lint`                  | `eslint . --fix`                                     | Lint codebase with ESLint and auto-fix violations.         |
| `bun run format`                | `prettier . --write`                                 | Format code using Prettier with Tailwind CSS sorting.      |
| `bun run detect`                | `gitleaks git --verbose`                             | Scan commit history for secrets using Gitleaks.            |
| `bun run test`                  | `vitest`                                             | Run unit and component test suites with Vitest.            |
| `bun run test:watch`            | `vitest --watch`                                     | Run Vitest in interactive watch mode.                      |
| `bun run test:coverage`         | `vitest --coverage`                                  | Generate code test coverage report.                        |
| `bun run test:unit`             | `vitest --project unit`                              | Run unit test project suite only.                          |
| `bun run test:nuxt`             | `vitest --project nuxt`                              | Run Nuxt-specific test suite.                              |
| `bun run test:load`             | `k6 run test/load.test.ts`                           | Execute API load testing suite with k6.                    |
| `bun run prisma:push`           | `prisma db push`                                     | Push schema changes directly to the database.              |
| `bun run prisma:pull`           | `prisma db pull`                                     | Introspect existing database into Prisma schema.           |
| `bun run prisma:migrate:dev`    | `prisma migrate dev`                                 | Create and apply migration in development.                 |
| `bun run prisma:migrate:deploy` | `prisma migrate deploy`                              | Apply pending migrations in production.                    |
| `bun run prisma:studio`         | `prisma studio`                                      | Open Prisma Studio GUI to view and edit database data.     |
| `bun run tauri:dev`             | `tauri dev`                                          | Launch native desktop application in development mode.     |
| `bun run tauri:build`           | `tauri build`                                        | Build native desktop binaries for current host OS.         |
| `bun run tauri:dev:mobile`      | `tauri android dev`                                  | Launch Android application in emulator / connected device. |
| `bun run tauri:build:mobile`    | `tauri android build`                                | Compile Android universal release APK and AAB.             |

</details>

---

## License

Published under the [MIT](https://github.com/shba007/nuxtemplate/blob/main/LICENSE) license.

<br>

<a href="https://github.com/shba007/nuxtemplate/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=shba007/nuxtemplate" alt="Contributors" />
</a>
