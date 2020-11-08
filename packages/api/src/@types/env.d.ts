declare namespace NodeJS {
  interface ProcessEnv {
    PORT: number;
    NODE_ENV: 'production' | 'development';

    ANIME_API_URL: string;
  }
}