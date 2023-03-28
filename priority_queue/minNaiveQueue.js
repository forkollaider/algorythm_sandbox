module.exports = class MinSortedQueue {
    constructor() {
        this.queue = [];
    }

    put(value, priority) {
        this.queue.push({value, priority});
    }

    get() {
        if(this.isEmpty()) {
            return null;
        }

        let min = Number.MAX_SAFE_INTEGER,
            minIndex = - 1;

        for(let i = 0; i < this.queue.length; ++i) {
            if(this.queue[i].priority < min) {
                min = this.queue[i].priority;
                minIndex = i;
            }
        }

        return this.queue[minIndex].value;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}
