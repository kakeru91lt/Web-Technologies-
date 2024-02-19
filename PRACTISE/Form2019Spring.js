function validate(){
    if(document.loginform.Uname.value ==""){
        alert("Invalid username");
        document.loginform.Uname.focus();
        return false;
    }
    if(document.loginform.Password.value ==""){
        alert("Password cannot be empty");
        document.loginform.Password.focus();
        return false;
    }
    if(document.loginform.Password.value.length<8){
        alert("Password should have at least 8 characters");
        document.loginform.Password.focus();
        return false;
    }
    return true;
}