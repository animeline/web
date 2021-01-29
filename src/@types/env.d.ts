declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'production' | 'development' | 'testing';

    REACT_APP_API_URL: string;
  }
}