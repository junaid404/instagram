const express = require('express');
const { ApolloServer, PubSub } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const http = require('http');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const $PORT = process.env.PORT || 8080;
const pubsub = new PubSub();
const apolloServer = new ApolloServer({
  typeDefs: mergeTypeDefs(loadFilesSync(path.join(__dirname, './typedefs'))),
  resolvers: mergeResolvers(loadFilesSync(path.join(__dirname, './resolvers'))),
  context: ({ req }) => ({
    req,
    pubsub,
  }),
});

app.use(cors());
app.use(express.json());

const httpServer = http.createServer(app);
apolloServer.applyMiddleware({ app });
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen($PORT, () => {
  console.log(
    `[ SUCCESS ] GQL server is listening on http://localhost:${$PORT}${apolloServer.graphqlPath} 🚀`
  );
});
