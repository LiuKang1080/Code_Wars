// Regex: validate PIN code

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/


function validatePIN(pin) {
    // declare variables
    let regex_4 = /\b(?<!-)^\d{4}$(?!\.)\b/;
    let regex_6 = /\b(?<!-)^\d{6}$(?!\.)\b/;

    // check to see if the pin matches the 4 or 6 regex
    if ((pin.match(regex_4) !== null) || (pin.match(regex_6) !== null)) {
        return true;
    } else {
        return false;
    }
}


console.log(validatePIN("1.34"));
