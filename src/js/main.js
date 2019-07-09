//IIFE for Angular module
;(function(){

  var app = angular.module('strangerThings', []);

    app.controller('stController', function($http, $rootScope){

      $http.get('../api/en_US.json')
        .then(function(response){
          $rootScope.items = response.data;
          /* check in console */
          console.log(response.data);
        });

    }); // end countController

})(); // end iffy
