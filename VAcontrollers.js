angular.module('VAapp.controllers', []).
  controller('VAcontroller',
    function($scope,govTrackAPIservice) {
      $scope.currentCongress={};

      govTrackAPIservice.getCongress().success(function(response){
        $scope.currentCongress= response.objects;
    });
  }).

  controller('detailController',function($scope,$routeParams,govTrackAPIservice){
    $scope.id = $routeParams.id;
    // $scope.races = [];
    $scope.congressDetails = {};

    govTrackAPIservice.getCongressDetails($scope.id).success(function (response) {
        $scope.congressDetails = response; 
    });

  });