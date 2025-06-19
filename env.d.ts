interface ImportMetaEnv {
  readonly NODE_ENV: 'development' | 'production'
  readonly PLATFORM_ENV: 'native' | 'web'
  readonly NOTION_API_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
