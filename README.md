#Tutorial for Angular JS

This tutorial is taken from [here](http://www.revillwebdesign.com/angularjs-tutorial/).  My first attempt at an AngularJS driven webapp.

'This AngularJS tutorial is going to take you through a streamlined set of instructions and cram pack you full of AngularJS knowledge within 30 minutes. After this short but detailed AngularJS tutorial you will be able to quickly create powerful and intuitive web applications.'

Essentially, AngularJS allows us to utilize the <u>M</u>odel <u>V</u>iew <u>C</u>ontroller paradigm 

##Step 1

Include the necessary files in your webpage.  

	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.7/angular.min.js"></script>

##Setup the page for AngularJS

In order to allow our web page to act as a web-app with an MVC flavor, we need to tell Angular that we're an Angular App:

	<div id="content" ng-app="MyTutorialApp"></div>

So Angular now knows that this is an Angular App, we must now configure a controller.  The controller is responsible for taking data from our models, and placing that data into our views (hence <u>M</u>odel<u>V</u>iew<u>C</u>ontroller)

	<div id="content" ng-app="MyTutorialApp" ng-controller="MainTutController"></div>

Now that we have defined these `ng-app` and `ng-controller` within the content div, any tag which exists within the content div we can utilize Angular's feature.


Let's create a file which does this for us called 'app.js', and put it into the same directory as our 'index.html' file.

	var app = angular.module('MyTutorialApp', []);

'app.js' is creating an AngularJS app called MyTutorialApp, and then assigning it to app.

###Controller - MainController.js

Now we need to actually write some code which allows us to controller our mdoels and views.

We'll call this file 'MainController.js'.

	app.controller("MainController", function($scope){

	});

Here we're assigning a controller with an anonymous callback function to our 'apps' controller.  

###Include the app.js and MainController.js

We need to make sure to tell our index.html to include the file.

	<script type="text/javascript" src="app.js"></script>
	<script type="text/javascript" src="MainController.js"></script>

Now our webpage is aware of our app, and controller.  Let's have some fun.

##What is $scope

So in our 'MainController.js' file we passed an anonymous function to our 'apps' controller.  

	app.controller("MainController", function($scope){

	});

If you notice, there is a variable called '$scope' that we're passing in.  This is the variable/object what we will use to pass data between the models and views.

In our 'MainController.js' add the $scope.understands definition to the anon function.

	app.controller("MainController", function($scope){
		$scope.understands = "Wow. Angular is freakin sick";
	});

Then in our actual webpage 'index.html' lets actually refer to this '$scope.understands' variable. 

	<div id="content" ng-app="MyTutorialApp" ng-controller="MainController">
		{{understands}}
	</div>


The html/view above refers to the $scope.understands variable via double handlebars syntax '{{}}'.  AngularJS is working behind the scenes to parse through the html and then populate any places which contain '{{}}'.  It's doing this through something called Data-Binding.

Now try opening 'index.html' in you webpage.

##What's Data Binding

Imagine being able to update your view as the model changes in real time...

Yeah... Angular Does that.  

###ng-model

In order to do this real-time update stuff, you have to use another angular tag in your html called `ng-model'.

	<div id="content" ng-app="MyTutorialApp" ng-controller="MainController">
		{{understands}}
		<!-- Let's create a text input and sync it with our model -->
		<input type="text" ng-model="inputValue">

		<!-- Now let's actually display what we're typing and update realtime -->
		{{inputValue}}
	</div>

Now let's update the Main Controller to look like so:

	app.controller("MainController", function($scope){
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

Here we're adding an array of objects ("people") to our $scope variable, and two other variables for holding the 'selected' person and/or genre.

To represent this in our view we must add a few things to our 'index.html' files.

	<select ng-model="selectedPerson" ng-options="obj.name for obj in people"></select>
	<select ng-model="selectedGenre">
		<option ng-repeat="label in people[selectedPerson.id].music">{{label}}</option>
	</select>

The html above utilizes some amazing stuff ('ng-options', 'ng-repeat') for creating a selection box based on our model.

###ng-repeat

ng-repeat will repeatedly generate the specified element based on the array, collection, list passed to it.  In our case, people[selectedPerson.id].music, is simply an array of the types of music a person likes. 'label' is the variable we're going to put a value in (i.e. Indie).  We then use {{label}} as the place to update our view.

###ng-options

ng-options let's us populate the selection list with the values in an array of interest.

##Filtering data

Interested in searching through content in your model.  AngularJS makes filtering simple:

	<input type="text" ng-model="searchText">
	<ul>
		<li ng-repeat="person in people | filter : searchText">
			#{{person.id}} {{person.name}}
		</li>
	</ul>

The code above allows us to create a list of all the people in our model.  It then allows us to search through that list, and return the values that satisfy that search criteria.  Think about being like 'google instant' on your page.

###Hiding and showing elements

Here we'll be using ng-show and ng-hide to demonstrate hiding and showing events.