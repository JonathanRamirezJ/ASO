'use strict';

var app = angular.module('myApp', ['ngRoute','ngResource','pascalprecht.translate']);
app.config(['$routeProvider','$translateProvider',function($routeProvider , $translateProvider) {
    $translateProvider.fallbackLanguage('en');
    //aqui es donde se recibe la key que es 'en' y 'es' para los idiomas
    $translateProvider.registerAvailableLanguageKeys(['en','es'],{
        'en_*':'en',
        'es_*':'es'
    });
    $translateProvider.translations('en',{
            TITULO1:'Renault',
	          TITULO2: 'Home',
            TITULO3: ' About Us',
            TITULO4: ' Services',
            TITULO5: ' Costs',
            TITULO6: 'Privacy Terms',
            TITULO7: 'Mission',
            TITULO8: 'View',
            TITULO9: 'About us',
            TITULO10: 'Our Partners ',
            TITULO11:'Automotive Services Online',
            TITULO12: 'Follow us',
            TITULO13: ' Contact us ',
            TITULO14: 'Send',
            BUTTON_LANG_EN:'English',
            BUTTON_LANG_ES:'Spanish'
      });
      $translateProvider.translations('es',{
          TITULO1:' Renault',
          TITULO2: 'Inicio',
          TITULO3: '¿Quiénes somos?',
          TITULO4: '¿Qué ofrecemos?',
          TITULO5: 'Costo servicio',
          TITULO6: ' Aviso de privacidad',
          TITULO7: ' Misión',
          TITULO8: 'Visión',
          TITULO9: 'Nosotros',
          TITULO10: 'Nuestros Asociados',
          TITULO11:'Servicios Automotrices en Línea ',
          TITULO12: 'Síguenos',
          TITULO13: 'Contáctanos',
          TITULO14: 'Enviar',
          BUTTON_LANG_EN:'Ingles',
          BUTTON_LANG_ES:'Español'
      });
      $translateProvider.useSanitizeValueStrategy('escape');
      $translateProvider.preferredLanguage('es');
    $routeProvider
    .when('/', {
        templateUrl : ' components/home.html'
    })
    .when('/home', {
        templateUrl : 'components/home.html'
    })
    .when('/somos', {
        templateUrl : 'components/somos.html'
    })
    .when('/ofrecemos', {
        templateUrl : 'components/ofrecemos.html',
        controller: 'MyController'
    })
    .when('/costos', {
        templateUrl : 'components/cost.html',
        controller: 'elementsController'
    })
    .when('/aviso', {
        templateUrl : 'components/avisoP.html'
    })
    .when('/about', {
        templateUrl : 'components/about.html'
    })
    .when('/detail' ,{
      templateUrl : 'components/detail.html',
      controller : 'dtailscontroller'
    })
    .otherwise({
        redirectTo : '/'
    });
}]);

// Factory
app.factory('MyService', function(){
    return{
        data:{}
    };
});

app.controller('Ctrl', function($scope, $translate) {
  $scope.changeLanguage = function(key){
    $translate.use(key);
    console.log('Cambio de Idioma');
  };
});

// Jony Component

app.controller('elementsController', function ($scope, dataResource) {
    $scope.datosResource = dataResource.get();
    $scope.myFunction = function(index) {
      console.log('Index selecionado: '+index);
    };
});

app.factory('dataResource', function ($resource) {
  return $resource('../api.json',
      {},
      { get: { method: 'GET', isArray: true }
  });
});


// Julio component
app.controller('MyController', ['$scope', '$location', 'MyService', function($scope, $location, MyService){
    $scope.goto = function (param, img){
        MyService.data.ruta = param;
        MyService.data.urlimg = img;
        $location.url('components/detail.html');
    };
    $scope.conts = [
        {
            imagen: 'image/consulting.jpg',
            titulouno: 'Consulting',
            more: 'more_vert',
            enlace: 'este es un enlace',
            titulodos: 'Consulting',
            cerrar: 'close',
            paragraph: 'Este es el contenido de tu card',
            button: 'Detalles'
        },
        {

            imagen: 'image/car-market.jpg',
            titulouno: 'Car Market',
            more: 'more_vert',
            enlace: 'este es un enlace',
            titulodos: 'Car Market',
            cerrar: 'close',
            paragraph: 'Este es el contenido de tu card',
            button: 'Detalles'
        },
       {

          imagen: 'image/home-real.jpg',
          titulouno: 'Desing',
          more: 'more_vert',
          enlace: 'este es un enlace',
          titulodos: 'Desing',
          cerrar: 'close',
          paragraph: 'Este es el contenido de tu card',
          button: 'Detalles'
      },
      {

         imagen: 'image/home-real.jpg',
         titulouno: 'CV',
         more: 'more_vert',
         enlace: 'este es un enlace',
         titulodos: 'Desing',
         cerrar: 'close',
         paragraph: 'Este es el contenido de tu card',
         button: 'Detalles'
     }
    ];
}]);

app.controller('dtailscontroller',['$scope', 'MyService', function($scope, MyService){
    $scope.mensage = MyService.data.ruta;
    $scope.img = MyService.data.urlimg;
}]);
