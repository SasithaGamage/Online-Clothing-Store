function myFunction(){
    var un = document.forms["myForms"]["username"].value;
    var pw = document.forms["myForms"]["pass"].value;
    if(un == "std" && pw == "1234"){
        window.location.href="successPage.html";
    }
    else{
        alert("Invalid username and Password");
    }
}