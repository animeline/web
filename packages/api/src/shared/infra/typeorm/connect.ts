import { createConnection } from "typeorm";

import { getPath, getRootPath } from "@shared/utils/path";

createConnection({
  type: "postgres",
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [
    getRootPath("modules", "**", "infra", "typeorm", "entities", "*.ts"),
  ],
  migrations: [getPath("migrations", "*.ts")],
  cli: {
    migrationsDir: getPath("migrations", "*.ts"),
  },
}).then(() => console.log("Successfully connected with database"));
