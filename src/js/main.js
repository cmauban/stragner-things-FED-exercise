//IIFE for Angular module
;(function(){

  var app = angular.module('strangerThings', []);

    app.controller('stController', function($http, $rootScope){

      $http.get('../api/en_US.json')
        .then(function(response){
          $rootScope.items = response.data;
          /* check in console */
          console.log(response.data);
          var english = response.data;
          // items.locations.toString() = location
        });

      /* get pig latin data */
      $http.get('../api/la_PG.json')
        .then(function(response){
          $rootScope.plitems = response.data;
          console.log(response.data);
          var pigLatin = response.data;
        });

      // TODO: get translated content working.
      // reference: https://docs.angularjs.org/api/ng/directive/select

      var selectedLang = this;

    }); // end stController

})(); // end iffy

// Gallery
