const { Shopping } = require("../models");

const updateOneShoppingList = async (_, { input, shoppingItemId }) => {
  const updateList = await Shopping.findByIdAndUpdate(
    shoppingItemId,
    { $set: { ...input } },
    {
      returnDocument: "after",
    }
  );

  return updateList;
};

module.exports = updateOneShoppingList;
