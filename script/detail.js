var decode = function ( text ) {
    text = text.replace(/\+/g, " ");
    text = text.replace(/%[a-fA-F0-9]{2}/g, 
        function ( text ) {
            return String.fromCharCode( "0x" + text.substr(1,2));
        }
    );
    return text;
}
    
var display_data = function () {
    var query = location.search.replace("?", "");

    var inputAddress;
    var inputCity;
    var inputPostCode;
    var inputProvince;
    var inputProduct1;
    var inputProduct2;
    var inputProduct3;
    var product1Price = 0;
    var product2Price = 0;
    var product3Price = 0;
    var inputDelivery;
    var shippingCharges = 0;
    var subTotal = 0;
    var rate = 0;
    var taxes = 0;
    var total = 0;

    if ( query == "" ) return;
    
    var fields = query.split("&");
    
    if ( fields.length == 0 ) {
        document.write("<p>No data was submitted.</p>");
    } else {
        
        var field_parts;
        console.log("query:" + query);
/*
        for ( var i in fields ) {
            
            document.write("<tr>");
            field_parts = fields[i].split("=");
            field_parts[0] = decode( field_parts[0] );
            field_parts[1] = decode( field_parts[1] );

            switch (field_parts[0]){

                case 'name':                    
                    $('#_name').html(field_parts[1]);
                    break;
                case 'email':
                    $('#_email').html(field_parts[1]);
                    break;
                case 'phone':
                    $('#_phone').html(field_parts[1]);
                    break;
                case 'address':
                    inputAddress = field_parts[1];
                    break;
                case 'city':
                    inputCity = field_parts[1];
                    break;
                case 'province':
                    inputProvince = field_parts[1];
                    break;
                case 'postcode':
                    inputPostCode = field_parts[1];                    
                    break;
                case 'maker':
                    $('#_maker').html(field_parts[1]);
                    break;
                case 'model':
                    $('#_model').html(field_parts[1]);
                    break;
                case 'year':
                    $('#_year').html(field_parts[1]);
                    break;
            }
            $('#_address').html(inputAddress+",<br>"+inputCity+",<br>"+inputProvince+","+inputPostCode);
            
        }
      */ 
     
        document.getElementById("_name").innerHTML = localStorage.getItem("sellername");
        document.getElementById("_address").innerHTML = localStorage.getItem("address");
        document.getElementById("_city").innerHTML = localStorage.getItem("city");
        document.getElementById("_province").innerHTML = localStorage.getItem("province");
        document.getElementById("_postalcode").innerHTML = localStorage.getItem("postalcode");
        document.getElementById("_phone").innerHTML = localStorage.getItem("phone");
        document.getElementById("_email").innerHTML = localStorage.getItem("email");
        document.getElementById("_maker").innerHTML = localStorage.getItem("maker");
        document.getElementById("_model").innerHTML = localStorage.getItem("model");
        document.getElementById("_year").innerHTML = localStorage.getItem("year");
        var jdpower = "http://www.jdpower.com/cars/" + localStorage.getItem("maker") + "/" 
                    + localStorage.getItem("model") + "/" + localStorage.getItem("year");
        document.getElementById("_jdpower").setAttribute("href",jdpower);
        document.getElementById("jdpower").innerHTML = jdpower;
    }
}
