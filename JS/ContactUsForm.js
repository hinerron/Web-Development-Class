function validateItems() {
    var name = document.forms["contactUs"]["nameInput"].value;
    var email = document.forms["contactUs"]["emailInput"].value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    if (email == "") {
        alert("email must be filled out");
    }
    
    
    else {
    alert("Thank you!  Your inquiry has been submitted")
}




}