var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

var dataBase = null;

function iniciar(){
    //Abre la conexion a la BD o la crea si no lo ha hecho anteriormente
    var dataBase = indexedDB.open("osaVitoXX",1);

    dataBase.onupgradeneeded = function(e){
        // The database did not previously exist, so create object stores and indexes.
        var db = dataBase.result;
        var pacientes = db.createObjectStore("pacientes", {keyPath: "tis"});
        var sanitarios = db.createObjectStore("sanitarios", {keyPath: "numcolegiado"});
        var citas = db.createObjectStore("citas", {keyPath: "id", autoIncrement : true});
        var pacienteSanitario = db.createObjectStore("pacienteSanitario", {keyPath: "id", autoIncrement : true});
        
        var fechaNacIndex = pacientes.createIndex("by_fechaNac", "fechaNac");
        var sexoIndex = pacientes.createIndex("by_sexo", "sexo");
        var nombreIndex = pacientes.createIndex("by_nombre", "nombre");
        var fotoIndex = pacientes.createIndex("by_foto", "foto");
        var movilIndex = pacientes.createIndex("by_movil", "movil", {unique: true});
        
        var tipoIndex = sanitarios.createIndex("by_tipo", "tipo");
        var nombreIndex = sanitarios.createIndex("by_nombre", "nombre");
        var horaIniIndex = sanitarios.createIndex("by_horaIni", "horaIni");
        var horaFinIndex = sanitarios.createIndex("by_horaFin", "horaFin");
    };
    
    //Carga correcta
    dataBase.onsuccess = function (e) {
        alert('Database loaded');
    };

    //Carga fallida
    dataBase.onerror = function (e) {
        alert('Error loading database');
    };
}

function add(){
    var active = dataBase.result;
    
    var data = active.transaction(["sanitarios"], "readwrite");
    
}

