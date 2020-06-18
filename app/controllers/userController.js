const mongoose = require('mongoose');
const shortid = require('shortid');
const AuthModel = mongoose.model('Auth');
const applicationUrl = '';
const validateInput = require('./../libs/paramsValidationLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib');
const logger = require('./../libs/loggerLib');
const appConfig = require('./../../config/appConfig'); 
const check = require('./../libs/checkLib');
const token = require('./../libs/tokenLib');
const UserModel = mongoose.model('User');
const emailLib = require('./../libs/emailLib');
const time = require('./../libs/timeLib');





let signUpFunction = (req, res) => {
    console.log(req.body)
    console.log('signup called')
    let validateUserInput = () => {
        return new Promise((resolve, reject) => {

            if (req.body.email) {
                if (!validateInput.Email(req.body.email)) {
                    let apiResponse = response.generate(true, 'EmailId is not matched', 400, null)
                    reject(apiResponse)
                } else if (check.isEmpty(req.body.password)) {
                    let apiResponse = response.generate(true, 'Enter a password', 400, null)
                    reject(apiResponse)
                } else {
                    resolve(req)
                }
            } else {
                logger.error('Fill all the details', 'userController: validateUserInput', 5)
                let apiResponse = response.generate(true, 'one or more parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let createUser = () => {
        return new Promise((resolve, reject) => {
            UserModel.findOne({ email: req.body.email })
                .exec((err, retreivedUserDetails) => {
                    if (err) {
                        logger.error(err.message, 'userController: createUser', 10)
                        let apiResponse = response.generate(true, 'Unable to create a user', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retreivedUserDetails)) {
                        console.log(req.body)
                        let newUser = new UserModel({
                            userId: shortid.generate(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName || '',
                            countryName: req.body.country,
                            mobileNumber: req.body.mobile,
                            email: req.body.email.toLowerCase(),
                            password: passwordLib.hashPassword(req.body.password),
                            createdOn: time.now()
                        })

                        newUser.save((err, newUser) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'userController: createUser', 10)
                                let apiResponse = response.generate(true, 'Unable to create a user', 500, null)
                                reject(apiResponse)
                            } else {
                                let newUserObj = newUser.toObject();
                                setTimeout(() => {
                                    emailLib.sendEmail(sendEmailOptions);
                                }, 2000);
                                resolve(newUserObj)
                            }
                        })
                    } else {
                        logger.error('user already exitsts with EmailId', 'userController: createUser', 4)
                        let apiResponse = response.generate(true, 'user already exitsts with EmailId', 403, null)
                        reject(apiResponse)
                    }
                })
        })
    }


    validateUserInput(req, res)
        .then(createUser)
        .then((resolve) => {
            delete resolve.password
            let apiResponse = response.generate(false, 'User created you can login now', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })
}

let loginFunction = (req, res) => {
        let findUser = () => {
            return new Promise((resolve, reject) => {
                if (req.body.email) {
                    UserModel.findOne({$and: [{email: req.body.email}]}, (err, userDetails) => {
                            if (err) {
                                let apiResponse = response.generate(true, 'Unable to find user details', 500, null)
                                 reject(apiResponse)
                            } else if(check.isEmpty(userDetails)) {
                                let apiResponse = response.generate(true, 'No user with this emailId ', 404, null)
                                reject(apiResponse)
                            } else {
                                resolve(userDetails)

                               
                            }
                    })
                } else {
                    let apiResponse = response.generate(true, 'email parameter is missing', 400, null)
                    reject(apiResponse)
                }
            })
        }


        let validatePassword = (userDetails) => {
            return new Promise((resolve, reject) => {
                passwordLib.comparePassword(req.body.password,userDetails.password)
                    .then((isMatch)=>{
                        if(isMatch){
                            console.log('password matched !!')
                            let userDetailsObj = userDetails.toObject()
                            delete userDetailsObj.password
                            delete userDetailsObj.__v
                            delete userDetailsObj.createdOn
                            delete userDetailsObj.modifiedOn
                            delete userDetailsObj._id
                            resolve(userDetailsObj)
                        }else{
                            let apiResponse = response.generate(true, 'Invalid Password !', 400, null)
                            reject(apiResponse)
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                        let apiResponse = response.generate(true, 'Login Failed !', 500, null)
                        reject(apiResponse)
                    })
                   
                })
        }


        let generateToken = (userDetails) => {
                console.log('generating Token')
                return new Promise ((resolve, reject) => {
                    token.generateToken(userDetails, (err, tokenDetails) => {
                        if (err) {
                            console.log(err)
                            let apiResponse = response.generate(true, 'Unable to generate token', 500, null)
                            reject(apiResponse)
                        } else {
                            tokenDetails.userId = userDetails.userId
                            tokenDetails.userDetails = userDetails
                            resolve(tokenDetails)
                        }
                    })
                })
        }

        let saveToken = (tokenDetails) => {
            console.log("save token");
            return new Promise((resolve, reject) => {
                AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                    if (err) {
                        console.log(err.message, 'userController: saveToken', 10)
                        let apiResponse = response.generate(true, 'Unable To Generate Token', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(retrievedTokenDetails)) {
                        let newAuthToken = new AuthModel({
                            userId: tokenDetails.userId,
                            authToken: tokenDetails.token,
                            tokenSecret: tokenDetails.tokenSecret,
                            tokenGenerationTime: time.now()
                        })
                        newAuthToken.save((err, newTokenDetails) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'userController: saveToken', 10)
                                let apiResponse = response.generate(true, 'Unable To Generate Token', 500, null)
                                reject(apiResponse)
                            } else {
                                let responseBody = {
                                    authToken: newTokenDetails.authToken,
                                    userDetails: tokenDetails.userDetails
                                }
                                resolve(responseBody)
                            }
                        })
                    } else {
                        retrievedTokenDetails.authToken = tokenDetails.token
                        retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                        retrievedTokenDetails.tokenGenerationTime = time.now()
                        retrievedTokenDetails.save((err, newTokenDetails) => {
                            if (err) {
                                console.log(err)
                                logger.error(err.message, 'userController: saveToken', 10)
                                let apiResponse = response.generate(true, 'Unable To Generate Token', 500, null)
                                reject(apiResponse)
                            } else {
                                let responseBody = {
                                    authToken: newTokenDetails.authToken,
                                    userDetails: tokenDetails.userDetails
                                }
                                resolve(responseBody)
                            }
                        })
                    }
                })
            })
        }


        findUser(req, res)
        .then(validatePassword)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Login Successfull', 200, resolve)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.send(err)
            
        })

    }



    let logout = (req, res) => {
        AuthModel.findOneAndDelete({ userId: req.params.userId }, (err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'user Controller: logout', 10)
                let apiResponse = response.generate(true, `error is occurred: ${err.message}`, 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Already Logged Out or Invalid Credetianls', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Logged Out Successfully !!', 200, null)
                res.send(apiResponse)
            }
        })
    }



