const express = require('express');
const router = express.Router();
const listController = require("../controllers/listController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;

    // params: listName,listCreatorId,listCreatorName,listModifierId,listModifierName,listMode    
    app.post(`${baseUrl}/addList`, auth.isAuthorized, listController.addListFunction);
     /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/addList api to Add List.
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} listName Name of the List. (body params) (required)
     * @apiParam {string} listCreatorId User Id of the user creating todo. (body params) (required)
     * @apiParam {string} listCreatorName User Name of the user creating todo. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "List Created",
    "status": 200,
    "data": {
        "listId": "9VDNZig0Z",
        "listName": "List ",
        "listCreatorId": "xlGuvvmqm",
        "listCreatorName": "Akash kumar",
        "listCreatedOn": "2020-06-16T11:14:20.000Z",
        "listModifiedOn": "2020-06-16T11:14:20.000Z"
    }
}  */



    app.put(`${baseUrl}/:listId/updateList`, auth.isAuthorized, listController.updateListFunction)
        /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {put} /api/v1/lists/:listId/updateList api to Update List Details.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} listId Id of the List. (query params) (required)
     * @apiParam {string} listName Name of the List. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "List details Updated",
            "status": 200,
            "data": null
        }    
    */


    app.post(`${baseUrl}/:listId/delete`, auth.isAuthorized, listController.deleteListFunction)
     /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/:ListId/delete api to Delete List.
     * @apiParam {string} ListId ListId of the List to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the List successfully",
            "status": 200,
            "data": null
}
    */


    app.get(`${baseUrl}/view/all/lists/:userId`, auth.isAuthorized, listController.getAllListsFunction)
    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {get} /api/v1/lists/view/all/lists/:userId api for Getting all Lists of User.
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
      {
    "error": false,
    "message": "Lists Found and Listed",
    "status": 200,
    "data": [
        {
            "_id": "5ee8a98c0a603b15acd64831",
            "listId": "9VDNZig0Z",
            "listName": "List ",
            "listCreatorId": "xlGuvvmqm",
            "listCreatorName": "Akash kumar",
            "listCreatedOn": "2020-06-16T11:14:20.000Z",
            "listModifiedOn": "2020-06-16T11:14:20.000Z",
            "__v": 0
        },
        {
            "_id": "5ee8ab250a603b15acd64832",
            "listId": "xlV_xwzXC",
            "listName": "List 1",
            "listCreatorId": "xlGuvvmqm",
            "listCreatorName": "Akash kumar",
            "listCreatedOn": "2020-06-16T11:21:09.000Z",
            "listModifiedOn": "2020-06-16T11:21:09.000Z",
            "__v": 0
        },
        {
            "_id": "5ee8ab2f0a603b15acd64833",
            "listId": "EA9tkZSra",
            "listName": "List 3\n",
            "listCreatorId": "xlGuvvmqm",
            "listCreatorName": "Akash kumar",
            "listCreatedOn": "2020-06-16T11:21:19.000Z",
            "listModifiedOn": "2020-06-16T11:21:19.000Z",
            "__v": 0
        }
    ]
}
    */
  


   
}



