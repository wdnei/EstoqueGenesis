angular.module('app.controllers.DRE',[]).controller('DREListController',function($scope,$state,popupService,$window,Caixa,Estoque,Saida){

  var ONE_MONTH = 30 * 24 * 60 * 60 * 1000;
  $scope.search={
  data_inicial:new Date(Date.now()-(60*1000*60*24*1)),
  data_final:new Date()
}

  $scope.receita_bruta=0;
  $scope.CMV=0;
  $scope.lucro=0;

  $scope.gerarDRE=function(){
    console.log($scope.search.data_final.toJSON());
    $scope.receita_bruta=0;
    $scope.CMV=0;
    $scope.lucro=0;


    Caixa.find({"filter": {
      "where": {
        "and":[
        {"and": [ {"data_movimentacao":{"gte":$scope.search.data_inicial.toJSON()}}, {"data_movimentacao": {"lte":$scope.search.data_final.toJSON()}}  ]},
        {"tipo":"venda"}]
      }
    }},function(res){
      console.log(res);
      var filtrados=[];

      for (var i = 0; i < res.length; i++) {
        var data_movimentacao=new Date(res[i].data_movimentacao);
        if(data_movimentacao>=$scope.search.data_inicial && data_movimentacao<=$scope.search.data_final && res[i].tipo=="venda" )
        {
          filtrados.push(res[i]);
          $scope.receita_bruta+=res[i].qtd*res[i].preco_unitario;
        }
      }
      console.log(filtrados);

      Saida.find({"filter": {
        "where": {
          "and": [ {"data_adicao":{"gte":$scope.search.data_inicial.toJSON()}}, {"data_adicao": {"lte":$scope.search.data_final.toJSON()}}  ]
        }
      }},function(res){

        for (var i = 0; i < res.length; i++) {
          var data_adicao=new Date(res[i].data_adicao);
          if(data_adicao>=$scope.search.data_inicial && data_adicao<=$scope.search.data_final)
          {
            $scope.CMV+=res[i].qtd*res[i].preco_unitario;
          }
        }

        $scope.lucro=$scope.receita_bruta-$scope.CMV;



      },function(res){console.log(res);});



    },function(res){
      console.log(res);
    });

  };




});