let resetEmailFunction = (req, res) => {
    let findUser = () => {
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    if (err) {
                        logger.error('Failed To Matched data', 'userController: findUser()', 10)
                        let apiResponse = response.generate(true, 'Failed To Matched Data', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.error('No User Found', 'userController: findUserFunction', 7)
                        let apiResponse = response.generate(true, 'User Details Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        logger.info('User Found', 'userController: findUserFunction', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, 'EmailId is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
 
    let resetPassword = (userDetails) =>{
        return new Promise((resolve, reject) => {
            let options = {
               validationToken: shortid.generate()
            }
            UserModel.updateOne({ email: req.body.email }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller:resetPasswordFunction', 10)
                    let apiResponse = response.generate(true, 'Unable to validate Password', 500, null)
                    reject(apiResponse)
                }  else {                    
                    resolve(result)                   
                    setTimeout(() => {
                        emailLib.sendEmail(sendEmailOptions);
                    }, 2000);

                }
            });// end user model update

        });//end promise

    }//end reset password

    //making promise call
    findUser(req, res)
        .then(resetPassword)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Reset Password instructions sent successfully', 200, 'None')
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.send(err)
        })


} // end

let updatePasswordFunction = (req, res) => {

    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.validationToken) {
                console.log("req body validationToken is there");
                console.log(req.body);
                UserModel.findOne({ validationToken: req.body.validationToken }, (err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Fetch User Data', 'userController: findUser()', 10)
                        let apiResponse = response.generate(true, 'Failed To Fetch User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'User Details Not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, 'ValidationToken is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let passwordUpdate = (userDetails) => {
        return new Promise((resolve, reject) => {

            let options = {
                password: passwordLib.hashPassword(req.body.password),
                validationToken:''
            }

            UserModel.update({ userId: userDetails.userId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller:updatePasswordFunction', 10)
                    let apiResponse = response.generate(true, 'Unable To reset user Password', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No User Found with given Details', 'User Controller: updatePasswordFunction')
                    let apiResponse = response.generate(true, 'User Not Found', 404, null)
                    reject(apiResponse)
                } else {


                    let apiResponse = response.generate(false, 'Update Password successfully', 200, result)
                    resolve(apiResponse)
                    setTimeout(() => {
                        emailLib.sendEmail(sendEmailOptions);
                    }, 2000);
                }
            });// end user model update
        });
    }//end passwordUpdate

    findUser(req, res)
        .then(passwordUpdate)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Auth Token is successfully Verified', 200, null)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            //res.status(err.status)
            res.send(err)
        })
}// end updatePasswordFunction

