window.addEventListener("load", iniciar, false);
function iniciar() {
    nombre = document.getElementById("nombre");
    tis = document.getElementById("TIS");
    fecha = document.getElementById("fecha");
    sexo = document.getElementById("sexo");
    foto = document.getElementById("foto");
    nombre.addEventListener("input", validacion, false);
    tis.addEventListener("input", validacion, false);
    fecha.addEventListener("input", validacion, false);
    sexo.addEventListener("input", validacion, false);
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
    
    if (tis.value === '') {
        tis.setCustomValidity('Añade el prefijo del número de colegiado');
        tis.style.background = '#FFDDDD';
    } else {
        tis.setCustomValidity('');
        tis.style.background = '#FFFFFF';
    }
    
    if (fecha.value === '') {
        fecha.setCustomValidity('Añade el número de colegiado');
        fecha.style.background = '#FFDDDD';
    } else {
        fecha.setCustomValidity('');
        fecha.style.background = '#FFFFFF';
    }
    
    if (sexo.value === '') {
        sexo.setCustomValidity('Elige un sanitario');
        sexo.style.background = '#FFDDDD';
    } else {
        sexo.setCustomValidity('');
        sexo.style.background = '#FFFFFF';
    }
}




