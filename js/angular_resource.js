angular.module('node', ['ngResource']).factory('Node', function($resource) {
	var Node = $resource('/node/:nid.json', {}, {
	  update: { method: 'PUT' }
	});
	
	Node.prototype.update = function(node) {
	  return Node.update({nid: this.nid}, angular.extend({}, this, {nid: undefined}), node);
	}
	
	return Node;
});

angular.module('nodes', ['ngResource']).factory('Nodes', function($resource) {
  var Node = $resource('/node.json', {}, {
  });
  
  return Node;
 });