var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){
	this.addNewGame = function(gameObj) {
		url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
		if (parseInt("gameObj.homeTeamScore") > parseInt("gameObj.opponentScore")) {
			gameObj.push = {
				won: 'true'
			};
		} else {
			gameObj.push = {
				won: 'false'
			};
		}
		return $http ({
			method: 'POST',
			url: 'https://api.parse.com/1/classes/',
			data: 'gameObj'
		})
	}

	this.getTeamData = function(team) {
		var dfd = $q.defer();
		url = 'https://api.parse.com/1/classes/' + team;
		$http ({
			method: 'GET',
			url: 'https://api.parse.com/1/classes/' + team
		}).then(function(data) {
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for (var i = 0; i < results.length; i++) {
				if (won = true) {
					won[i++];
				}else {
					won[i--];
				}
			}
		})

		return dfd.promise;
	}

});