let changePasswordFunction = (req, res) => {
    
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.userId != undefined && req.body.oldPassword != undefined) {
                UserModel.findOne({ userId: req.body.userId }, (err, userDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Fetch User Data', 'userController: findUser()', 10)
                        let apiResponse = response.generate(true, 'Failed To Fetch User Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(userDetails)) {
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'User Details not Found', 404, null)
                        reject(apiResponse)
                    } else {
                        logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"userId" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    //validate old password with database
    let validatePassword = (retrievedUserDetails) => {
        console.log("validatePassword");
        console.log(retrievedUserDetails);
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.oldPassword, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Validate of Password is Failed', 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                } else {
                    logger.info('Update Failed Due To Invalid Password', 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Wrong Password.', 400, null)
                    reject(apiResponse)
                }
            })
        })
    }

    //password update
    let passwordUpdate = (userDetails) => {
        return new Promise((resolve, reject) => {

            let options = {
                password: passwordLib.hashpassword(req.body.newPassword),
            }
            UserModel.update({ userId: userDetails.userId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller:updatePasswordFunction', 10)
                    let apiResponse = response.generate(true, 'Update password is failed', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('User is not found with given details', 'User Controller: updatePasswordFunction')
                    let apiResponse = response.generate(true, 'User Not Found', 404, null)
                    reject(apiResponse)
                } else {
                    resolve(result)
                    console.log(sendEmailOptions)

                    setTimeout(() => {
                        emailLib.sendEmail(sendEmailOptions);
                    }, 2000);
                }
            });// end user model update
        });
    }//end passwordUpdate

    //making promise call
    findUser(req, res)
        .then(validatePassword)
        .then(passwordUpdate)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Password is update successfully', 200, null)
            res.status(200)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);
            res.status(err.status)
            res.send(err)
        })


}// end changePasswordFunction

module.exports = {
    signUpFunction: signUpFunction,
    loginFunction: loginFunction,
    logout: logout,
    resetEmailFunction: resetEmailFunction,
    updatePasswordFunction: updatePasswordFunction,
    changePasswordFunction: changePasswordFunction,
}
