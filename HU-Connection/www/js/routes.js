angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.profile', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.finder'
      2) Using $state.go programatically:
        $state.go('tabsController.finder');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /profile/tab1/page3
      /profile/tab2/page3
  */
  .state('tabsController.finder', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/finder.html',
        controller: 'finderCtrl'
      },
      'tab2': {
        templateUrl: 'templates/finder.html',
        controller: 'finderCtrl'
      }
    }
  })

  .state('tabsController.chat', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/chat.html',
        controller: 'chatCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/profile',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('home', {
    url: '/Home',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('login', {
    url: '/page7',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.prajjwalDangal', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/prajjwalDangal.html',
        controller: 'prajjwalDangalCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/Home')

  

});