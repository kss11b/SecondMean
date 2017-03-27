app.controller('showController', ['$scope','userFactory', 'itemFactory', '$routeParams', '$location', '$cookies', function($scope,userFactory, itemFactory, $routeParams, $location, $cookies) {
  userFactory.session(function(res){
    if(!res){
      $location.url('/')
    }
    else{
    $scope.current_user = userFactory.current_user
  }
  })
$scope.show = function(){
  var id = $routeParams.id
  console.log($routeParams.id)
  itemFactory.show(id, function(res){
    $scope.thisUser = res.data;
    console.log(res.data)
  })
}
$scope.index = function(){
  itemFactory.index(function(res){
    console.log(res.data)
    $scope.items = res.data
    // console.log('here: ', $scope.items[0].users);
    // console.log($scope.posts)
  })
}
$scope.index();
$scope.show();


}])
