angular
    .module('ngCribs')
    .controller('cribsController', function($scope){
        
        $scope.cribs = [
            {
                "type" : "Condo",
                "price" : 220000,
                "address" : "4714 N Habana Ave",
                "description" : "Awesome place"
            },
            {
                "type" : "House",
                "price" : 120000,
                "address" : "3245 N Florida Ave",
                "description" : "really nice"
            }
        ];
    });