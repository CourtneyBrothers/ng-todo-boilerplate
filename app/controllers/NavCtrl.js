"use strict";

angular.module("TodoApp").controller("NavCtrl",function($scope, FilterFactory, ItemFactory){

    $scope.searchTerm = FilterFactory;

    $scope.navItems = [
        {
            name:"Logout",
            url:"#!/logout"
        },
        {
            name:"All Items",
            url:"#!/items/list"
        },
        {
            name:"Add New Item",
            url:"#!/items/new"
        },
        {
            name:"Login",
            url:"#!/login"
        }
        ];
});