function validate(){
    if(document.write.myForm.Name.value == ""){
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false();
    }
    if(document.write.myForm.Email.value == ""){
        alert("Please provide your Email!");
        document.myForm.Email.focus();
        return false();
    }
    if(document.write.myForm.Zip.value == "" || isNaN(document.write.myForm.Zip.value) || document.write.myForm.Zip.value !=5){
        alert("Please provide your Zip!");
        document.myForm.Zip.focus();
        return false();
    }
    if(document.write.myForm.Country.value == "-1"){
        alert("Please provide your Country !");
        document.myForm.Email.focus();
        return false();
    }
    return true;
}