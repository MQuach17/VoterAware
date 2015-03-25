angular.module('VAapp.controllers', []).
  controller('VAcontroller',
    function($scope,$http,$log,govTrackAPIservice,allCongressCache) {
      $scope.states=['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS'
,'KY','LA','ME','MD','MA','MI','MN','MS', 'MO','MT','NE','NV','NH','NJ', 'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY' ];
      $scope.currentCongress={};
      $scope.clear=function(){
        $scope.search={};
      };

      $scope.allCache={};


      var cache = allCongressCache.get('congressCache');
      if (cache) {
        $scope.allCache=cache;
        $log.log('cached');
      }
      else{
          govTrackAPIservice.getCongress().success(function(response){
            // $scope.currentCongress= response.objects;
            allCongressCache.put('congressCache',response.objects);
            $scope.allCache=allCongressCache.get('congressCache');
          });
          $log.log("not cached");
      }

  }).

  controller('detailController',function($scope,$routeParams,govTrackAPIservice){
    $scope.id = $routeParams.id;
    $scope.congressDetails = {};

    govTrackAPIservice.getCongressDetails($scope.id).success(function (response) {
        $scope.congressDetails = response; 
    });
    $scope.billNames=[];

    $scope.votedBills = {};
    govTrackAPIservice.getCongressmenVotes($scope.id).success(function(response){
        $scope.votedBills=response.objects;
        angular.forEach($scope.votedBills,function(vb){
          govTrackAPIservice.getBillName(vb.option.id).success(function(response){
            $scope.billNames.push({
                "id":response.id,
                "title":response.title
              });
          });
        });

    });


  });