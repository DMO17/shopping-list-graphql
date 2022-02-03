const shopping = require("./shopping");
const shoppingList = require("./shoppingList");
const createShoppingList = require("./createShoppingList");
const updateOneShoppingList = require("./updateOneShoppingList");
const deleteShoppingList = require("./deleteShoppingList");

const resolvers = {
  Query: {
    shoppingList,
    shopping,
  },
  Mutation: {
    createShoppingList,
    updateOneShoppingList,
    deleteShoppingList,
  },
};

module.exports = resolvers;
