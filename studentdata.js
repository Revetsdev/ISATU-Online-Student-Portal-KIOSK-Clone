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
    window.location.href = "page.html";
}

if (username === "2023-0134-B" && password == "PACLIBAR-0134") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-1819-B" && password == "PACLIBAR-18190") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-2825-B" && password == "PANES-2825") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "2825.html";
}

if (username === "2023-2828-B" && password == "PEREZ-2828") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-1508-B" && password == "PORRAS-1508") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-2636-B" && password == "SINGSON-2636") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-1290-B" && password == "TICAR-1290") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-1278-B" && password == "TOCONG-1290") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-2022-B" && password == "VILLANUEVA-2022") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2022-0388-B" && password == "VILLANUEVA-0388") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}
//FEMALE STUDENTS

if (username === "2023-1687-B" && password == "DIOSANA-1687") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-0136-B" && password == "HERNANDEZ-0136") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-2108-B" && password == "JOLO-2108") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-0419-B" && password == "LEDESMA-0419") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-2859-B" && password == "MUYCO-2859") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-2678-B" && password == "PALMA-2678") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-1351-B" && password == "PAMA-1351") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-1258-B" && password == "PAMO-1258") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}

if (username === "2023-0747-B" && password == "PANAGUITON-0747") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "page.html";
}



 //Incorrect
 else {
    errorMsg.textContent = "The account you're trying to login to does not exist";
}
}
