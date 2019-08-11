function validateTextbox() {
    var user = document.getElementById("nameid").value;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;

    if ( user == "") {
        document.getElementById("nameid").innerHTML = " ** please fill the name ";

    }
   /* else if (name.length < 5) {
        alert("name must be atleast 5 character long.");
        return false;
    }*/

   if ( address == null || address== "") {
        alert ("address can't be blank.");
        return false;
    }
    else if (address.length <10){
        alert ("address must be atleast 15 character long")
    }

   if ( age == null || age== "") {
        alert ("age can't be blank.");
        return false;
    }

    if ( phone == null || phone== "") {
        alert ("phone numeber can't be blank.");
        return false;
    }
    else if (phone.length < 11 ) {
        alert("phone number must be atleast 11 character")
    }

    if ( email == null || email== "") {
        alert ("email can't be blank.");
        return false;
    }
}