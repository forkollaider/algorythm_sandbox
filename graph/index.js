const Graph = require('./graph');


const n = 4,
    edges = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]]
const graph = new Graph(6, edges);

const visited = [];
const components = [];
let currentComponent = 1;

for(let i = 1; i < graph.nodes.length; ++i) {
    if(!visited[i]) {
        graph.dfs(i, currentComponent, [visited, components]);
        currentComponent++;
    }
}

let min = Number.MAX_SAFE_INTEGER;

for(const [from, _, weight] of edges) {
    if(components[1].includes(from) && weight < min) {
        min = weight;
    }
}

console.log(min);
