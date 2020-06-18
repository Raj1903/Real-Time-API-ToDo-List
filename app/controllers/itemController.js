const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')
const ItemModel = mongoose.model('Item')
const ListModel = mongoose.model('List')



let addItemFunction = (req, res) => {

    let validatelistInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.listId && req.body.itemName && req.body.itemCreatorId && req.body.itemCreatorName) {
                resolve(req)
            } else {
                logger.error('Field Missing During Item Creation', 'ItemController: addItem()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    } //**************************   */

    let findListDetails = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({
                    listId: req.body.listId
                })
                .select()
                .lean()
                .exec((err, listDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findListDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find List Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(listDetails)) {
                        logger.info('Items Not Found', 'Item  Controller:findListDetails')
                        let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'List Details Found', 200, listDetails)
                        resolve(listDetails)
                    }
                })
        })
    } //*************8 */

    let addItem = () => {
        return new Promise((resolve, reject) => {
            let newItem = new ItemModel({

                listId: req.body.listId,
                itemName: req.body.itemName,
                itemCreatorId: req.body.itemCreatorId,
                itemCreatorName: req.body.itemCreatorName,
                itemCreatedOn: time.now(),
                itemModifiedOn: time.now(),
            })
            if (req.body.itemId != undefined) {
                newItem.itemId = req.body.itemId
            } else {
                newItem.itemId = shortid.generate()
            }

            console.log(newItem)
            newItem.save((err, newItem) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'ItemController: addItem', 10)
                    let apiResponse = response.generate(true, 'Unable to add new Item', 500, null)
                    reject(apiResponse)
                } else {
                    let newItemObj = newItem.toObject();
                    resolve(newItemObj)
                }
            })

        })
    } //****************** */


    validatelistInput(req, res)
        .then(findListDetails)
        .then(addItem)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Item Created You can see', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} //****************88 */

let getAllItemsFunction = (req, res) => {

    let findListDetails = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({
                    listId: req.params.listId
                })
                
                .select()
                .lean()
                .exec((err, listDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findListDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find list Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(listDetails)) {
                        logger.info('List Not Found', 'Item  Controller:findListDetails')
                        let apiResponse = response.generate(true, 'List Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'list Details Found', 200, listDetails)
                        resolve(listDetails)
                    }
                })
        })
    } //*************** */

    let findItems = (listDetails) => {
        return new Promise((resolve, reject) => {

            ItemModel.find({
                    listId: req.params.listId
                })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findItems', 10)
                        let apiResponse = response.generate(true, 'Unable To Find Items', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('Items Not Found', 'Item  Controller:findItems')
                        let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Items Found and Listed', 200, ItemDetails)
                        resolve(apiResponse)
                    }
                })
        })
    } //************* */


    findListDetails(req, res)
        .then(findItems)
        .then((resolve) => {
           
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} /*************** */ 


let getItemDetailsFunction = (req, res) => {
    ItemModel.findOne({
            itemId: req.params.itemId
        })
        .select()
        .lean()
        .exec((err, ItemDetails) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Item Controller: getItemDetails', 10)
                let apiResponse = response.generate(true, 'Unable To Find Items', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(ItemDetails)) {
                logger.info('Items Not Found', 'Item  Controller:getItemDetailsFunction')
                let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Item Found', 200, ItemDetails)
                res.send(apiResponse)
            }
        })
} /************** */ 



let deleteItemFunction = (req, res) => {

    let findItemDetails = () => {
        return new Promise((resolve, reject) => {
            ItemModel.findOne({
                    itemId: req.params.itemId
                })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findItemDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find Item Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('Items Not Found', 'Item  Controller:findItemDetails')
                        let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Item Details Found', 200, ItemDetails)
                        resolve(ItemDetails)
                    }
                })
        })
    } /*************** */ 


    let deleteItem = (ItemDetails) => {
        return new Promise((resolve, reject) => {

            ItemModel.findOneAndRemove({
                itemId: req.params.itemId
            }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Item Controller: deleteItem', 10)
                    let apiResponse = response.generate(true, 'Failed To delete Item', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Items Not Found', 'Item Controller: deleteItem')
                    let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Deleted the Item successfully', 200, null)
                    resolve(apiResponse)
                }
            }); 

        })
    } /***************** */


    findItemDetails(req, res)
        .then(deleteItem)
        .then((resolve) => {
            
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} 

let updateItemFunction = (req, res) => {

    let findItemDetails = () => {
        return new Promise((resolve, reject) => {
            ItemModel.findOne({
                    itemId: req.params.itemId
                })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findItemDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find Item Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('Items Not Found', 'Item  Controller:findItemDetails')
                        let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Item Details Found', 200, ItemDetails)
                        resolve(ItemDetails)
                    }
                })
        })
    } //***************** */

    let updateItem = (ItemDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.itemModifiedOn = time.now()

            ItemModel.update({
                itemId: req.params.itemId
            }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Item Controller:updateItem', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Item details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Items Not Found', 'Item Controller:updateItem')
                    let apiResponse = response.generate(true, 'Items Not Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Item details Updated', 200, null)
                    resolve(apiResponse)
                }
            }); 

        })
    }   //************************* */


    findItemDetails(req, res)
        .then(updateItem)
        .then((resolve) => {
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

} //******************** */






module.exports = {
    addItemFunction: addItemFunction,
    updateItemFunction: updateItemFunction,
    deleteItemFunction: deleteItemFunction,
    getAllItemsFunction: getAllItemsFunction,
    getItemDetailsFunction: getItemDetailsFunction,
} // end exports