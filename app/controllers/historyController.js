const mongoose = require('mongoose');
const time = require('../libs/timeLib');
const check = require('../libs/checkLib');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const shortid = require('shortid');

const HistoryModel = mongoose.model('History')
const ItemModel = mongoose.model('Item')




let addHistoryFunction = (req, res) => {
    console.log(req.body)

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.listId) {
                resolve(req)
            } else {
                logger.error('Some field are mising during creation', 'HistoryController: addHistoryFunctio()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let findItems = () => {
        return new Promise((resolve, reject) => {
            if(req.body.key){
                resolve(null)
            }
            else{
                ItemModel.findOne({ itemId: req.body.itemId })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: getItemDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Items', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('Item Not Found', 'Item  Controller:getItemDetailsFunction')
                        let apiResponse = response.generate(true, 'Item Not found', 404, null)
                        resolve(ItemDetails)
                    } else {
                        let apiResponse = response.generate(false, 'Item Found', 200, ItemDetails)
                        resolve(ItemDetails)
                    }
                })
            }
        })
    }
 
    let updateHistory = (ItemDetails) => {
        console.log('updating history')
        return new Promise((resolve, reject) => {
            let newHistory = new HistoryModel({
                historyId: shortid.generate(),
                listId: req.body.listId,
                mode: req.body.mode,
                createdOn: time.now(),
                itemId:req.body.itemId,
            })

           
            newHistory.save((err, newItem) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'HistoryController: addItem', 10)
                    let apiResponse = response.generate(true, 'Unable to add history', 500, null)
                    reject(apiResponse)
                } else {
                    let newItemObj = newItem.toObject();
                    resolve(newItemObj)
                }
            })

        })
    }


    validateUserInput(req, res)
        .then(findItems)
        .then(updateHistory)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'History Added sucessfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}

let deleteHistoryFunction = (req, res) => {

    let findHistory = () => {
        return new Promise((resolve, reject) => {
            HistoryModel.findOne({ listId: req.body.listId }).sort({ $natural: -1 })
                .select()
                .lean()
                .exec((err, HistoryDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'History Controller: v', 10)
                        let apiResponse = response.generate(true, 'Unable to find details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(HistoryDetails)) {
                        logger.info('History Not Found', 'History  Controller:findHistory')
                        let apiResponse = response.generate(true, 'History Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'History Not Found', 200, HistoryDetails)
                        resolve(HistoryDetails)
                    }
                })
        })
    }
    let updateHistory = (HistoryDetails) => {
        return new Promise((resolve, reject) => {

            HistoryModel.findOneAndRemove({ historyId: HistoryDetails.historyId }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Item Controller: deleteItem', 10)
                    let apiResponse = response.generate(true, 'Unable To delete Item', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Itme not Found', 'Item Controller: deleteItem')
                    let apiResponse = response.generate(true, 'item not found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'History Deleted sucessfully', 200, HistoryDetails)
                    resolve(apiResponse)
                }
            });

        })
    }

    findHistory(req, res)
        .then(updateHistory)
        .then((resolve) => {
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}


let getHistoryFunction = (req, res) => {

    let findHistory = () => {
        return new Promise((resolve, reject) => {
            HistoryModel.find().sort({ $natural: -1 })
                .select()
                .lean()
                .exec((err, HistoryDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'History Controller: v', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(HistoryDetails)) {
                        logger.info('History Not Foubd', 'History  Controller:findHistory')
                        let apiResponse = response.generate(true, 'History Not found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'History Found Succefully', 200, HistoryDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }

    findHistory(req, res)
        .then((resolve) => {
           
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}

module.exports = {
    addHistoryFunction: addHistoryFunction,
    deleteHistoryFunction: deleteHistoryFunction,
    getHistoryFunction: getHistoryFunction
}