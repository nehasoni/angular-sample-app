var App = angular
    .module('app', [
        'ngRoute'
    ])
    .config(function ($routeProvider,$filterProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/productList/productList.html',
                controller: 'productListController'

            })
            .otherwise({
                redirectTo: '/'
            });
    });