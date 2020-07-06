function valad() {
  var emailID = document.getElementById('email').value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");

        if (atpos < 1 || ( dotpos - atpos < 2 )) {
           alert("Please enter correct email ID")
           document.getElementById('email').focus() ;
           return false;
        }


        if (document.getElementById("fname").value == "") {
           alert( "Please provide your Name!" );
           document.getElementById("fname").focus() ;
           return false;
            }

            else if (document.getElementById("message").value == "") {
        alert( "Please provide your Message!" );
        document.getElementById("message").focus() ;
        return false;
     }else {
     $('#messag').modal({show: true})
     }
}
