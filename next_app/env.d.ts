// env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_GITHUB_ID: string;
    AUTH_GITHUB_SECRET: string;
  }
}
