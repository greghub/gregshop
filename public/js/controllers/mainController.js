angular.module('mainCtrl', [])

.controller('mainController', function($scope, $http, Product) {

  $scope.products = [];

  $scope.loading = true;

  $scope.formOpen = false;


  $scope.export = function() {
    Product.export();
  }

  $scope.resetForm = function() {
    $scope.productData = {
      title: '',
      rating: '',
      price: '',
      list_price: '',
      is_featured: false,
    };    
  }

  $scope.cancel = function() {
    $scope.formOpen = false;
    $scope.resetForm();
  }

  $scope.resetForm();

  Product.get()
    .then(function success(response) {
      $scope.products = response.data;
      $scope.loading = false;
    }, function error(response) {
      $scope.loading = false;
    });


  $scope.submitProduct = function() {
      $scope.loading = true;
      Product.save($scope.productData)
        .then(function success(response){
          Product.get()
            .then(function success(response) {
              $scope.formOpen = false;
              $scope.products = response.data;
              $scope.resetForm();
              $scope.loading = false;
            });
        }, function error(response){
          $scope.loading = false;
        });
  };

});