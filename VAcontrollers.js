angular.module('VAapp.controllers', []).
  controller('VAcontroller',
    function($scope,$http,govTrackAPIservice) {
      $scope.states=['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS'
,'KY','LA','ME','MD','MA','MI','MN','MS', 'MO','MT','NE','NV','NH','NJ', 'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY' ];
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