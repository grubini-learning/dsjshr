

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
  this.quantity = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.graph[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.graph[node] !== undefined;
};

// GRAPH = {1: [3, 4, 2], 2: [1], 3: [1], 4: [1]};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    this.graph[node].forEach(neighbour => {
      this.graph[neighbour].splice(this.graph[neighbour].indexOf(node), 1);
    });
    delete this.graph[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graph[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.graph[fromNode].push(toNode);
    this.graph[toNode].push(fromNode);
  }
};
// GRAPH = {1: [3, 4, 2], 2: [1], 3: [1], 4: [1]};
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.hasEdge(fromNode, toNode)) {
    var fromRelatives = this.graph[fromNode];
    var toRelatives = this.graph[toNode];

    this.graph[fromNode].splice(fromRelatives.indexOf(toNode), 1);
    this.graph[toNode].splice(toRelatives.indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  Object.keys(this.graph).forEach(key => cb(key));
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


