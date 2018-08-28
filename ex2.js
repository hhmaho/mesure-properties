workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "steven", alive: true, salary: 1999 },
    { name: "tom", alive: true, salary: 10000 },
    { name: "rob", alive: false, salary: 100 },
    { name: "stanley", alive: true, salary: 10000 },
  ]
  
  function highestEarner(workers) {
      if (workers.length == 0){
          return
      }

      //var topSalary = workers[0].salary
      //var topEarners = 

      var heighestPaidWorkerSoFar = workers[0]

    // geef de naam van de persoon die het meest verdient

    // eerst allemaal afgaan
    //for (init; cond; next) {}

    for (var i = 1; i < workers.length; i = i + 1) {
        var worker = workers[i]

        if (worker.salary > heighestPaidWorkerSoFar.salary){
            heighestPaidWorkerSoFar = worker
        }


        console.log(i, worker)
    }
    return heighestPaidWorkerSoFar.name
  }

console.log(highestEarner(workers))