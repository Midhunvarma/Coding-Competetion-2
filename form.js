
 var email=document.getElementById("email");
 var password=document.getElementById("password");
 
  function validate(){
      if(email.value==""||password.value==""){
          alert("Fields cannot be empty");
          return false;
      }
     
      else{
        var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/
        if(regexp.test(email.value))
         {
        //  alert("Successfully Registered");
         return true;
         }
         else{
            alert("invalid email address");
            return false;  
        }
        }

    }
 

 