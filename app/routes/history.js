const express = require('express');
const appConfig = require("../../config/appConfig")
const router = express.Router();
const auth = require('../middlewares/auth')
const historyController = require("../controllers/historyController");




module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/history`;

    
    
    app.post(`${baseUrl}/addHistory`, auth.isAuthorized, historyController.addHistoryFunction);
     /** 
    * @apiSuccessExample {object} Success-Response:
    {
    "error": false,
    "message": "History Added sucessfully",
    "status": 200,
    "data": {
        "historyId": "0JZ2OHCLD",
        "listId": "9VDNZig0Z",
        "itemId": "rPTot_Fqs",
        "itemValues": [],
        "createdOn": "2020-06-17T11:23:12.000Z",
        "_id": "5ee9fd206525fa236c21b025",
        "__v": 0
    }
}
    
*/


    app.post(`${baseUrl}/deleteHistory`, auth.isAuthorized, historyController.deleteHistoryFunction);

    /**
     * @apiGroup history
     * @apiVersion  1.0.0
     * @api {post} /api/v1/history/deleteHistory api to Delete history(Latest Object will be deleted).
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} listId Id of the List. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "History Deleted",
            "status": 200,
            "data": {
        "historyId": "0JZ2OHCLD",
        "listId": "9VDNZig0Z",
        "itemId": "rPTot_Fqs",
        "itemValues": [],
        "createdOn": "2020-06-17T11:23:12.000Z",
        "_id": "5ee9fd206525fa236c21b025",
        "__v": 0
                }
            ]
        }
    */

    app.post(`${baseUrl}/getHistory`, auth.isAuthorized, historyController.getHistoryFunction);



}