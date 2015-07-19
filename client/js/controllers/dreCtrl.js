angular.module('app.controllers.DRE',[]).controller('DREListController',function($scope,$state,popupService,$window,Caixa,Estoque,Saidas){

  var ONE_MONTH = 30 * 24 * 60 * 60 * 1000;

  $scope.search={
    data_inicial:new Date(),
    data_final:new Date()
  };
});
