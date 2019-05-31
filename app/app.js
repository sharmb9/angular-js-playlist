var myNinjaApp = angular.module('myNinjaApp', []); //variable for the name of the module and passing the dependencies

//myNinjasApp is the variable(LHS)
myNinjaApp.controller('NinjaController', [ '$scope', function($scope){

    $scope.message="Hi I am a text, blah";

    $scope.ninjas=[
        {  
             name: "ryu",
            belt:"blavk",
            rate: 30
        },
        {  
             name: "rye",
            belt:"red",
            rate: 33
        },
        {   
            name: "chris",
            belt:"orange",
            rate: 43
        },
        {   
            name: "dan",
            belt:"blue",
            rate: 32
        }
    
    ];

}]);


