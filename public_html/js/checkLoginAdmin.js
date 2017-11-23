function iniciar() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    if ( username === "admin" && pass === "admin"){
        window.location = "menuAdmin.html"; // Redirecting to other page.
        return false;
    }else{
        alert("Acceso denegado");
       return false;
    }
}