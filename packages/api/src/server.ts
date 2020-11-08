import "reflect-metadata";

import path from "path";

import dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV === "development"
      ? path.join(__dirname, "..", ".env.development")
      : path.join(__dirname, "..", ".env.production"),
});

import AppManager from "./core/managers/API";

const appManager = new AppManager({
  port: process.env.PORT,
});

appManager.connect();
