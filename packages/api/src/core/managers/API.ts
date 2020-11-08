import http from "http";

import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import app from "@root/app";

import AnimeResolver from "@http/graphql/anime/AnimeResolver";

interface OptionsManager {
  port: number;
}

class APIManager {
  private port: number;

  constructor({ port }: OptionsManager) {
    this.port = port;
  }

  async connect() {
    const httpServer = http.createServer(app);
    
    const schema = await buildSchema({
      resolvers: [AnimeResolver],
    });

    const apolloServer = new ApolloServer({ schema });

    apolloServer.applyMiddleware({ app, path: "/graphql" });

    httpServer.listen({ port: this.port }, (): void =>
      console.log("Server runinng")
    );
  }
}

export default APIManager;
