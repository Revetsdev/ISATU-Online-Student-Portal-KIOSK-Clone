// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-msg');   


   // Example validation
  
if (password != "JivkDdZu" && password != "CALIGDONG-0520" && password != "PACLIBAR-0134" && password != "PACLIBAR-18190" && password != "PANES-2825" && password != "PEREZ-2828" && password != "PORRAS-1508" && password != "	SINGSON-2636" && password != "" && password != "TICAR-1290" && password != "TOCONG-1290" && password != "VILLANUEVA-2022" && password != "VILLANUEVA-0388" &&
     password != "ALIVAR-2351" && password != "ALIVAR-2342" && password != "BARCELONA-2736" && password != "DIOSANA-1687" && password != "ESTIPONA-2535" && password != "FERPAS-2676" && password != "" && password != "GALLO-0030" && password != "GUARDIANO-2627" && password != "HERNANDEZ-0136" && password != "JOLO-2108" && password != "LATORGO-0282" && password != "LEDESMA-0419" && password != "LIMJUCO-1982" && password != "LOZA-2692" ) {
    errorMsg.textContent = "The password you enterd is incorrect";
}

//The account you're trying to login to does not exist
else {
    window.location.href = "troll.html";
}

//MALE STUDENTS

if (username === "Admin" && password == "JivkDdZu") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "section.html";
}

if (username === "2023-0520-B" && password == "CALIGDONG-0520") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-0134-B" && password == "PACLIBAR-0134") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-1819-B" && password == "PACLIBAR-18190") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "user" && password == "user123") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "user.html";
}

if (username === "2023-2828-B" && password == "PEREZ-2828") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-1508-B" && password == "PORRAS-1508") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-2636-B" && password == "SINGSON-2636") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-1290-B" && password == "TICAR-1290") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-1278-B" && password == "TOCONG-1290") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-2022-B" && password == "VILLANUEVA-2022") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2022-0388-B" && password == "VILLANUEVA-0388") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
//FEMALE STUDENTS

if (username === "2023-2351-B" && password == "ALIVAR-2351") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-2342-B" && password == "ALIVAR-2342") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-2736-B" && password == "BARCELONA-2736") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

if (username === "2023-1687-B" && password == "DIOSANA-1687") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-2535-B" && password == "ESTIPONA-2535") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-2676-B" && password == "FERPAS-2676") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-0030-B	" && password == "GALLO-0030") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-2627-B" && password == "GUARDIANO-2627") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-0136-B" && password == "HERNANDEZ-0136") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-2108-B" && password == "JOLO-2108") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2003-0282-B" && password == "LATORGO-0282") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-0419-B" && password == "LEDESMA-0419") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-1982-B" && password == "LIMJUCO-1982") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}
if (username === "2023-2692-B" && password == "LOZA-2692") {
    // Redirect to another page (e.g., dashboard.html)
    window.location.href = "locked.html";
}

}
