import "dotenv/config";
import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { fileLoader } from "merge-graphql-schemas";

import AuthenticationAssurance from "@modules/users/infra/http/middlewares/AuthenticationAssurance";

import "@shared/infra/typeorm/connect";

import { getRootPath } from "@shared/utils/path";

(async () => {
  const resolversArray: any = fileLoader(
    getRootPath(
      "modules",
      "**",
      "infra",
      "http",
      "graphql",
      "resolvers",
      "*.ts"
    )
  );

  const schema = await buildSchema({
    resolvers: resolversArray,
    authChecker: AuthenticationAssurance,
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      const context = {
        req,
        token: req.headers.authorization,
      };

      return context;
    },
  });

  server.listen({ port: process.env.PORT }, (): void =>
    console.log(
      `Server started in port ${
        process.env.NODE_ENV === "development"
          ? `http://localhost:${process.env.PORT}`
          : process.env.PORT
      }`
    )
  );
})();
