'use strict';

angular.module("TodoApp").controller("ItemDetailCtrl",function($scope,$routeParams,ItemFactory){
  
    let todoItems = ItemFactory.getTodoItems();  
      $scope.selectedItem = todoItems.find((item)=>{
        return item.id === +$routeParams.id;
    });
});