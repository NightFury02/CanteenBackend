import SuccessResponse from "../core/success.response.js";
import inventoryItemService from "../services/inventoryItem.service.js";

class inventoryItemController {
  static async createinventoryItems(req, res) {
    const results = await inventoryItemService.createinventoryItems(req.body.listinventoryItems);

    new SuccessResponse({
      message: "Created inventoryItems successfully!",
      data: results,
    }).send(res);
  }

  static async getinventoryItems(req, res) {
    const results = await inventoryItemService.getinventoryItemByType(req.params.type);

    new SuccessResponse({
      message: "Get inventoryItems successfully!",
      data: results,
    }).send(res);
  }

  static async updateinventoryItem(req, res) {
    const data = await inventoryItemService.updateinventoryItem({
      inventoryItemId: req.params.id,
      updateInfo: req.body,
    });

    new SuccessResponse({
      message: "Update inventoryItem successfully!",
      data,
    }).send(res);
  }

  static async deleteinventoryItem(req, res) {
    const data = await inventoryItemService.deleteinventoryItem(req.params.id);

    new SuccessResponse({
      message: "Delete inventoryItem successfully!",
      data,
    }).send(res);
  }
}

export default inventoryItemController;
