import fs from 'fs'
import path from 'path'

import { ApolloServer, gql } from 'apollo-server-express';
// import { typeDefs, resolvers } from './schema/typeDefs';
//import typeDefs from './schema/typeDefs'
import resolvers from './resolvers/resolver'
const typeDefs = fs
.readFileSync(path.join(__dirname, "schema", "schema.graphql"), "utf8")
.toString();

const server = new ApolloServer({
    typeDefs,
    resolvers,
  }
);
  export default server;