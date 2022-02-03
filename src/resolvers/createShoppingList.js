const { Shopping } = require("../models");

const createShoppingList = async (_, { input }) => {
  const newShoppingList = new Shopping(input);

  await newShoppingList.save();

  return newShoppingList;
};

module.exports = createShoppingList;
