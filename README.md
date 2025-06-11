<p align="center">
  <img src="./public/logo.png" lt="Logo" width="65" />
<p>

# Nuxt Template

<p align="center">
  <a href="https://shirsendu-bairagi.betteruptime.com">
    <img src="https://uptime.betterstack.com/status-badges/v3/monitor/10aqw.svg" alt="uptime status">
  </a>
</p>

![Landing](public/previews/landing.webp)

> Nuxt + Typescript + Tailwind + Tauri Template

- 📦 SSR
- 🖼️ OG Tags
- 🚀 PWA
- ✋ Push Notification
- 🌙 Light/Dark Mode
- 🐋 Containerized
- 🪄 CI/CD (Github Action)
- 🎭 Authentication (OAuth 2.0)
- ⚡️ API Route Caching
- 📐 Analytics

# Todo

- [ ] Add Testing

## External Dependencies

- gitleaks

## Clone Template

Clone the template

```bash
pnpx giget@latest gh:shba007/nuxtemplate
```

## Change Placeholder Value

### In docker-compose.yml

- name
- image
- port

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

### In .github\workflows\deploy.yml change the following

- asset_name [deploy.yml](.github/workflows/deploy.yml) in line 271

### In github registry add Repo or Org Vars following

- Vars
  - USERNAME

## Change the Icons and Screenshots

dir public/pwa

## Reinitialize Android

rm -rf native/gen/android
bun tauri android init

set tauri.conf.json to "version": "../package.json",

## Development Server

Start the development server on `http://localhost:3000`:

## How to Deploy

1. Initialize Swarm on the Manager Node

```bash
docker swarm init --advertise-addr <MANAGER-IP>
```

2. Join Worker Nodes to the Swarm

```bash
docker swarm join --token <WORKER-TOKEN> <MANAGER-IP>:2377
```

3. Check Node Status

```bash
docker node ls
```

4. Create a docker volume

```bash
docker volume create \
  --name nuxtemplate_static \
  --driver local \
  --opt type=none \
  --opt device=~/shba007/nuxtemplate/static \
  --opt o=bind
```

5. Use Docker Stack to deploy multi-container application

```bash
docker stack deploy --compose-file docker-compose.prod.yml nuxtemplate
```

6. Scale service

```bash
docker service scale nuxtemplate_app=2
```

7. Verify

```bash
docker service ls
docker service ps nuxtemplate_app
```
