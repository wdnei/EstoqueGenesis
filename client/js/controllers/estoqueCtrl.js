angular.module('app.controllers.Estoque',[]).controller('EstoqueListController',function($scope,$state,popupService,$window,Estoque){



  Estoque.find(
    function (res) {
      // success

      console.log(res);
      $scope.estoques=res;
    
    }, function (res) {
      // error
      console.log( "Erro ao recuperar estoques!");

      console.log(res);
    });



  });
