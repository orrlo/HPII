function compra(bebidas, frutas, abarrotes){
    var pagoTotal = bebidas + frutas + abarrotes;
    return pagoTotal;
}

document.write('Las compras de un dia de Supermercado')
document.write('<br>')
document.write(Math.round(compra('80 + 15 + 60')));