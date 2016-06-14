(function(){
    var BooksController = function ($scope,booksService) {
        var vm = $scope;

        vm.sortBy = 'title';
        vm.reverse = 'false';

        vm.books = {};
        function init(){
            vm.books = booksService.getBooks();
        }

        vm.applySort = function (propertyVal) {
            vm.sortBy = propertyVal;
            vm.reverse = !vm.reverse;
        };

        init();
    };

    //minification
    BooksController.$inject = ['$scope','booksService'];

    angular.module('favBooks')
        .controller('BooksController',BooksController);
}());