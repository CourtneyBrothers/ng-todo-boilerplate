"use strict";

angular.module("TodoApp").controller("ItemListCtrl",function($scope, ItemFactory, $rootScope){
    $rootScope.searchTerm = "";
   $scope.items = ItemFactory.getTodoItems();

      
});