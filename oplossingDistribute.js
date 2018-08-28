workers = [
    { name: "paul", alive: true, salary: 5000 },
    { name: "steven", alive: false, salary: 3000 },
    { name: "tom", alive: true, salary: 10000 },
    { name: "rob", alive: false, salary: 100 },
    { name: "stanley", alive: true, salary: 10000 },
   ]
   
   function distribute(workers) {
    // verdeel het salaris van de overleden werknemers
    // over de levenden
   
    var totaalTeVerdelen = 0
    var totaalAantalLevenden = 0
   
    for (var i = 0; i < workers.length; i = i + 1) {
      var worker = workers[i]
   
      if (worker.alive) {
        totaalAantalLevenden = totaalAantalLevenden + 1
      } else {
        totaalTeVerdelen = totaalTeVerdelen + worker.salary
      }
    }
   
    var aandeelPerPersoon = totaalTeVerdelen / totaalAantalLevenden
   
    for (var i = 0; i < workers.length; i = i + 1) {
      var worker = workers[i]
   
      if (worker.alive) {
        worker.salary = worker.salary + aandeelPerPersoon
      } else {
        worker.salary = 0
      }
    }
   }
   
   distribute(workers)
   console.log(workers)