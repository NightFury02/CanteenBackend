import inventoryLeaveVoucher from "../models/inventoryLeaveVoucher.model.js";
import inventoryComeVoucher from "../models/inventoryComeVoucher.model.js";
import inventoryItem from "../models/inventoryItem.model.js";
import inventoryDeleteVoucher from "../models/inventoryDeleteVoucher.model.js";
import{
    updateQuantityinventoryItem, findinventoryItemById
} from "../models/repositories/inventoryItem.repo.js"
import { convertToObjectId } from "../utils/index.js";

class inventoryActivityService {
    // Come Voucher: (create new InventoryItem, created time, creator)
    static async createComeVoucher(infoCvoucher){
        const { userId, Itemname, Quantity, Time, Exp } = infoCvoucher;
        const newinventoryItem = await inventoryItem.create({
            inventoryItem_name: Itemname,
            inventoryItem_quantity: Quantity,
            inventoryItem_exp: Exp
        }) ;
        newinventoryItem.create();
        const newComeItem = await inventoryComeVoucher.create({
            user_id: convertToObjectId(userId),
            itemName: Itemname,
            quantity: Quantity,
            time: Time,
            exp: Exp,
        });
        return newComeItem;
    }
    // Leave Voucher: update quantity of InventoryItem, time and updater
    static async createLeaveVoucher(infoLvoucher){
        const { userId, itemId, Quantity, Time } = infoLvoucher;
        const leaveItemAct = await inventoryLeaveVoucher.create({
            user_id: convertToObjectId(userId),
            inventoryItem: convertToObjectId(itemId),
            quantity: Quantity,
            time: Time
        });
        const invenItem = await findinventoryItemById(convertToObjectId(itemId));
        const newQuantity = invenItem.inventoryItem_quantity - Quantity;
        updateQuantityinventoryItem(convertToObjectId(itemId),newQuantity);
        return leaveItemAct;
    }
    // Delete Voucher: Delete InventoryItem, time and deleter
    static async createDeleteVoucher(infoDvoucher) {
        const { userId, itemId, Quantity, Time } = infoDvoucher;
      
        const deleteItemAct = await inventoryDeleteVoucher.create({
          user_id: convertToObjectId(userId),
          inventoryItem: itemId,
          quantity: Quantity,
          time: Time,
        });
      
        const objectIdItemId = convertToObjectId(itemId);
      
        await inventoryItem.findOneAndDelete({ _id: objectIdItemId });
      
        return deleteItemAct;
      }
}
export default inventoryActivityService;
