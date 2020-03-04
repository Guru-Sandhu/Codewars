function queueTime(customers, n) {
    let queue = []

    for (let i = 0 ; i < n; i++) {
        queue.push(0)
    }
    for (let num of customers) {
        queue[0] += num;
        queue.sort((a,b) => {
            return a-b;
        })
    }

    return Math.max(...queue)
}