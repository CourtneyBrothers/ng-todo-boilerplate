"use strict";

angular.module("TodoApp",["ngRoute"])
.constant("FBUrl","https://todo-app-920df.firebaseio.com/")
.config(($routeProvider) => { 
    //TODO: 
    $routeProvider
    .when('/items/list',{
        templateUrl:"partials/item-list.html",
        controller:"ItemListCtrl"
    })
    .when('/items/new',{
        templateUrl: "partials/item-new.html",
        controller: "ItemNewCtrl"
    })
    .when('/items/deets/:id',{
        templateUrl:"partials/item-details.html",
        controller:"ItemDetailCtrl"
    })
    .otherwise("/items/list");
});


