const mongoose = require('mongoose');
const check = require('../libs/checkLib');
const logger = require('../libs/loggerLib');
const response = require('../libs/responseLib');
const UserModel = mongoose.model('User')

 

let sendFriendRequest = (req, res) => {
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderId && req.body.senderName && req.body.recieverId && req.body.recieverName) {
                    resolve(req)
            } else {
                logger.error('Fill ale the details', 'friendController: sendFriendRequest', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let updateSender = () => {
        let subOptions = {
            friendId: req.body.recieverId,
            friendName: req.body.recieverName,
        }

        let options = {
            $push: { 
                friendRequestSent: { $each: [ subOptions ] } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ userId: req.body.senderId }, options).exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'Friend Controller:updateSender', 10)
                    let apiResponse = response.generate(true, 'unable to update sender', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Sender not Found', 'Friend Controller: updateSender')
                    let apiResponse = response.generate(true, 'Sender not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Sender with sent requests', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 

    let updateReciever = () => {
        let subOptions = {
            friendId: req.body.senderId,
            friendName: req.body.senderName,
        }

        let options = {
            $push: { 
                friendRequestRecieved: { $each: [ subOptions ]                     
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ userId: req.body.recieverId }, options).exec((err, result) => {
                if (err) {
                    //console.log("Error in verifying" + err)
                    logger.error(err.message, 'Friend Controller:updateReciever', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Reciever', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Reciever not Found', 'Friend Controller: updateReciever')
                    let apiResponse = response.generate(true, 'Reciever not Found', 404, null)
                    reject(apiResponse)
                } else {
                    
                    resolve(result)
                }
            });
        })
    } 

    validateUserInput(req, res)
        .then(updateSender)
        .then(updateReciever)
        .then((resolve) => {            
            let apiResponse = response.generate(false, 'Friend Request Sent sucessfully', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.send(err)
        })
}



let getAllRequestSent = (req, res) => {
    UserModel.find({userId:req.header.userId})
        .select('friendRequestSent')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Friend Controller: getAllRequestSent', 10)
                let apiResponse = response.generate(true, 'Unable To Find Sent Requests', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result.friendRequestSent)) {
                logger.info('Friend request sent not found', 'Friend Controller: getAllRequestSent')
                let apiResponse = response.generate(true, 'Friend request sent not found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Friend request sens found', 200, result)
                res.send(apiResponse)
            }
        })
}


let getAllRequestRecieved = (req, res) => {
    UserModel.find({userId:req.header.userId})
        .select('friendRequestRecieved')
        .lean()
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Friend Controller: getAllRequestRecieved', 10)
                let apiResponse = response.generate(true, 'Recieved request fail to find', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result.friendRequestRecieved)) {
                logger.info('Friend request not found', 'Friend Controller: getAllRequestRecieved')
                let apiResponse = response.generate(true, 'Friend request not found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Friend request recieve all found', 200, result)
                res.send(apiResponse)
            }
        })
}





