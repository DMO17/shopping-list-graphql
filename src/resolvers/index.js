const shopping = require("./shopping");
const shoppingList = require("./shoppingList");

const resolvers = {
  Query: {
    shoppingList,
    shopping,
  },
};

module.exports = resolvers;
