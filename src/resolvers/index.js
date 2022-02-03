const shopping = require("./shopping");
const shoppingList = require("./shoppingList");
const createShoppingList = require("./createShoppingList");

const resolvers = {
  Query: {
    shoppingList,
    shopping,
  },
  Mutation: {
    createShoppingList,
  },
};

module.exports = resolvers;
