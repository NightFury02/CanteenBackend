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
        const newinventoryItem = await inventoryItem.create(element);
        results.push(newinventoryItem);
    }
    results.save();
    return results;
  }
  static async getAllinventoryItem(){
    return inventoryItem.find()
  }
  static async updateinventoryItem({ inventoryItemId, updateInfo }) {
    return updateinventoryItem({ inventoryItemId, updateInfo });
  } 
  static async updateQuantityInventoryItem({ inventoryItemId,quantity}){
    return updateQuantityinventoryItem(inventoryItemId,quantity)
  }
  static async deleteinventoryItem(inventoryItemId) {
    return inventoryItem.findOneAndDelete({ _id: inventoryItemId });
  }
}

export default inventoryItemService;
