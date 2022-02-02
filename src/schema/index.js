const { gql } = require("apollo-server");

const typeDefs = gql`
  type Shopping {
    _id: ID!
    name: String
    date: String
    shop: String
    items: [Item]
  }

  type Item {
    name: String
    quantity: Int
  }

  type Query {
    shoppingList: [Shopping]
    shopping(shoppingItemId: ID!): Shopping
  }
`;

module.exports = typeDefs;
