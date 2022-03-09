function validar() {
    //Validando el nombre
    var nombre = document.frmDetalle.txtNombre.value;
    if (document.frmDetalle.txtNombre.value.length == 0) {
        alert("Tiene que ingresar un nombre");
        document.frmDetalle.txtNombre.focus();
    } else {
        document.frmDetalle.rNombre.value = nombre;
    }

    //Validando la edad
    var edad = document.frmDetalle.txtEdad.value;

    if (edad == '') {
        alert("Tiene que ingresar una edad")
    } else {
        if (edad > 0 && edad < 18) {
            document.frmDetalle.rEdad.value = "Usted es menor de edad";
            document.frmDetalle.rEdad.style = "background:#ff8000";
        } else {
            document.frmDetalle.rEdad.value = "Usted es mayor de edad";
            document.frmDetalle.rEdad.style = "border: 5px solid #ff8000";
        }
    }

    //Validando las aficiones:
    if (document.frmDetalle.aficiones.selectedIndex == 0) {
        alert("Tiene que elegir una afición");
        document.frmDetalle.rAficion.validar = '';
        document.frmDetalle.aficiones.focus();
    } else {
        var aficiones = document.frmDetalle.aficiones;
        var seleccion = aficiones.options[aficiones.selectedIndex].text;
        document.frmDetalle.rAficion.value = seleccion;
    }
}