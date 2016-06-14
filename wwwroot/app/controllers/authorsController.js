(function () {
    var AuthorsController = function ($scope, $routeParams, booksService) {
        var vm = $scope;
        var bookId = $routeParams.bookId;
        var author = null;

        function init(){
            vm.book = booksService.getBookById(bookId);
        }

        init();
    };

    AuthorsController.$inject = ['$scope', '$routeParams', 'booksService'];

    angular.module('favBooks')
        .controller('AuthorsController',AuthorsController);

}());