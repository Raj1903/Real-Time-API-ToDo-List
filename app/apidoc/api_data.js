define({ "api": [
  {
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"error\": false,\n    \"message\": \"History Added sucessfully\",\n    \"status\": 200,\n    \"data\": {\n        \"historyId\": \"0JZ2OHCLD\",\n        \"listId\": \"9VDNZig0Z\",\n        \"itemId\": \"rPTot_Fqs\",\n        \"itemValues\": [],\n        \"createdOn\": \"2020-06-17T11:23:12.000Z\",\n        \"_id\": \"5ee9fd206525fa236c21b025\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/history.js",
    "group": "C:\\Users\\pulki\\Downloads\\API RealTime-toDo-list\\app\\routes\\history.js",
    "groupTitle": "C:\\Users\\pulki\\Downloads\\API RealTime-toDo-list\\app\\routes\\history.js",
    "name": ""
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/accept/friend/request",
    "title": "api for Accepting Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Accepted Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsAcceptFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/cancel/friend/request",
    "title": "api to Cancel Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Canceled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsCancelFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/reject/friend/request",
    "title": "api for Rejecting Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Rejected Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsRejectFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/send/friend/request",
    "title": "api for Sending Friend Request.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Friend Request Sent\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsSendFriendRequest"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/unfriend/user",
    "title": "api to Unfriend user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderId",
            "description": "<p>Id of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "senderName",
            "description": "<p>Name of the Sender. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverId",
            "description": "<p>Id of the Reciever(Login User). (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "recieverName",
            "description": "<p>Name of the Reciever(Login User). (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Canceled Friend Request\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsUnfriendUser"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/view/friend/request/recieved/:userId",
    "title": "api for Getting all friends request Recieved.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>Id of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Recieved Requsts Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5bb7952dfb58ea1178205904\",\n            \"friendRequestRecieved\": [\n                {\n                    \"friendId\": \"GP2wuKw-W\",\n                    \"friendName\": \"palak sinha\",\n                    \"_id\": \"5bb8a427bf63d9156cae71e7\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsViewFriendRequestRecievedUserid"
  },
  {
    "group": "friends",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/friends/view/friend/request/sent/:userId",
    "title": "api for Getting all friends request sent.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>Id of the user. (header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"All Sent Requsts Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ee88067a969322be4b0b9fd\",\n            \"friendRequestSent\": [\n                {\n                    \"friendId\": \"xlGuvvmqm\",\n                    \"friendName\": \"Akash kumar\",\n                    \"_id\": \"5bb8a427bf63d9156cae71e6\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/friend.js",
    "groupTitle": "friends",
    "name": "GetApiV1FriendsViewFriendRequestSentUserid"
  },
  {
    "group": "history",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/history/deleteHistory",
    "title": "api to Delete history(Latest Object will be deleted).",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"History Deleted\",\n    \"status\": 200,\n    \"data\": {\n\"historyId\": \"0JZ2OHCLD\",\n\"listId\": \"9VDNZig0Z\",\n\"itemId\": \"rPTot_Fqs\",\n\"itemValues\": [],\n\"createdOn\": \"2020-06-17T11:23:12.000Z\",\n\"_id\": \"5ee9fd206525fa236c21b025\",\n\"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/history.js",
    "groupTitle": "history",
    "name": "PostApiV1HistoryDeletehistory"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/items/:itemId/details",
    "title": "api for getting item details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the item. (header params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Item Found\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ee9e61ea616db01d8d59545\",\n        \"listId\": \"9VDNZig0Z\",\n        \"itemId\": \"rPTot_Fqs\",\n        \"itemName\": \"List \",\n        \"itemCreatorId\": \"xlGuvvmqm\",\n        \"itemCreatorName\": \"Akash kumar\",\n        \"itemCreatedOn\": \"2020-06-17T09:45:02.000Z\",\n        \"itemModifiedOn\": \"2020-06-17T09:45:02.000Z\",\n        \"itemModifierId\": \"\",\n        \"itemModifierName\": \"\",\n        \"itemDone\": \"no\",\n        \"subItems\": [],\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsItemidDetails"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/items/view/all/items/:userId",
    "title": "api for Getting all items of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Items Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        \"__v\": 0,\n        \"_id\": \"5ee355c7650522007c38d75d\",\n        \"subItems\": [],\n        \"itemModifierName\": \"Palak Sinha\",\n        \"itemModifierId\": \"GP2wuKw-W\",\n        \"itemModifiedOn\": \"2020-06-12T12:45:35.000Z\",\n        \"itemCreatedOn\": \"2020-06-12T12:45:35.000Z\",\n        \"itemCreatorName\": \"Palak sinha\",\n        \"itemCreatorId\": \"GP2wuKw-W\",\n        \"itemName\": \"My List update 1\",\n        \"itemId\": \"r9Sla-Pqc\",\n        \"listId\": \"47SBxBeDz\"\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "items",
    "name": "GetApiV1ItemsViewAllItemsUserid"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/additem",
    "title": "api to Add item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemCreatorId",
            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemCreatorName",
            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"Item Created\",\n    \"status\": 200,\n    \"data\": {\n        \"listId\": \"9VDNZig0Z\",\n        \"itemId\": \"rPTot_Fqs\",\n        \"itemName\": \"List \",\n        \"itemCreatorId\": \"xlGuvvmqm\",\n        \"itemCreatorName\": \"Akash kumar\",\n        \"itemCreatedOn\": \"2020-06-17T09:45:02.000Z\",\n        \"itemModifiedOn\": \"2020-06-17T09:45:02.000Z\",\n        \"itemDone\": \"no\",\n        \"_id\": \"5ee9e61ea616db01d8d59545\",\n        \"subItems\": [],\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1ItemsAdditem"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/:itemId/delete",
    "title": "api to Delete item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>Id of the item to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Deleted the Item successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "items",
    "name": "PostApiV1ItemsItemidDelete"
  },
  {
    "group": "items",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/items/:itemId/updateitem",
    "title": "api to Update item Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>Name of the item. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemModifierId",
            "description": "<p>User Id of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemModifierName",
            "description": "<p>User Name of the user modifying todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemDone",
            "description": "<p>yes/no to make item done/undone. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/item.js",
    "groupTitle": "items",
    "name": "PutApiV1ItemsItemidUpdateitem"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/view/all/lists/:userId",
    "title": "api for Getting all Lists of User.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "      {\n    \"error\": false,\n    \"message\": \"Lists Found and Listed\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ee8a98c0a603b15acd64831\",\n            \"listId\": \"9VDNZig0Z\",\n            \"listName\": \"List \",\n            \"listCreatorId\": \"xlGuvvmqm\",\n            \"listCreatorName\": \"Akash kumar\",\n            \"listCreatedOn\": \"2020-06-16T11:14:20.000Z\",\n            \"listModifiedOn\": \"2020-06-16T11:14:20.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ee8ab250a603b15acd64832\",\n            \"listId\": \"xlV_xwzXC\",\n            \"listName\": \"List 1\",\n            \"listCreatorId\": \"xlGuvvmqm\",\n            \"listCreatorName\": \"Akash kumar\",\n            \"listCreatedOn\": \"2020-06-16T11:21:09.000Z\",\n            \"listModifiedOn\": \"2020-06-16T11:21:09.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ee8ab2f0a603b15acd64833\",\n            \"listId\": \"EA9tkZSra\",\n            \"listName\": \"List 3\\n\",\n            \"listCreatorId\": \"xlGuvvmqm\",\n            \"listCreatorName\": \"Akash kumar\",\n            \"listCreatedOn\": \"2020-06-16T11:21:19.000Z\",\n            \"listModifiedOn\": \"2020-06-16T11:21:19.000Z\",\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "lists",
    "name": "GetApiV1ListsViewAllListsUserid"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/addList",
    "title": "api to Add List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listCreatorId",
            "description": "<p>User Id of the user creating todo. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listCreatorName",
            "description": "<p>User Name of the user creating todo. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"List Created\",\n    \"status\": 200,\n    \"data\": {\n        \"listId\": \"9VDNZig0Z\",\n        \"listName\": \"List \",\n        \"listCreatorId\": \"xlGuvvmqm\",\n        \"listCreatorName\": \"Akash kumar\",\n        \"listCreatedOn\": \"2020-06-16T11:14:20.000Z\",\n        \"listModifiedOn\": \"2020-06-16T11:14:20.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsAddlist"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:ListId/delete",
    "title": "api to Delete List.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ListId",
            "description": "<p>ListId of the List to be deleted. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n            \"error\": false,\n            \"message\": \"Deleted the List successfully\",\n            \"status\": 200,\n            \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "lists",
    "name": "PostApiV1ListsListidDelete"
  },
  {
    "group": "lists",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/lists/:listId/updateList",
    "title": "api to Update List Details.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>Authentication Token. (body/header/query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>Id of the List. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>Name of the List. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"List details Updated\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/list.js",
    "groupTitle": "lists",
    "name": "PutApiV1ListsListidUpdatelist"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/logout",
    "title": "api to logout from application.",
    "version": "1.0.0",
    "group": "user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (query params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "authToken",
            "description": "<p>authToken of the user. (query/body/header params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "user.",
    "name": "PostApiV1UsersUseridLogout"
  },
  {
    "type": "post",
    "url": "/api/v1/users/changePassword",
    "title": "api for Changing Password.",
    "version": "1.0.0",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>old Password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>new Password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersChangepassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for Login.",
    "version": "1.0.0",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"Login Successfull\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhrdW5rd0JoMiIsImlhdCI6MTU5MjMwNTUyNjQyMiwiZXhwIjoxNTkyMzkxOTI2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7InVzZXJJZCI6InhsR3V2dm1xbSIsImZpcnN0TmFtZSI6IkFrYXNoIiwibGFzdE5hbWUiOiJrdW1hciIsImNvdW50cnlOYW1lIjoiIiwibW9iaWxlTnVtYmVyIjpudWxsLCJlbWFpbCI6ImFrYXNoa3VtYXIxQGdtYWlsLmNvbSIsInZhbGlkYXRpb25Ub2tlbiI6IiIsImZyaWVuZHMiOltdLCJmcmllbmRSZXF1ZXN0UmVjaWV2ZWQiOltdLCJmcmllbmRSZXF1ZXN0U2VudCI6W119fQ.ClJp4ikhGoTXndNo_gUoMVbOrABMpGr5TE93wkLMi7I\",\n        \"userDetails\": {\n            \"userId\": \"xlGuvvmqm\",\n            \"firstName\": \"Akash\",\n            \"lastName\": \"kumar\",\n            \"countryName\": \"\",\n            \"mobileNumber\": null,\n            \"email\": \"akashkumar1@gmail.com\",\n            \"validationToken\": \"\",\n            \"friends\": [],\n            \"friendRequestRecieved\": [],\n            \"friendRequestSent\": []\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "api for Password Reset.",
    "version": "1.0.0",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password reset instructions sent successfully\",\n    \"status\": 200,\n    \"data\": None\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "api for Registering User.",
    "version": "1.0.0",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastname",
            "description": "<p>Last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "countryName",
            "description": "<p>country Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>Mobile Number of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "        {\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"xlGuvvmqm\",\n        \"firstName\": \"Akash\",\n        \"lastName\": \"kumar\",\n        \"countryName\": \"\",\n        \"mobileNumber\": \"\",\n        \"email\": \"akashkumar1@gmail.com\",\n        \"validationToken\": \"\",\n        \"createdOn\": \"2020-06-16T08:18:47.000Z\",\n        \"_id\": \"5ee88067a969322be4b0b9fd\",\n        \"friends\": [],\n        \"friendRequestRecieved\": [],\n        \"friendRequestSent\": [],\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "put",
    "url": "/api/v1/users/updatePassword",
    "title": "api for Updating Password after Reset.",
    "version": "1.0.0",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "validationToken",
            "description": "<p>validationToken of the user recieved on Email. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>new password of the user . (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Password Update Successfully\",\n    \"status\": 200,\n    \"data\": \"None\"\n    \n}",
          "type": "object"
        }
      ]
    },
    "filename": "routes/user.js",
    "groupTitle": "users",
    "name": "PutApiV1UsersUpdatepassword"
  }
] });
