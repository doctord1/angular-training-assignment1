(function () {
'use strict';
    
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController) ;
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.numItems = '';
        $scope.userInput= '';
        $scope.message= '';
        $scope.displayMessage = function(){
            console.log("in here");
            if($scope.numItems <= 3){
            $scope.message = 'Enjoy!';
            } else {
            $scope.message = 'Too much';
            }
            
        }
          
        $scope.getNumUserDishes = function (string){   
            var arrayOfUserLunch = string.split(',');
//            console.log(arrayOfUserLunch);
            $scope.numItems = arrayOfUserLunch.length;
            $scope.displayMessage();
            return num;
        }
        
    }
    
})();

/*!function(){"use strict";function e(e){e.numItems="",e.userInput="",e.message="",e.displayMessage=function(){e.numItems<=3?e.message="Enjoy!":e.message="Too much"},e.getNumUserDishes=function(s){var n=s.split(","),t=n.length;return e.numItems=t,e.displayMessage(),t}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();*/