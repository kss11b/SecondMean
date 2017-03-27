app.factory('itemFactory', ['$http', '$cookies', function($http, $cookies) {
  var factory = {};

  factory.index = function(callback) {
    console.log("factory index")
      $http.get('/pull').then(function(res){
        callback(res);
      });
  }

  factory.item = function(newItem, callback) {
    console.log(newItem + "marker")
      $http.post('/item', newItem).then(function(res){
        console.log(res.data)
        callback(res);


              });
      }

  factory.show = function(id, callback) {
  console.log('factory show')
  $http.get('/show/' + id).then(function(res){
    console.log(res.data)
    callback(res)
  })
}

  factory.done = function(id, callback) {
    $http.put('/done/' + id).then(function(res){
      callback(res)
    })
  }
  factory.getUsers = function(callback) {
    $http.get('/getUsers').then(function(res){
      callback(res)
    })
  }
  return factory;
}]);
