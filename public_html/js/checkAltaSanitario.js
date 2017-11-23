window.addEventListener("load", iniciar, false);
function iniciar() {
    nombre = document.getElementById("nombre");
    local = document.getElementById("localidad");
    numcol = document.getElementById("numcol");
    tipoSanitario = document.getElementById("tipoSanitario");
    nombre.addEventListener("input", validacion, false);
    numcol.addEventListener("input", validacion, false);
    tipoSanitario.addEventListener("input", validacion, false);
    validacion();
}
function validacion() {
    if (nombre.value === '') {
        nombre.setCustomValidity('Añade el nombre');
        nombre.style.background = '#FFDDDD';
    } else {
        nombre.setCustomValidity('');
        nombre.style.background = '#FFFFFF';
    }
    
    if (local.value === '') {
        local.setCustomValidity('Añade el prefijo del número de colegiado');
        local.style.background = '#FFDDDD';
    } else {
        local.setCustomValidity('');
        local.style.background = '#FFFFFF';
    }
    
    if (numcol.value === '') {
        numcol.setCustomValidity('Añade el número de colegiado');
        numcol.style.background = '#FFDDDD';
    } else {
        numcol.setCustomValidity('');
        numcol.style.background = '#FFFFFF';
    }
    
    if (tipoSanitario.value === '') {
        tipoSanitario.setCustomValidity('Elige un sanitario');
        tipoSanitario.style.background = '#FFDDDD';
    } else {
        tipoSanitario.setCustomValidity('');
        tipoSanitario.style.background = '#FFFFFF';
    }
}

