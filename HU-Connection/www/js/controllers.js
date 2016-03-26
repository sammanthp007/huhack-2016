angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope) {

})
   
.controller('finderCtrl', function($scope) {
	var cardTypes = [
        { image: 'img/pic2.png', title: 'So much grass #hippster'},
        { image: 'img/pic3.png', title: 'Way too much Sand, right?'},
        { image: 'img/pic4.png', title: 'Beautiful sky from wherever'},
    ];
 
    $scope.cards = [];
 
    $scope.addCard = function(i) {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }
 
    for(var i = 0; i < 3; i++) $scope.addCard();
 
    $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
    }
 
    $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
    }
 
    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    }
})
   
.controller('chatCtrl', function($scope) {

})
      
.controller('homeCtrl', function($scope) {

})
   
.controller('signupCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope) {

})
   
.controller('prajjwalDangalCtrl', function($scope) {

})
 