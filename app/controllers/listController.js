const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')
const ListModel = mongoose.model('List')
const UserModel = mongoose.model('User')


let getAllListsFunction = (req, res) => {

    let findUserDetails = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ userId: req.params.userId })
                .select()
                .lean()
                .exec((err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'List Controller: findUserDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.info('User Not Found', 'List  Controller:findLists')
                        let apiResponse = response.generate(true, 'User Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'User Details Found', 200, userDetails)
                        resolve(userDetails)
                    }
                })
        })
    }

    let findLists = () => {
        return new Promise((resolve, reject) => {

            ListModel.find({ listCreatorId: req.params.userId})
                .select()
                .lean()
                .exec((err, ListDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'List Controller: findLists', 10)
                        let apiResponse = response.generate(true, 'Unable To Find Lists', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ListDetails)) {
                        logger.info('List Not Found', 'List  Controller:findLists')
                        let apiResponse = response.generate(true, 'No list found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Lists Found and Listed', 200, ListDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }// end findLists


    findUserDetails(req, res)
        .then(findLists)
        .then((resolve) => {
            
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}


let deleteListFunction = (req, res) => {

    let findListDetails = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({ listId: req.params.listId })
                .select()
                .lean()
                .exec((err, ListDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'List Controller: findListDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find List Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ListDetails)) {
                        logger.info('List not found', 'List  Controller:findListDetails')
                        let apiResponse = response.generate(true, 'List not found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'List Details Found', 200, ListDetails)
                        resolve(ListDetails)
                    }
                })
        })
    }

    let deleteList = (ListDetails) => {
        return new Promise((resolve, reject) => {

            ListModel.findOneAndRemove({ listId: req.params.listId }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'List Controller: deleteList', 10)
                    let apiResponse = response.generate(true, 'Unable To delete List', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('List Not Found', 'List Controller: deleteList')
                    let apiResponse = response.generate(true, 'Lst Not found', 404, null)
                    reject(apiResponse)
                } else {
                    
                    let apiResponse = response.generate(false, 'List is deleted successfully', 200, null)
                    resolve(apiResponse)
                }
            });

        })
    }


    findListDetails(req, res)
        .then(deleteList)
        .then((resolve) => {
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}

let updateListFunction = (req, res) => {

    let findListDetails = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({ listId: req.params.listId })
                .select()
                .lean()
                .exec((err, ListDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'List Controller: findListDetails', 10)
                        let apiResponse = response.generate(true, 'Unable To Find List Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ListDetails)) {
                        logger.info('List Not Found', 'List  Controller:findListDetails')
                        let apiResponse = response.generate(true, 'List Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'List Details Found', 200, ListDetails)
                        resolve(ListDetails)
                    }
                })
        })
    }

    let updateList = (ListDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.listModifiedOn = time.now()
            
            ListModel.update({ listId: req.params.listId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'List Controller:updateList', 10)
                    let apiResponse = response.generate(true, 'Unable To Update List details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('List Not Found', 'List Controller:updateList')
                    let apiResponse = response.generate(true, 'List Not Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'List details are sucessfully Updated', 200, null)
                    resolve(apiResponse)
                }
            });

        })
    }


    findListDetails(req, res)
        .then(updateList)
        .then((resolve) => {
            
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}
let addListFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.listName && req.body.listCreatorId && req.body.listCreatorName ) {
                resolve(req)
            } else {
                logger.error('Some field are mssing', 'ListController: addList()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input 
 
    let addList = () => {
        return new Promise((resolve, reject) => {
            let newList = new ListModel({
                listId: shortid.generate(),
                listName: req.body.listName,
                listCreatorId: req.body.listCreatorId,
                listCreatorName: req.body.listCreatorName,
                listCreatedOn: time.now(),
                listModifiedOn: time.now(),
            })

            console.log(newList)
            newList.save((err, newList) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'ListController: addList', 10)
                    let apiResponse = response.generate(true, 'Unable to add new List', 500, null)
                    reject(apiResponse)
                } else {
                    let newListObj = newList.toObject();
                    delete newListObj._id
                    delete newListObj.__v
                    resolve(newListObj)
                }
            })

        })
    }


    validateUserInput(req, res)
        .then(addList)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'List Created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}



module.exports = {
    addListFunction: addListFunction,
    updateListFunction: updateListFunction,
    deleteListFunction: deleteListFunction,
    getAllListsFunction: getAllListsFunction,
}