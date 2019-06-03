var myNinjaApp = angular.module('myNinjaApp', []); //variable for the name of the module and passing the dependencies

//myNinjasApp is the variable(LHS)
myNinjaApp.controller('NinjaController', [ '$scope', function($scope){

    $scope.removeNinja = function(ninja){
        var removeNinja = $scope.ninjas.indexOf(ninja);
        //remove 1 element from the index removeNinja
        $scope.ninjas.splice(removeNinja, 1);
        }

    $scope.submit = function(){
        $scope.ninjas.push(
            {
                name: $scope.newninja.name,
                belt: $scope.newninja.belt,
                rate:parseInt($scope.newninja.rate),
                available: true
            }
        )

        // empty the form once submit button is clicked
        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";

        
        
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


