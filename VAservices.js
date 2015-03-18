angular.module('VAapp.services', []).
  factory('govTrackAPIservice', function($http) {

    var govTrackAPI = {};

    govTrackAPI.getCongress = function() {
      return $http({
        method: 'GET', 
        url: "https://www.govtrack.us/api/v2/role?current=true&format=json"
      });
    }

    govTrackAPI.getCongressDetails = function(id){
      return $http({
        method: 'GET', 
        url: 'https://www.govtrack.us/api/v2/person/'+ id
      });      
    }
    return govTrackAPI;
  });
