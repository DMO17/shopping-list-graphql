const shopping = require("./shopping");
const shoppingList = require("./shoppingList");
const createShoppingList = require("./createShoppingList");
const updateOneShoppingList = require("./updateOneShoppingList");

const resolvers = {
  Query: {
    shoppingList,
    shopping,
  },
  Mutation: {
    createShoppingList,
    updateOneShoppingList,
  },
};

module.exports = resolvers;
