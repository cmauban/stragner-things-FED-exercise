//IIFE for Angular module
;(function(){

  var app = angular.module('', []);

    app.controller('', function($http, $rootScope){

      $http.get('')
        .then(function(response){
          $rootScope.items = response.data;
        });

    }); // end countController

})(); // end iffy
