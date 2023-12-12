import inventoryItem from "../inventoryItem.model.js";

const findinventoryItemByName = async (name) => {
  return await inventoryItem.findOne({ inventoryItem_name: name }).lean();
};

const findinventoryItemById = async (id) => {
  return await inventoryItem.findOne({ _id: id }).lean();
};

const updateQuantityinventoryItem = async (Id, quantity) => {
  return await inventoryItem.findOneAndUpdate(
    { _id: Id },
    {
      $inc: {
        inventoryItem_quantity: quantity,
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
};

const updateinventoryItem = async ({ inventoryItemId, updateInfo }) => {
  const filter = { _id: inventoryItemId };
  const updateSet = { new: true, upsert: true };

  return await inventoryItem.findOneAndUpdate(filter, updateInfo, updateSet);
};

export { findinventoryItemByName, updateQuantityinventoryItem, updateinventoryItem, findinventoryItemById };
