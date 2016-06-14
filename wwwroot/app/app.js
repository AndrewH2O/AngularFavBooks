(function () {
    var app = angular.module('favBooks',['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/',{
                controller:'BooksController',
                templateUrl:'app/views/books.html'
            })
            .when('/authors/:bookId',{
                controller:'AuthorsController',
                templateUrl:'app/views/authors.html'
            })
            .otherwise({ redirectTo:'/' });
    });

}());