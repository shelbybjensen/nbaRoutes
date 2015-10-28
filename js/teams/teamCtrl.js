var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
	$scope.teamData = teamData;
	$scope.NewGameForm = false;
	$scope.toggleNewGameForm = true;

	if($routeParams.team = utahjazz) {
		$scope.homeTeam = 'Utah Jazz'
		$scope.logoPath = 'images/jazz-logo.png'
	}
	if($routeParams.team = losangeleslakers) {
		$scope.homeTeam = 'Los Angeles Lakers'
		$scope.logoPath = 'images/lakers-logo.png'
	}
	if($routeParams.team = miamiheat) {
		$scope.homeTeam = 'Miami Heat'
		$scope.logoPath = 'images/heat-logo.png'
	}

	$scope.submitGame: {
		newGame: $scope.homeTeam.split(' ').join('').toLowerCase()
	}
});