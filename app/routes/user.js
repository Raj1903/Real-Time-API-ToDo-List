const express = require('express');
//const router = express.Router();
const appConfig = require('./../../config/appConfig');
const userController = require('./../controllers/userController');
const auth = require = require('./../middlewares/auth');


module.exports.setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/users`;

    // params: firstName, lastName, email, password , mobileNumber
    app.post(`${baseUrl}/signup`, userController.signUpFunction)
     /**
     * @api {post} /api/v1/users/signup api for Registering User.
     * @apiVersion  1.0.0
     * @apiGroup users
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} countryName country Name of the user. (body params) (required)
     * @apiParam {string} mobileNumber Mobile Number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "User created",
    "status": 200,
    "data": {
        "userId": "xlGuvvmqm",
        "firstName": "Akash",
        "lastName": "kumar",
        "countryName": "",
        "mobileNumber": "",
        "email": "akashkumar1@gmail.com",
        "validationToken": "",
        "createdOn": "2020-06-16T08:18:47.000Z",
        "_id": "5ee88067a969322be4b0b9fd",
        "friends": [],
        "friendRequestRecieved": [],
        "friendRequestSent": [],
        "__v": 0
    }
}
    */

    // params: email, password
    app.post(`${baseUrl}/login`, userController.loginFunction)
        /**
     * @api {post} /api/v1/users/login api for Login.
     * @apiVersion  1.0.0
     * @apiGroup users
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
    "error": false,
    "message": "Login Successfull",
    "status": 200,
    "data": {
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhrdW5rd0JoMiIsImlhdCI6MTU5MjMwNTUyNjQyMiwiZXhwIjoxNTkyMzkxOTI2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6InhsR3V2dm1xbSIsImZpcnN0TmFtZSI6IkFrYXNoIiwibGFzdE5hbWUiOiJrdW1hciIsImNvdW50cnlOYW1lIjoiIiwibW9iaWxlTnVtYmVyIjpudWxsLCJlbWFpbCI6ImFrYXNoa3VtYXIxQGdtYWlsLmNvbSIsInZhbGlkYXRpb25Ub2tlbiI6IiIsImZyaWVuZHMiOltdLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRSZXF1ZXN0U2VudCI6W119fQ.ClJp4ikhGoTXndNo_gUoMVbOrABMpGr5TE93wkLMi7I",
        "userDetails": {
            "userId": "xlGuvvmqm",
            "firstName": "Akash",
            "lastName": "kumar",
            "countryName": "",
            "mobileNumber": null,
            "email": "akashkumar1@gmail.com",
            "validationToken": "",
            "friends": [],
            "friendRequestRecieved": [],
            "friendRequestSent": []
        }
    }
}
    */

    // params: authToken, userId
    app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout)
      /**
     * @api {post} /api/v1/users/:userId/logout api to logout from application.
      * @apiVersion  1.0.0
     * @apiGroup user.
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */


    // body params: email.
    // generate reset password link only
    app.post(`${baseUrl}/reset-link`, userController.resetEmailFunction)
       /**
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     * @apiVersion  1.0.0
     * @apiGroup users
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset instructions sent successfully",
            "status": 200,
            "data": None
        }    
    */
    
   
    // params: validationToken,password.
     app.post(`${baseUrl}/update-password`, userController.updatePasswordFunction)
        /**
     * @api {put} /api/v1/users/updatePassword api for Updating Password after Reset.
     * @apiVersion  1.0.0
     * @apiGroup users
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */
     // body params: userId, oldPassword,newPassword.
     app.post(`${baseUrl}/changePassword`, auth.isAuthorized,userController.changePasswordFunction)
     /**
     * @api {post} /api/v1/users/changePassword api for Changing Password.
     * @apiVersion  1.0.0
     * @apiGroup users
     * @apiParam {string} userId userId of the user. (body params) (required)
     * @apiParam {string} oldPassword old Password of the user. (body params) (required)
     * @apiParam {string} newPassword new Password of the user. (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
        }
    */

}
