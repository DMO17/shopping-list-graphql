const { Shopping } = require("../models");

const shoppingList = async () => {
  const shoppingList = await Shopping.find({});

  return shoppingList;
};

module.exports = shoppingList;