let acceptFriendRequest = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderId && req.body.senderName && req.body.recieverId && req.body.recieverName) {
                    resolve(req)
            } else {
                logger.error('fill all the details', 'friendController: acceptFriendRequest', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let updateSenderFriendList = () => {
        
        let subOptions = {
            friendId: req.body.recieverId,
            friendName: req.body.recieverName,
        }

        let options = {
            $push: { 
                friends: { $each: [ subOptions ]                     
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.senderId }, options).exec((err, result) => {
                if (err) {
                    //console.log("Error in verifying" + err)
                    logger.error(err.message, 'Friend Controller:updateSenderFriendList', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Sender Friend List', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Request sender not found', 'Friend Controller: updateSenderFriendList')
                    let apiResponse = response.generate(true, 'Request sender not found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated sucessfully Sender Friend List', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 

    let updateRecieverFriendList = () => {
        
        let subOptions = {
            friendId: req.body.senderId,
            friendName: req.body.senderName,
        }

        let options = {
            $push: { 
                friends: { $each: [ subOptions ]                     
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.recieverId }, options).exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'Friend Controller:updateRecieverFriendList', 10)
                    let apiResponse = response.generate(true, 'Unable To Update Reciver Friend List', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Reciver not Found', 'Friend Controller: updateRecieverFriendList')
                    let apiResponse = response.generate(true, 'Reciver not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Reciver Friend List sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 

    let updateSenderSentRequest = () => {
        
        let options = {
            $pull: { 
                friendRequestSent: {
                    friendId:req.body.recieverId                      
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.senderId }, options).exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'Friend Controller:updateSenderSentRequest', 10)
                    let apiResponse = response.generate(true, 'Unable To Update Sender Sent Request', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Sender not Found', 'Friend Controller: updateSenderSentRequest')
                    let apiResponse = response.generate(true, 'Sender not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Sender Sent Request sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    }
    let updateRecieverRequestRecieved = () => {
        
        let options = {
            $pull: { 
                friendRequestRecieved: {
                    friendId:req.body.senderId                      
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.recieverId }, options).exec((err, result) => {
                if (err) {
                    
                    logger.error(err.message, 'Friend Controller:updateRecieverRequestRecieved', 10)
                    let apiResponse = response.generate(true, 'Unable To Update Reciever Requests Recieved', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Reciver not Found', 'Friend Controller: updateRecieverRequestRecieved')
                    let apiResponse = response.generate(true, 'Reciver not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Recievers Requests Recieved sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 
    validateUserInput(req, res)
        .then(updateSenderFriendList)
        .then(updateRecieverFriendList)
        .then(updateSenderSentRequest)
        .then(updateRecieverRequestRecieved)
        .then((resolve) => {            
            let apiResponse = response.generate(false, 'Accepted Friend Request', 200, null)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}



let rejectFriendRequest = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderId && req.body.senderName && req.body.recieverId && req.body.recieverName) {
                    resolve(req)
            } else {
                logger.error('Fill all the details', 'friendController: rejectFriendRequest', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate user input


    let updateSenderSentRequest = () => {
        
        let options = {
            $pull: { 
                friendRequestSent: {
                    friendId:req.body.recieverId                      
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.senderId }, options).exec((err, result) => {
                if (err) {
                    //console.log("Error in verifying" + err)
                    logger.error(err.message, 'Friend Controller:updateSenderSentRequest', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Sender Sent Request', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Sender not Found', 'Friend Controller: updateSenderSentRequest')
                    let apiResponse = response.generate(true, 'Sender not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Sender Sent Request sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 

    let updateRecieverRequestRecieved = () => {
        
        let options = {
            $pull: { 
                friendRequestRecieved: {
                    friendId:req.body.senderId                      
                } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.recieverId }, options).exec((err, result) => {
                if (err) {
                    
                    logger.error(err.message, 'Friend Controller:updateRecieverRequestRecieved', 10)
                    let apiResponse = response.generate(true, 'Unable To Update Reciever Requests Recieved', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Reciver not Found', 'Friend Controller: updateRecieverRequestRecieved')
                    let apiResponse = response.generate(true, 'Reciver not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Recievers Requests Recieved sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 

    validateUserInput(req, res)
        .then(updateSenderSentRequest)
        .then(updateRecieverRequestRecieved)
        .then((resolve) => {            
            let apiResponse = response.generate(false, 'Friend request reject', 200, null)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}




let cancelFriendRequest = (req, res) => {
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderId && req.body.senderName && req.body.recieverId && req.body.recieverName) {
                    resolve(req)
            } else {
                logger.error('Fill all the details', 'friendController: sendFriendRequest', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let updateSender = () => {


        let subOptions = {
            friendId: req.body.recieverId,
            friendName: req.body.recieverName,
        }

        let options = {
            $pull: { 
                friendRequestSent: { subOptions } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.senderId }, options).exec((err, result) => {
                if (err) {
                    //console.log("Error in verifying" + err)
                    logger.error(err.message, 'Friend Controller:updateSender', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Sender', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Sender not Found', 'Friend Controller: updateSender')
                    let apiResponse = response.generate(true, 'Sender not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Sender with sent requests sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 

    let updateReciever = () => {
        let subOptions = {
            friendId: req.body.senderId,
            friendName: req.body.senderName,
        }

        let options = {
            $pull: { 
                friendRequestRecieved: { subOptions } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.recieverId }, options).exec((err, result) => {
                if (err) {
                    logger.error(err.message, 'Friend Controller:updateReciever', 10)
                    let apiResponse = response.generate(true, 'Unable To Update Reciever', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Reciever not Found', 'Friend Controller: updateReciever')
                    let apiResponse = response.generate(true, 'Reciever not Found', 404, null)
                    reject(apiResponse)
                } else {
                    resolve(result)
                }
            });
        })
    } 

    validateUserInput(req, res)
        .then(updateSender)
        .then(updateReciever)
        .then((resolve) => {            
            let apiResponse = response.generate(false, 'Friend request cancelled', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}



let unfriendFunction = (req, res) => {

    let validateUserInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.senderId && req.body.senderName && req.body.recieverId && req.body.recieverName) {
                    resolve(req)
            } else {
                logger.error('Fill all the details', 'friendController: acceptFriendRequest', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let updateSenderFriendList = () => {
        
        let subOptions = {
            friendId: req.body.recieverId,
            friendName: req.body.recieverName,
        }

        let options = {
            $pull: { 
                friends: {  subOptions } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.senderId }, options).exec((err, result) => {
                if (err) {
                    //console.log("Error in verifying" + err)
                    logger.error(err.message, 'Friend Controller:updateSenderFriendList', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Sender Friend List', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Sender not Found', 'Friend Controller: updateSenderFriendList')
                    let apiResponse = response.generate(true, 'Sender not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Sender Friend List sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 
    let updateRecieverFriendList = () => {
        
        let subOptions = {
            friendId: req.body.senderId,
            friendName: req.body.senderName,
        }

        let options = {
            $pull: { 
                friends: { subOptions } 
            } 
        }

        return new Promise((resolve, reject) => {
            UserModel.updateOne({ 'userId': req.body.recieverId }, options).exec((err, result) => {
                if (err) {
                    //console.log("Error in verifying" + err)
                    logger.error(err.message, 'Friend Controller:updateRecieverFriendList', 10)
                    let apiResponse = response.generate(true, 'Unable To Update Reciver Friend List', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('Reciver not Found', 'Friend Controller: updateRecieverFriendList')
                    let apiResponse = response.generate(true, 'Reciver not Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Updated Reciver Friend List sucessfully', 200, null)
                    resolve(apiResponse)
                }
            });
        })
    } 


    validateUserInput(req, res)
        .then(updateSenderFriendList)
        .then(updateRecieverFriendList)
        .then((resolve) => {            
            let apiResponse = response.generate(false, 'Unfriend User', 200, null)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })
}


module.exports = {
    sendFriendRequest:sendFriendRequest,
    getAllRequestSent:getAllRequestSent,
    getAllRequestRecieved:getAllRequestRecieved,
    acceptFriendRequest:acceptFriendRequest,
    rejectFriendRequest:rejectFriendRequest,
    cancelFriendRequest:cancelFriendRequest,
    unfriendFunction:unfriendFunction

}