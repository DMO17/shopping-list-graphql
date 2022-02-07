const { Shopping } = require("../models");

const deleteShoppingList = async (_, { shoppingItemId }) => {
  const deleteItem = await Shopping.findByIdAndDelete(shoppingItemId);

  return deleteItem;
};

module.exports = deleteShoppingList;
