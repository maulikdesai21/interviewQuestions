// Implement a Graph
// basic operations:
//  - add vertex (node)
//  - add edge (node -> node)

function GraphNode(val) {
  this.val = val;
  this.edges = {};
}

function Graph() {
  this.vertices = {};
}

// O(1) operation
Graph.prototype.addVertex = function (val) {
  // add vertex only if it does not exist.
  if (!this.vertices[val]) {
    this.vertices[val] = new GraphNode(val);
  }
};

// O(E) operation - edges
Graph.prototype.removeVertex = function (val) {
  if (this.vertices[val]) {
    // once you remove a vertex, you need to remove all edges pointing
    // to the vertex.
    delete this.vertices[val];

    Object.keys(this.vertices).forEach(function (key, index) {
      if (this.vertices[key].edges[val]) {
        delete this.vertices[key].edges[val];
      }
    }.bind(this));
  }
};

// O(1) operation
Graph.prototype.getVertex = function (val) {
  return this.vertices[val];
};

// O(1) operation
Graph.prototype.addEdge = function (start, end) {
  // check to see if vertices exists.
  // if it exists, set the edges and be done.
  if (this.vertices[start] && this.vertices[end]) {

    // check to see if edge exists, if it does, increment it's weight
    if (this.vertices[start].edges[end]) {
      this.vertices[start].edges[end].weight += 1;
    } else {

      // edge does not exist, set weight to 1.
      this.vertices[start].edges[end] = {
        weight: 1
      };
    }
  }
};

// O(1) operation
Graph.prototype.removeEdge = function (start, end) {
  if (this.vertices[start] && this.vertices[end]) {
    if (this.vertices[start].edges[end]) {
      delete this.vertices[start].edges[end];
    }
  }
};

// O(1) operation
Graph.prototype.getEdge = function (start, end) {
  return this.vertices[start].edges[end] || null;
};


Graph.prototype.neighbors = function (val) {
  return this.vertices[val] ? this.vertices[val].edges : null;
};
Graph.prototype.display = function () {
  console.log(JSON.stringify(this.vertices, null, 4))
}

Graph.prototype.bfs = function (startingNode) {
  // create a visited array
  var visited = [];
  for (var i in this.vertices) {
    visited[i] = false;
  }
  // Create an object for queue
  var q = [];
  // add the starting node to the queue

  if (this.vertices[startingNode]) {
    visited[startingNode] = true;

    q.push(this.vertices[startingNode]);
    // loop until queue is element
    while (q.length !== 0) {
      // get the element from the queue
      var getQueueElement = q.shift();
      // passing the current vertex to callback funtion
      console.log(getQueueElement.val);
      // get the adjacent list for current vertex
      var get_List = getQueueElement.edges;
      // loop through the list and add the elemnet to the
      // queue if it is not processed yet
      for (var neighbor in get_List) {
        var neigh = neighbor;

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.push(this.vertices[neigh]);
        }
      }
    }
  }
}

Graph.prototype.dfs = function (startingNode) {
  var visited = [];
  for (var i in this.vertices) {
    visited[i] = false;
  }

  this.DFSUtil(startingNode, visited);
}

Graph.prototype.DFSUtil = function (vert, visited) {
  visited[vert] = true;
  console.log(vert);
  var get_neighbours = this.vertices[vert].edges;

  for (var i in get_neighbours) {
    var get_elem = this.vertices[i].val;
    if (!visited[get_elem])
      this.DFSUtil(get_elem, visited);
  }
}
Graph.prototype.dfsRecursive = function (startingNode) {
  var visited = {};

  for (var i in this.vertices) {
    visited[i] = false;
  }
  // Create an object for queue
  var s = [];
  // add the starting node to the queue
  if (this.vertices[startingNode]) {
    visited[startingNode] = true;
    s.push(this.vertices[startingNode]);
    while (s.length !== 0) {
      // get the element from the queue
      var getQueueElement = s.pop();
      // passing the current vertex to callback funtion
      console.log(getQueueElement.val);
      // get the adjacent list for current vertex
      var get_List = getQueueElement.edges;
      // loop through the list and add the elemnet to the
      // queue if it is not processed yet
      for (var neighbor in get_List) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          s.push(this.vertices[neighbor]);
        }
      }
      if (s.length === 0) {
     
        for (var key in visited) {
          if (!visited[key]) {
            visited[key] = true;       
            s.push(this.vertices[key]);
            console.log('\n========>New Tree:');
            break;
          }
        }
      }
    }

  }
}

function bfs(startingNode) {

  // create a visited array
  var visited = [];
  for (var i = 0; i < this.noOfVertices; i++)
    visited[i] = false;

  // Create an object for queue
  var q = new Queue();

  // add the starting node to the queue
  visited[startingNode] = true;
  q.enqueue(startingNode);

  // loop until queue is element
  while (!q.isEmpty()) {
    // get the element from the queue
    var getQueueElement = q.dequeue();

    // passing the current vertex to callback funtion
    console.log(getQueueElement);

    // get the adjacent list for current vertex
    var get_List = this.AdjList.get(getQueueElement);

    // loop through the list and add the elemnet to the
    // queue if it is not processed yet
    for (var i in get_List) {
      var neigh = get_List[i];

      if (!visited[neigh]) {
        visited[neigh] = true;
        q.enqueue(neigh);
      }
    }
  }
}
// Main DFS method
function dfs(startingNode) {

  var visited = [];
  for (var i = 0; i < this.noOfVertices; i++)
    visited[i] = false;

  this.DFSUtil(startingNode, visited);
}

// Recursive function which process and explore
// all the adjacent vertex of the vertex with which it is called
function DFSUtil(vert, visited) {
  visited[vert] = true;
  console.log(vert);

  var get_neighbours = this.AdjList.get(vert);

  for (var i in get_neighbours) {
    var get_elem = get_neighbours[i];
    if (!visited[get_elem])
      this.DFSUtil(get_elem, visited);
  }
}


var graph = new Graph();

graph.addVertex('Maulik');
graph.addVertex('Mit');
graph.addVertex('Max');
graph.addVertex('Jack');
graph.addVertex('Jhon');
graph.addVertex('Alice');
graph.addEdge('Mit', 'Jhon');
graph.addEdge('Max', 'Jhon');
graph.addEdge('Maulik', 'Mit');
graph.addEdge('Maulik', 'Jack');
graph.addEdge('Jack', 'Mit');
// console.log(graph.getEdge(2, 5));
// console.log(graph.getEdge(6, 7));
// graph.removeVertex(5);
// console.log(graph.getEdge(2, 5));
// console.log(graph.neighbors(6));
// console.log(graph.neighbors(7));
graph.display();

// console.log("BFS\n");
// graph.bfs('Maulik');
// console.log("\nDFS\n");
// graph.dfs('Maulik');
console.log("\nDFSRecursive\n");
graph.dfsRecursive('Maulik');