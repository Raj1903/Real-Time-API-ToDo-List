const express = require('express');
const auth = require('../middlewares/auth')
const router = express.Router();
const appConfig = require("../../config/appConfig")
const itemController = require("../controllers/itemController");




module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/items`;

    


 
    app.post(`${baseUrl}/additem`, auth.isAuthorized, itemController.addItemFunction);
    /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {post} /api/v1/items/additem api to Add item.
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} listId Id of the List. (body params) (required)
     * @apiParam {string} itemName Name of the item. (body params) (required)
     * @apiParam {string} itemCreatorId User Id of the user creating todo. (body params) (required)
     * @apiParam {string} itemCreatorName User Name of the user creating todo. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
     {
    "error": false,
    "message": "Item Created",
    "status": 200,
    "data": {
        "listId": "9VDNZig0Z",
        "itemId": "rPTot_Fqs",
        "itemName": "List ",
        "itemCreatorId": "xlGuvvmqm",
        "itemCreatorName": "Akash kumar",
        "itemCreatedOn": "2020-06-17T09:45:02.000Z",
        "itemModifiedOn": "2020-06-17T09:45:02.000Z",
        "itemDone": "no",
        "_id": "5ee9e61ea616db01d8d59545",
        "subItems": [],
        "__v": 0
    }
}  */


    app.put(`${baseUrl}/:itemId/updateitem`, auth.isAuthorized, itemController.updateItemFunction);
    /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {put} /api/v1/items/:itemId/updateitem api to Update item Details.
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} itemName Name of the item. (body params) (required)
     * @apiParam {string} itemModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} itemModifierName User Name of the user modifying todo. (body params) (required)
     * @apiParam {string} itemDone yes/no to make item done/undone. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Item details Updated",
            "status": 200,
            "data": null
        }    
    */

    // params: itemId.
    app.post(`${baseUrl}/:itemId/delete`, auth.isAuthorized, itemController.deleteItemFunction);

    /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {post} /api/v1/items/:itemId/delete api to Delete item.
     * @apiParam {string} itemId Id of the item to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the Item successfully",
            "status": 200,
            "data": null
        }
    */


    app.get(`${baseUrl}/view/all/items/:listId`, auth.isAuthorized, itemController.getAllItemsFunction);
    /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {get} /api/v1/items/view/all/items/:userId api for Getting all items of User.
     * @apiParam {string} listId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Items Found and Listed",
            "status": 200,
            "data": [
                "__v": 0,
                "_id": "5ee355c7650522007c38d75d",
                "subItems": [],
                "itemModifierName": "Palak Sinha",
                "itemModifierId": "GP2wuKw-W",
                "itemModifiedOn": "2020-06-12T12:45:35.000Z",
                "itemCreatedOn": "2020-06-12T12:45:35.000Z",
                "itemCreatorName": "Palak sinha",
                "itemCreatorId": "GP2wuKw-W",
                "itemName": "My List update 1",
                "itemId": "r9Sla-Pqc",
                "listId": "47SBxBeDz"
            ]
        }
    */


    
    app.get(`${baseUrl}/:itemId/details`, auth.isAuthorized, itemController.getItemDetailsFunction);
    /**
     * @apiGroup items 
     * @apiVersion  1.0.0
     * @api {get} /api/v1/items/:itemId/details api for getting item details.
     * @apiParam {string} itemId itemId of the item. (header params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Item Found",
    "status": 200,
    "data": {
        "_id": "5ee9e61ea616db01d8d59545",
        "listId": "9VDNZig0Z",
        "itemId": "rPTot_Fqs",
        "itemName": "List ",
        "itemCreatorId": "xlGuvvmqm",
        "itemCreatorName": "Akash kumar",
        "itemCreatedOn": "2020-06-17T09:45:02.000Z",
        "itemModifiedOn": "2020-06-17T09:45:02.000Z",
        "itemModifierId": "",
        "itemModifierName": "",
        "itemDone": "no",
        "subItems": [],
        "__v": 0
    }
}
    */





}
