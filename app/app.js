var myNinjaApp = angular.module('myNinjaApp', []); //variable for the name of the module and passing the dependencies

//myNinjasApp is the variable(LHS)
myNinjaApp.controller('NinjaController', [ '$scope', function($scope){

    $scope.removeNinja = function(ninja){
        var removeNinja = $scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removeNinja, 1);
        }


    $scope.ninjas=[
        {  
            name: "Ryu",
            belt:"Black",
            rate: 30,
            available: true
        },
        {  
            name: "Rye",
            belt:"Red",
            rate: 33,
            available: false
        },
        {   
            name: "Chris",
            belt:"Orange",
            rate: 43,
            available: true
        },
        {   
            name: "Dan",
            belt:"Blue",
            rate: 32,
            available: true
        }
    
    ];

}]);


