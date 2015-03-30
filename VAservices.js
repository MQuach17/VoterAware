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
        url: 'https://www.govtrack.us/api/v2/vote_voter?person='+ id+'&format=json&limit=6000&order_by=-created'
      });
    }

    govTrackAPI.getBillName = function(id){
      return $http({
        method: 'GET', 
        url: 'https://www.govtrack.us/api/v2/vote/'+ id
      });
    }

    return govTrackAPI;
  }).

  factory("allCongressCache",function($cacheFactory){
      return $cacheFactory("congressCache")

  });
