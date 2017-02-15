angular.module('components', [])

.directive('product', function() {
  return {
    restrict: 'E',
    scope: {
      product: '=data',
      index: '@index'
    },
    templateUrl: 'public/js/components/templates/product.html'
  };
})
 
.directive('rating', function() {
  return {
    restrict: 'E',
    scope: {
      rating: '@data',
    },
    link: function(scope, element, attributes) {
      scope.stars = attributes.data;
      scope.whole = Math.floor(scope.stars);
      scope.hollow = 5 - scope.whole;
      if(scope.stars - scope.whole != 0) {
        scope.half = true;
        scope.hollow--;
      }
      scope.stars = [];
      scope.nostars = [];
      for(var i = 0; i < scope.whole; i++) scope.stars.push(i);
      for(var i = 0; i < scope.hollow; i++) scope.nostars.push(i);
    },
    templateUrl: 'public/js/components/templates/rating.html'
  };
})