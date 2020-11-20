import { formatError } from "graphql";
import { gql } from "apollo-server-express";
const user = [
  {
    id: "1",
    name: "A",
    username: "Aomchai",
    password: "123456",
    email: "A@gmail.com",
  },
  {
    id: "2",
    name: "B",
    username: "Bomchai",
    password: "123456",
    email: "B@gmail.com",
  },
  {
    id: "3",
    name: "C",
    username: "Comchai",
    password: "123456",
    email: "C@gmail.com",
  },
  {
    id: "4",
    name: "D",
    username: "Domchai",
    password: "123456",
    email: "D@gmail.com",
  },
];
export const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
        return user.filter((user)=>user.id.toString()===args.id)[0];
    },
    users: (parent, args, context, info) => {
        return user;
    },
  },
};
export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    email: String!
  }
  type Query {
    user(id: ID!): User
    users: [User]!
  }
`;
