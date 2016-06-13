(function () {
    var app = angular.module('favBooks',['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                controller:'booksController',
                templateUrl:'app/views/books.html'
            })
            .otherwise({ redirectTo:'/' });
    });

}());