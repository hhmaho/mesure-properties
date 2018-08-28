function validatePassword(password, retype) {
    //check dat het password niet leeg is
    // dus check dat het passwoord lang genoeg is (10 karakters)
    // ("",("")) is niet meer nodig

    if (password.length < 10){
        return false
    }

    //check dat de twee paswoorden hetzelfde zijn

    if(password != retype){
        return false
    }


    return true

}
console.log(validatePassword("",""))
console.log(validatePassword("test",""))
console.log(validatePassword("test", "test"))
console.log(validatePassword("testtesttesttest","testtesttesttest"))