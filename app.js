(function(){
'use strict';
angular.module('lunchCheck', [])
.controller('lunchCheckController', lunchCheckController);
   lunchCheckController.$inject=['$scope'];
   function lunchCheckController($scope){
   $scope.textEntry="";
   $scope.message="";
   
   $scope.displayMessage=function(){
       var retMessage=calculateSizeOfString($scope.textEntry);
       $scope.message=retMessage;
   };
   function calculateSizeOfString(string){
       var stringSplit=string.split(',');
       var sss="";
       if(string=="")
        sss="Please enter data first";
       else if(stringSplit.length<=3)
        sss="Enjoy!";
       else
        sss="Too Much!";
       return sss;
       
   }
 }


})();