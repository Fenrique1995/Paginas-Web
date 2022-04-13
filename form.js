function verify() {
    let age = parseInt(document.getElementById("age").value);
    if (age < 18) {
        alert("You can't register, you are underage");
    }else if (age > 65) {
        alert("You can't register. We are afraid you exceed the age limit. To participate you mustpresent a medical certificate no older than 3 months.");
    }else{
        alert("your age is acceptable")
    }
}