document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let fullName        = document.getElementById("fullName").value.trim();
    let email           = document.getElementById("email").value.trim();
    let phone           = document.getElementById("phone").value.trim();
    let course          = document.getElementById("course").value;
    let password        = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message         = document.getElementById("message");

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;
    
    document.getElementById("nameError").innerText    = "";
    document.getElementById("emailError").innerText   = "";
    document.getElementById("phoneError").innerText   = "";
    document.getElementById("courseError").innerText  = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("confirmError").innerText = "";
    message.innerText = "";

    let isValid = true;

    if (fullName === "") {
        document.getElementById("nameError").innerText = "Full Name is required!";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required!";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Invalid email format!";
        isValid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone Number is required!";
        isValid = false;
    } else if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").innerText = "Phone must be exactly 10 digits!";
        isValid = false;
    }

    if (course === "") {
        document.getElementById("courseError").innerText = "Please select a course!";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required!";
        isValid = false;
    }

    if (confirmPassword === "") {
        document.getElementById("confirmError").innerText = "Please confirm your password!";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmError").innerText = "Passwords do not match!";
        isValid = false;
    }

    if (!isValid) return;

    let studentData = { fullName, email, phone, course };
    localStorage.setItem("studentData", JSON.stringify(studentData));

    message.style.color = "green";
    message.innerText = "Registration Successful! Welcome, " + fullName + "!";
    this.reset();
    console.log("Student Data:", studentData);
});