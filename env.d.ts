interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENVIRONMENT: string;
  readonly VITE_SECURE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}