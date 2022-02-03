const { gql } = require("apollo-server");

const typeDefs = gql`
  type Shopping {
    _id: ID!
    name: String
    date: String
    shop: String
    items: [String]
  }

  type Query {
    shoppingList: [Shopping]
    shopping(shoppingItemId: ID!): Shopping
  }

  input ShoppingInput {
    name: String!
    date: String!
    shop: String!
    items: [String]
  }

  type Mutation {
    createShoppingList(input: ShoppingInput!): Shopping
  }
`;

module.exports = typeDefs;

// type Item {
//   name: String
//   quantity: Int
// }
