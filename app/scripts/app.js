 (function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
         .html5Mode({
             enabled: true,
             requireBase: false
         });

     $stateProvider
         .state('landing', {
             url: '/landing',
             templateUrl: '/app/templates/landing.html'
                  })
     
         .state('collection', {
             url: '/collection',
             templateUrl: '/app/templates/collection.html'
                  })
     
         .state('album', {
             url: '/album',
             templateUrl: '/app/templates/album.html'
         
         });
 }
 
     angular
        .module('blocJams', ['ui.router'])
        .config(config);
 })();