import "dotenv/config";
import "reflect-metadata";

import AppManager from "./core/managers/API";

const appManager = new AppManager({
  port: 3333,
});

appManager.connect();
