function prime(n) {
    
    // voor elk getal tussen 1 en N
    for (var i=2; i<n; i++) {
        console.log("i: ",i)
    if (n % i == 0) {
        console.log("deelbaar")
        return false;
      } else{
          console.log("niet deelbaar")
      }
    }
    // indien N deelbaar is door dit getal, is het priem
    

    // anders is het priem
    console.log("geen enkele deler")
    return true
}

// zo gebruiken we onze functie
console.log(prime(5)) 
console.log("-----------------------")
console.log(prime(9))
