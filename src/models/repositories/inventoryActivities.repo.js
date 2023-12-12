import { query } from "express";
import inventoryComeVoucher from "../inventoryComeVoucher.model"
import inventoryDeleteVoucher from "../inventoryDeleteVoucher.model"
import inventoryLeaveVoucher from "../inventoryLeaveVoucher.model"


// const findinventoryComeVoucherByIdAndTime = async (Id,Time) => {    
//     return await inventoryComeVoucher.findOne({inventoryItem:Id,time:Time}).lean();
// }; findinventoryComeVoucherByIdAndTime

const findinventoryDeleteVoucherByIdAndTime  = async (Id,Time) => {
    return await inventoryDeleteVoucher.find({inventoryItem:Id,time:Time}).lean();
};

const findinventoryLeaveVoucherByIdAndTime = async(Id,Time) => {
    return await inventoryLeaveVoucher.findOne({ inventoryItem:Id, time: Time }).lean();
}

export {findinventoryDeleteVoucherByIdAndTime, findinventoryLeaveVoucherByIdAndTime }