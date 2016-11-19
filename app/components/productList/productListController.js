App.controller('productListController', function($scope) {
    $scope.books = [
        {  "name": "The Girl from Venice",
            "author": "Martin Cruz Smith",
            "price":100,
            "imageUrl": "http://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781849838146/the-girl-from-venice-9781849838146_hr.jpg",
            "category":"Mystery"
        },
        {  "name": "When I'm Gone",
            "author": "Emily Bleeker",
            "price":120,
            "imageUrl": "https://images.gr-assets.com/books/1465938298l/27401883.jpg",
            "category":"Mystery"
        },
        {  "name": "The Fault in Our Stars",
            "author": "John Green",
            "price":400,
            "imageUrl": "https://images.gr-assets.com/books/1360206420l/11870085.jpg",
            "category":"Romance"
        },
        {  "name": "The Diary of a Young Girl",
            "author": "Anne Frank",
            "price":375,
            "imageUrl": "https://images.gr-assets.com/books/1358276407l/48855.jpg",
            "category":"History"
        },
        {  "name": "Angels & Demons",
            "author": "Dan Brown",
            "price":500,
            "imageUrl": "https://images.gr-assets.com/books/1303390735l/960.jpg",
            "category":"Suspense"
        },
        {  "name": "And Then There Were None",
            "author": "Agatha Christie",
            "price":480,
            "imageUrl": "http://images.gr-assets.com/books/1391120695l/16299.jpg",
            "category":"Suspense"
        },
        {  "name": "The Age of Daredevils",
            "author": "Michael Clarkson",
            "price":220,
            "imageUrl": "https://images.gr-assets.com/books/1462414275l/30112536.jpg",
            "category":"History"
        }
    ];
    $scope.catFilter = function(cat){
        return function(book){
            if(book.category == cat)
                return true;
            if(!cat)
                return true
        }
    }
    $scope.priceFilter = function(price){
        return function(book){
            if(book.price >= price.startPrice && book.price <= price.endPrice)
                return true;
            if(price == 'All')
                return true
        }
    }
    $scope.categories = $scope.books.reduce(function(sum, place) {
        if (sum.indexOf( place.category ) < 0) sum.push( place.category );
        return sum;
    }, []);

    $scope.filterByCategory = function(cat){
        $scope.selected = cat;
    }
    $scope.filterByPrice = function(price){
        $scope.selectedPrice = price;
    }

    $scope.priceRanges =[ {"startPrice":100,"endPrice":200},{"startPrice":200,"endPrice":300},{"startPrice":300,"endPrice":400},{"startPrice":400,"endPrice":500}]
});
