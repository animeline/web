# Monorepo
yarn add -D -W lerna rimraf typescript ttypescript
yarn add -W graphql

# Api
yarn workspace @animeline/api add apollo-server-express axios cors express express-graphql reflect-metadata type-graphql
yarn workspace @animeline/api add -D @types/express @zerollup/ts-transform-paths cross-env dotenv nodemon ts-node tsconfig-paths