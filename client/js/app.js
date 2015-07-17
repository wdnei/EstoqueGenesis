/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('app',['ui.router','ngResource','app.controllers','app.services','lbServices']);

angular.module('app').config(function($stateProvider,$httpProvider){
    $stateProvider.state('funcionarios',{
        url:'/funcionarios',
        templateUrl:'partials/funcionario/funcionarios.html',
        controller:'FuncionarioListController'
    }).state('viewFuncionario',{
       url:'/funcionarios/:id/view',
       templateUrl:'partials/funcionario/funcionario-view.html',
       controller:'FuncionarioViewController'
    }).state('newFuncionario',{
        url:'/funcionarios/new',
        templateUrl:'partials/funcionario/funcionario-add.html',
        controller:'FuncionarioCreateController'
    }).state('editFuncionario',{
        url:'/funcionarios/:id/edit',
        templateUrl:'partials/funcionario/funcionario-edit.html',
        controller:'FuncionarioEditController'
    });
}).run(function($state){
   $state.go('funcionarios');
}).config(function (LoopBackResourceProvider) {

            // Use a custom auth header instead of the default 'Authorization'
            // LoopBackResourceProvider.setAuthHeader('X-Access-Token');

            // Change the URL where to access the LoopBack REST API server
            LoopBackResourceProvider.setUrlBase('http://localhost:3000/api');
        })
        .config(['$httpProvider', function ($httpProvider) {
                $httpProvider.defaults.useXDomain = true;
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ])

.constant("APIlb", {
        "url": "http://localhost:3000/api"
    });
