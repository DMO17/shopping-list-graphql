const { Schema, model } = require("mongoose");

const shoppingSchema = {
  name: {
    type: String,
  },
  date: {
    type: String,
  },
  shop: {
    type: String,
  },
  items: [
    {
      type: String,
    },
  ],
};

const schema = new Schema(shoppingSchema);
const Shopping = model("shoppingList", schema);

module.exports = Shopping;
