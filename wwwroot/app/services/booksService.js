(function (params) {
    var booksService = function () {
        var books = [
            {
                id:1,
                title:"C# 6.0 in a Nutshell",
                isbn:"1491927062",
                publisher:"O'Reilly Media",
                authors:[
                    {
                        id:1,
                        name:"Joseph Albahari"
                    },
                    {
                        id:2,
                        name:"Ben Albahari"
                    }
                ]
            },
            {
                id:2,
                title:"Professional C# 5.0 and .Net 4.5.1",
                isbn:"1118833031",
                publisher:"Wrox",
                authors:[
                    {
                        id:3,
                        name:"Christian Nagel"
                    },
                    {
                        id:4,
                        name:"Jay Glenn"
                    },
                    {
                        id:5,
                        name:"Morgan Skinner"
                    }
                ]
            },
            {
                id:3,
                title:"AngularJS: Up and Running",
                isbn:"1491901942",
                publisher:"O'Reilly Media",
                authors:[
                    {
                        id:6,
                        name:"Shyam Seshadri"
                    },
                    {
                        id:7,
                        name:"Brad Green"
                    }
                ]
            },
            {
                id:4,
                title:"Pro ASP.Net MVC 5",
                isbn:"1430265299",
                publisher:"Apress",
                authors:[
                    {
                        id:8,
                        name:"Adam Freeman"
                    }
                ]
            },
            {
                id:5,
                title:"Professional ASP.NET MVC 5",
                isbn:"1118794753",
                publisher:"Wrox",
                authors:[
                    {
                        id:9,
                        name:"Jon Galloway"
                    },
                    {
                        id:10,
                        name:"Brad Wilson"
                    },
                    {
                        id:11,
                        name:"K. Scott Allen"
                    },
                    {
                        id:12,
                        name:"David Matson"
                    }
                ]
            }];//eof books
        
        this.getBooks = function () {
            return books;
        };
        
        this.getBookById = function (bookId) {
            for (var i = 0, len = books.length; i<len; i++) {
                if(books[i].id===parseInt(bookId)){
                    return books[i];
                }
            }
            return {};
        };

    };//eof booksService

    angular.module('favBooks')
        .service('booksService',booksService);
}());