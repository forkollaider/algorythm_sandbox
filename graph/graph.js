module.exports = class Graph {
    constructor(nodesCount, edges) {
        this.nodesCount = nodesCount;
        this.edges = [];
        this.nodes = [];
        for(let node = 1; node <= nodesCount; ++node) {
            this.nodes[node] = node;
        }
        edges.forEach(([from, to, weight]) =>  {
            if(this.edges[from]) {
                this.edges[from].push({dest: to, weight});
            } else {
                this.edges[from] = [{dest: to, weight}]
            }
            if(this.edges[to]) {
                this.edges[to].push({dest: from, weight});
            } else {
                this.edges[to] = [{dest: from, weight}]
            }
        })
    }
    dfs(node, currentComponent, [visited, components]) {
        visited[node] = true;
        if(components[currentComponent]) {
            components[currentComponent].push(node);
        } else {
            components[currentComponent] = [node];
        }

        if(this.edges[node]) {
            for(let i = 0; i < this.edges[node].length; ++i) {
                if (!visited[this.edges[node][i].dest]) {
                    this.dfs(this.edges[node][i].dest, currentComponent, [visited, components]);
                }
            }
        }
    }
}
