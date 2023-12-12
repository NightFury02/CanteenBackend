import inventoryItem from "../models/inventoryItem.model.js";
import {
  findinventoryItemByName,
  updateinventoryItem,
  updateQuantityinventoryItem,
} from "../models/repositories/inventoryItem.repo.js";

class inventoryItemService {
  static async createinventoryItems(listinventoryItems) {
    const results = [];

    for (const element of listinventoryItems) {
      element.inventoryItem_name = element.inventoryItem_name.toLowerCase();
      const existedinventoryItem = await findinventoryItemByName(element.inventoryItem_name);

      if (existedinventoryItem) {
        const updatedinventoryItem = await updateQuantityinventoryItem(
          element.inventoryItem_name,
          element.inventoryItem_quantity
        );
        results.push(updatedinventoryItem);
      } else {
        const newinventoryItem = await inventoryItem.create(element);
        results.push(newinventoryItem);
      }
    }
    results.save();
    return results;
  }
 
  static async updateinventoryItem({ inventoryItemId, updateInfo }) {
    return updateinventoryItem({ inventoryItemId, updateInfo });
  }

  static async deleteinventoryItem(inventoryItemId) {
    return inventoryItem.findOneAndDelete({ _id: inventoryItemId });
  }
}

export default inventoryItemService;
