angular.module('VAapp.controllers', []).
  controller('VAcontroller',function($scope,govTrackAPIservice) {
      $scope.currentCongress={};

      govTrackAPIservice.getCongress().success(function(response){
        $scope.currentCongress= response.objects;
        // $scope.currentCongress=govTrackAPI.getCongress();
    })
});