angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope) {

})
   
.controller('finderCtrl', function($scope) {

})
   
.controller('chatCtrl', function($scope) {

}

.controller('homeCtrl', function($scope, $rootScope) {
	var doSomething = function(){
		return 0;
	}
	$rootScope.Users = {"saurav-k-aryal": {
		"Name": "Saurav Aryal",
		"Email": "saurav.aryal@bison.howard.edu",
		"Password": "password",
		"Chats": {"Pdangal": [{"Pdangal": "Hey, so saw you've worked with Ionic."}, {"saurav-k-aryal": "Yeah, Ionic is cool!"},
		{"Pdangal": "So, how did you start out? Forums? Documentations??"}], "J_Doe": [{"saurav-k-aryal": "Yo! Saw you have some cool startup experience."},
		{"J_Doe": "Hi! Yes, I have been quite busy! :D"}], "Shrek10": [{"Shrek10": "I wanted to pitch an idea to you. Up for it?"}]},
		"Type": "Both",
		"Matches": ["Pdangal"],
		"Details": "Developer, Entrepreneur, Student",
	},
	"Shrek10": {
		"Name": "Wayne Rooney",
		"Email": "zuck@facebooker.org",
		"Password": "password",
		"Chats": {"saurav-k-aryal" : [{"Shrek10": "I wanted to pitch an idea to you. Up for it?"}]},
		"Type": "Developer",
		"Matches": ["saurav-k-aryal"],
		"Details": "Developer, passionate about Sports tech.",
	},
	"WallKeeper": {
		"Name": "David De Gea",
		"Email": "zuck@facebooker.org",
		"Password": "password",
		"Chats": {"Pdangal": [{"Pdangal": "Hey, so saw you've worked with Ionic."}, {"saurav-k-aryal": "Yeah, Ionic is cool!"},
		{"Pdangal": "So, how did you start out? Forums? Documentations??"}], "J_Doe": [{"saurav-k-aryal": "Yo! Saw you have some cool startup experience."},
		{"J_Doe": "Hi! Yes, I have been quite busy! :D"}], "saurav-k-aryal" : [{"saurav-k-aryal": "I wanted to pitch an idea to you. Up for it?"}]},
		"Type": "Entrepreneur",
		"Matches": ["saurav-k-aryal"],
		"Details": "Entrepreneur, interested in ML Projects.",
	},
};
})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, $rootScope, $ionicPopup, $state) {
	$scope.username = "";
	$scope.password = "";
	$scope.login = function()
	{
		if ($rootScope.Users.hasOwnProperty($scope.username)){
				if ( $scope.password == "password"){
				var alertPopup = $ionicPopup.alert({
     			title: 'Logging in..!',
     			template: 'Login was succesful!.'
   						});
		    		alertPopup.then(function(res) {
		    		$state.go("tabsController.profile");
		   			});
				}
			}
				else {
				var alertPopup = $ionicPopup.alert({
     			title: 'Incorrect Login Credentials',
     			template: 'Please try again.'
   						});
		    		alertPopup.then(function(res) {
		   			});
				}

	};
}))
 