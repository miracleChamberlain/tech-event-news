function valad () {
  if( document.getElementById("email").value == "" ) {
            alert( "Please provide your Email!" );
            document.getElementById("email").focus() ;

            return false;

         }else if (document.getElementById("fname").value == "") {
           alert( "Please provide your Name!" );
           document.getElementById("fname").focus() ;
           return false;



      }else if (document.getElementById("message").value == "") {
        alert( "Please provide your Message!" );
        document.getElementById("message").focus() ;
        return false;
     }else {
     $('#messag').modal({show: true})
     }
}
