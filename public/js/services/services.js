angular.module('productService', [])

.factory('Product', function($http, $httpParamSerializerJQLike) {

  return {
    get: function() {
      return $http.get(BASE_PATH + '/api/products?order_desc_by=id', {
        headers: {'Accept': 'application/json'}
      });
    },

    export: function() {
      return window.location = BASE_PATH + '/api/products/export';
    },

    save: function(productData) {
      return $http({
        method: 'POST',
        url: BASE_PATH + '/api/products',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        data: $httpParamSerializerJQLike(productData)
      });
    }
  }

});