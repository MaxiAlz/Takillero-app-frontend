interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_ENVIRONMENT: string;
  // Otras variables de entorno que uses
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
