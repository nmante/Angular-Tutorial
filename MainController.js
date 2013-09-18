
//Assign a controller called MainController to the applications controller

app.controller("MainController", function($scope){
	$scope.understands = "Holy Crap.  AngularJS is freakin sick.";

	//We'll use this as our model for now
	$scope.inputValue = "";

	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
			{
				id: 0,
				name: 'Leon',
				music: [
					'Rock',
					'Metal',
					'Dubstep',
					'Electro'
				]
			},
			{
				id: 1,
				name: 'Chris',
				music: [
					'Indie',
					'Drumstep',
					'Dubstep',
					'Electro'
				]
			},
			{
				id: 2,
				name: 'Harry',
				music: [
					'Rock',
					'Metal',
					'Thrash Metal',
					'Heavy Metal'
				]
			},
			{
				id: 3,
				name: 'Allyce',
				music: [
					'Pop',
					'RnB',
					'Hip Hop'
				]
			}
		];

});

