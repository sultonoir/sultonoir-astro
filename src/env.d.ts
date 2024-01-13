/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    email: string;
  }
}
interface ImportMetaEnv {
  readonly JWT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
