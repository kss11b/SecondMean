app.controller('dashController', ['$scope','userFactory', 'itemFactory', '$routeParams', '$location', '$cookies', function($scope,userFactory, itemFactory, $routeParams, $location, $cookies) {

  userFactory.session(function(res){
    if(!res){
      $location.url("/")
    }
    else{
    $scope.current_user = userFactory.current_user
  }
  })

  $scope.logout = function(){
    userFactory.logout()
    $cookies.remove('user_id');
    $location.url("/")
  }

  $scope.index = function(){
    itemFactory.index(function(res){
      console.log(res.data)
      $scope.items = res.data
      console.log('here: ', $scope.items[0].users);
      // console.log($scope.posts)
    })
  }
  $scope.item = function(newItem){
    newItem.author=$scope.current_user._id
    console.log(newItem)
    itemFactory.item(newItem, function(res){
      $scope.index()

    })
  }
  $scope.done = function(id){
    itemFactory.done(id, function(res){
      $scope.index()
    })
  }
  $scope.getUsers = function(){
    itemFactory.getUsers(function(res){
      $scope.allUsers = res.data
    })
  }
  $scope.index()
  $scope.getUsers()
  }])
