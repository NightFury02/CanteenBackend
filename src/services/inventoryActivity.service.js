import inventoryLeaveVoucher from "../models/inventoryLeaveVoucher.model.js";
import inventoryComeVoucher from '../models/inventoryComeVoucher.model.js';
import inventoryItem from "../models/inventoryItem.model.js";
import inventoryDeleteVoucher from "../models/inventoryDeleteVoucher.model.js";

import {
    updateQuantityinventoryItem, findinventoryItemById
} from "../models/repositories/inventoryItem.repo.js"
import { convertToObjectId } from "../utils/index.js";

class inventoryActivityService {
    // Come Voucher: (create new InventoryItem, created time, creator)
    static async createComeVoucher(infoCvoucher) {
        const { userId, item_list, Time } = infoCvoucher;
        const newComeVoucher = await inventoryComeVoucher.create({
            user_id: convertToObjectId(userId),
            time: Time
        });
        for (let item of item_list) {
            const newInventoryItem = await inventoryItem.create({
                inventoryItem_name: item.inventoryItem_name,
                inventoryItem_quantity: item.inventoryItem_quantity,
                inventoryItem_exp: item.inventoryItem_exp,
                cost: item.cost
            });
            newComeVoucher.come_list.push(newInventoryItem)
        }
        newComeVoucher.save();
        return newComeItem;
    }
    static async getAllComeVoucher(){
        return inventoryComeVoucher.find();
    }
    // Leave Voucher: update quantity of InventoryItem, time and updater
    static async createLeaveVoucher(infoLvoucher) {
        const { userId, item_list, Time } = infoLvoucher;
        const newLeaveVoucher = await inventoryLeaveVoucher.create({
            user_id: convertToObjectId(userId),
            time: Time
        });
        const leaveItemAct = await inventoryLeaveVoucher.create({
            user_id: convertToObjectId(userId),
            inventoryItem: convertToObjectId(itemId),
            quantity: Quantity,

        });
        for (let item of item_list) {
            const newInventoryItem = await inventoryItem.create({
                inventoryItem_name: item.inventoryItem_name,
                inventoryItem_quantity: item.inventoryItem_quantity,
                inventoryItem_exp: item.inventoryItem_exp,
                cost: item.cost
            });
            newComeVoucher.come_list.push(newInventoryItem)
        }
        const invenItem = await findinventoryItemById(convertToObjectId(itemId));
        const newQuantity = invenItem.inventoryItem_quantity - Quantity;
        updateQuantityinventoryItem(convertToObjectId(itemId), newQuantity);
        return leaveItemAct;
    }
    // Delete Voucher: Delete InventoryItem, time and deleter
    static async createDeleteVoucher(infoDvoucher) {
        const { userId, itemId } = infoDvoucher;
        const objectIdItemId = convertToObjectId(itemId);
        const deleteItem = await findinventoryItemById(itemId);
        const Quantity = deleteItem.inventoryItem_quantity;
        const Time = (new Date()).toISOString().slice(0, 10);
        const deleteItemAct = await inventoryDeleteVoucher.create({
            user_id: convertToObjectId(userId),
            inventoryItem: itemId,
            quantity: Quantity,
            time: Time,
        });
        await inventoryItem.findOneAndDelete({ _id: objectIdItemId });
        return deleteItemAct;
    }
}
export default inventoryActivityService;
