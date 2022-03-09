function validar(){
    var nombre = document.frmDetalle.txtNombre.value;
    if(document.frmDetalle.txtNombre.value.length == 0){
        alert("Tienes que ingresar un nombre");
        document.frmDetalle.txtNombre.focus();
    } else{
        document.frmDetalle.rNombre.value = nombre;
    }

    var edad = document.frmDetalle.txtEdad.value;
    if(edad == ''){
        alert("Tienes que ingresar edad");
    } else{
        if (edad > 0 && edad < 18){
            document.frmDetalle.rEdad.value = "Usted es menor de edad";
            document.frmDetalle.rEdad.style = "background: #ff8000";
        } else{
            document.frmDetalle.rEdad.value = "Usted es mayor de edad";
            document.frmDetalle.rEdad.style = "border: 5px solid #ff8000";
        }
    }
}