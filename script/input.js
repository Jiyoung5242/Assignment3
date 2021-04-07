function inputChk() {
    alert("1111"+document.getElementById("name").value + "typeof(Storage) = " + typeof(Storage));

    if (typeof(Storage) !== "undefined") {
        alert("2222");
        localStorage.setItem("sellername", document.getElementById("name").value);
        localStorage.setItem("address", document.getElementById("address").value);
        localStorage.setItem("city", document.getElementById("city").value);
        localStorage.setItem("province", document.getElementById("province").value);
        localStorage.setItem("postalcode", document.getElementById("postalcode").value);
        localStorage.setItem("phone", document.getElementById("phone").value);
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("maker", document.getElementById("maker").value);
        localStorage.setItem("model", document.getElementById("model").value);
        localStorage.setItem("year", document.getElementById("year").value);
        
    } else {
        alert("3333");
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }

    let name = $('#name').val();
    let email = $('#email').val();
    let phone = $('#phone').val();
    let address = $('#address').val();
    let city = $('#city').val();
    let province = $('#province').val();
    let postcode = $('#postalcode').val();

    let msg = "";
    var output;a


    //Check name
    if(!validateLength(name)){
        msg += "Name is not valid.<br>"
    }
    //Check email
    if(!validateEmail(email)){
        msg += "Email is not valid<br>";
    }
    //Check phone
    if(!validatePhone(phone)){
        msg += "Phone number is not valid<br>";
    }
    //Check Address
    if(!validateLength(address)){
        msg += "Address is not valid<br>";
    }
    //Check City
    if(!validateLength(city)){
        msg += "City is not valid<br>";
    }
    //Province
    if(!validateLength(province)){
        msg += "Province is not valid<br>";
    }
   
    //post code
    if(!validatePostcode(postcode)){
        msg += "Post Code is not valid<br>";
    }
    
    //At least one product should be bought 
    if(product1 == "" && product2 == "" && product3 == ""){
        msg += "Must input at least one product<br>";
    }
    //product validate
    //number
    if(!validateNumber(product1) || !validateNumber(product2) || !validateNumber(product3)){
        msg += "product should be a number<br>";
    }

    if(msg != ""){
        output = `Error: ${msg} `;
        $('#errorMsg').html(output);
        return false;
    }


    return true;
}
//validate Name, Address
//more than 3 letters.
function validateLength(inputString) {

    if(inputString.length < 3) {
    return false;
    }
    return true;

}
//validation Email
//e.g. aaa@aaa.aaa
function validateEmail(email) {

    var emailExp = new RegExp(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/i);
    if(!emailExp.test(email))
    return false;

    return true;

}
//Validate Phone Number
//e.g. 999-999-9999
function validatePhone(phone) {

    var phoneExp = new RegExp(/\b[1-9]\d{2}[\-,\s]\d{3}[\-,\s]\d{4}\b/i);
    if(!phoneExp.test(phone))
    return false;

    return true;

}
//Validate Postcode
//e.g. N2T 2S6
function validatePostcode(postcode){
    var postcodeExp = new RegExp(/\b[A-Za-z][0-9][A-Za-z]\s[0-9][A-Za-z][0-9]\b/i);
    if(!postcodeExp.test(postcode))
    return false;

    return true;

}
//Validate product1,2,3
//product input boxes should be a number
function validateNumber(product){
    if(product != "" && isNaN(product)){
        return false;
    }
    return true;
}
