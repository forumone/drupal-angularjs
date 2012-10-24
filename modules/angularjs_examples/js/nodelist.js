angular.module('nodelist', ['node', 'nodes']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {controller:ListCtrl, templateUrl:'/angular/nodes/list'}).
      //when('/edit/:nid', {controller:EditCtrl, templateUrl:'detail.html'}).
      //when('/new', {controller:CreateCtrl, templateUrl:'detail.html'}).
      otherwise({redirectTo:'/'});
  });
 
 
function ListCtrl($scope, Nodes, Node) {
  $scope.nodetype = '';
  $scope.nodes = Nodes.get({limit: 25});
  
  $scope.promote = function(node, newValue) {
    var update = new Node();
    update.promote = newValue;
    update.nid = node.nid;
    update.update();
    node.promote = newValue;
  }
  
  $scope.$watch('nodetype', function(newValue, oldValue) {
    if ('' != newValue) {
      $scope.nodes = Nodes.get({limit: 25, type: newValue});
    }
  });
}