(function(){
 angular.module('imgame.createGame', [])
 	.controller('CreateGameController', CreateGameController);

 	function CreateGameController($scope, $window, $location, GamePost, Auth){
 		$scope.game = {}

    Auth.requireAuth();

 		$scope.createGame = function(game){
 			game = { 
 				"game_location": game.location,
 				"game": game.name,
 				"gamepost_description": game.description,
				"player_count": game.numPlayers,
				"game_time": '12:00:00'
 			};
 			GamePost.create(game)
 				.then(function(data){
          // if user is not authrized, data = "User is not logged in!"
          console.log("create gamepost: ", data)
 					console.log(data);
 				})
      };
 	};

})();