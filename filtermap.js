function veelverdienders (workers, limiet) {
    //filter & map
    return workers
    .filter(function (worker) { return worker.salary >= limiet })
    .map(function (worker) { return worker.name})
}

console.log(veelverdienders(workers, 2000))