"use strict";

angular.module("TodoApp").controller("ItemListCtrl",function($scope, ItemFactory){
   $scope.items = ItemFactory.getTodoItems();
   
      
});