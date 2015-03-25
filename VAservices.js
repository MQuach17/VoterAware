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
        url: 'https://www.govtrack.us/api/v2/person/'+ id+'&format=json'
      });      
    }

    govTrackAPI.getCongressmenVotes = function(id){
      return $http({
        method: 'GET', 
        url: 'https://www.govtrack.us/api/v2/vote_voter?person='+ id+'&format=json'
      });
    }

    govTrackAPI.getBillName = function(id){
      return $http({
        method: 'GET', 
        url: 'https://www.govtrack.us/api/v2/bill/'+ id+'&format=json'
      });
    }

    return govTrackAPI;
  }).

  factory("allCongressCache",function($cacheFactory){
      return $cacheFactory("congressCache")

  });
