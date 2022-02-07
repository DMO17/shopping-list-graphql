const { Shopping } = require("../models");

const shopping = async (parent, { shoppingItemId }) => {
  const shoppingItem = await Shopping.findById(shoppingItemId);

  // console.log(shoppingItemId, shoppingItem);

  return shoppingItem;
};

module.exports = shopping;
