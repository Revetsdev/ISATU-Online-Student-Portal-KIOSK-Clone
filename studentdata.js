// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');   


   // Example validation
 if (username === "Admin" && password == "JivkDdZu") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "list.html";
} 

//MALE STUDENTS

if (username === "2023-0520-B" && password == "CALIGDONG-0520") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "0520.html";
}

if (username === "2023-0134-B" && password == "PACLIBAR-0134") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "0134.html";
}

if (username === "2023-1819-B" && password == "PACLIBAR-18190") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "1819.html";
}

if (username === "user && password == "user123") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "user.html";
}

if (username === "2023-2828-B" && password == "PEREZ-2828") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "list.html";
}

if (username === "2023-1508-B" && password == "PORRAS-1508") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "1508.html";
}

if (username === "2023-2636-B" && password == "SINGSON-2636") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "2636.html";
}

if (username === "2023-1290-B" && password == "TICAR-1290") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "1290.html";
}

if (username === "2023-1278-B" && password == "TOCONG-1290") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "list.html";
}

if (username === "2023-2022-B" && password == "VILLANUEVA-2022") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "2022.html";
}

if (username === "2022-0388-B" && password == "VILLANUEVA-0388") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "0388.html";
}
//FEMALE STUDENTS

if (username === "" && password == "") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "list.html";
}



 //Incorrect
 else {
    errorMsg.textContent = "The account you're trying to login to does not exist";
}
}
