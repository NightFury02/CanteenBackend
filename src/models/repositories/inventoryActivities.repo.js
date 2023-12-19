import { query } from "express";
import inventoryComeVoucher from "../inventoryComeVoucher.model"
import inventoryDeleteVoucher from "../inventoryDeleteVoucher.model"
import inventoryLeaveVoucher from "../inventoryLeaveVoucher.model"


const findinventoryComeVoucherByTime = async(Time) =>{
    return await inventoryComeVoucher.find({time:Time}).lean();
};

const findinventoryDeleteVoucherTime  = async (Time) => {
    return await inventoryDeleteVoucher.find({time:Time}).lean();
};

const findinventoryLeaveVoucherTime = async(Time) => {
    return await inventoryLeaveVoucher.find({time: Time }).lean();
};

export {findinventoryComeVoucherByTime, findinventoryDeleteVoucherTime, findinventoryLeaveVoucherTime }