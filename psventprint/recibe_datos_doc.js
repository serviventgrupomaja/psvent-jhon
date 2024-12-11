/* Buscando los valores de la URL con la propiedad  window.location.search de JavaScript */
const paramURL = window.location.search
/* console.log(paramURL); */

//Creamos una instancia de URLSearchParams
const parametrosURL = new URLSearchParams(paramURL);

/*
Para acceder a los parámetros de la URL crearemos un objeto de tipo URLSearchParams y 
usaremos el método get() para obtener cada uno de los valores
*/

  


//-----------DATOS EMPRESA----------------------
const logo = parametrosURL.get('logo');
//const logotipo = logo.replace('|', '&');

const empresa = parametrosURL.get('empresa');
const sucursal = parametrosURL.get('sucursal');
const telefono = parametrosURL.get('telefono');
const nit = parametrosURL.get('nit');
const direccion = parametrosURL.get('direccion');
/* Mostrando parametros en mi HTML */
if (logo == "1") {
    document.querySelector("#logo").src = "logo1.png";
} else if ( logo == "2" ) {
    document.querySelector("#logo").src = "logo2.png";
} else if ( logo == "3" ) {
    document.querySelector("#logo").src = "logo3.png";
}

document.querySelector("#empresa").innerHTML = (empresa);
document.querySelector("#sucursal").innerHTML = (sucursal);
document.querySelector("#telefono").innerHTML = (telefono);
document.querySelector("#nit").innerHTML = (nit);
document.querySelector("#direccion").innerHTML = (direccion);

//-----------DATOS CLIENTES----------------------
const codigoCliente = parametrosURL.get('codigoCliente');
const nombreCliente = parametrosURL.get('nombreCliente');
const telefonoCliente = parametrosURL.get('telefonoCliente');
const puntosCliente = parametrosURL.get('puntosCliente');
const puntosTotalCliente = parametrosURL.get('puntosTotalCliente');
/* Mostrando parametros en mi HTML */
document.querySelector("#codigoCliente").innerHTML = (codigoCliente);
document.querySelector("#nombreCliente").innerHTML = (nombreCliente);
document.querySelector("#telefonoCliente").innerHTML = (telefonoCliente);
document.querySelector("#puntosCliente").innerHTML = (puntosCliente);
document.querySelector("#puntosTotalCliente").innerHTML = (puntosTotalCliente);

//-----------DATOS REGISTRO----------------------
const numeroRegistro = parametrosURL.get('numeroRegistro');
const tituloDoc = parametrosURL.get('numeroRegistro');
const fechaRegistro = parametrosURL.get('fechaRegistro');
const usuario = parametrosURL.get('usuario');
const telefonoUsuario = parametrosURL.get('telefonoUsuario');
/* Mostrando parametros en mi HTML */
document.querySelector("#tituloDoc").innerHTML = (tituloDoc);
document.querySelector("#numeroRegistro").innerHTML = (numeroRegistro);
document.querySelector("#fechaRegistro").innerHTML = (fechaRegistro);
document.querySelector("#usuario").innerHTML = (usuario);
document.querySelector("#telefonoUsuario").innerHTML = (telefonoUsuario);

//-----------DATOS TABLA PRODUCTOS----------------------
const canProducto = parametrosURL.get('canProducto');
const codigoProducto = parametrosURL.get('codigoProducto');
const Producto = parametrosURL.get('Producto');
const garantia = parametrosURL.get('garantia');
const precioUnitario = parametrosURL.get('precioUnitario');
const precioTotal = parametrosURL.get('precioTotal');


/*FUNCION PARA UNIR ARRAYS*/
function arrayProductos(datos1, datos2, datos3, datos4, datos5, datos6) {
    let contenido = [datos1, datos2, datos3, datos4, datos5, datos6];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}
//Convertimos en array cantidad, item, precio
const cantidadProducto = canProducto.split(" , ");
const codigoP = codigoProducto.split(" , ");
const nombreProducto = Producto.split(" , ");
const garantiaP = garantia.split(" , ");
const precioU = precioUnitario.split(" , ");
const precioT = precioTotal.split(" , ");

//CREAR NUEVOS ARRAY FORMATEADO A MONEDAS
const precioUN = [];
const precioTN = [];

precioU.forEach((pU) => {    
    pU = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(pU)
    precioUN.push(pU);
});

precioT.forEach((pU) => {    
    pU = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(pU)
    precioTN.push(pU);
});

//VARIABLE CON EL NUEVO ARRAY DE TODOS LOS ARRAY
const ventas = arrayProductos(codigoP, nombreProducto, garantiaP, cantidadProducto, precioUN, precioTN);

/* Mostrando parametros en mi HTML */
/* URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ */
const tabla = document.getElementById("tabla_producto");
const cuerpoTabla = document.createElement('tbody');

ventas.forEach(p => {
    let fila = document.createElement('tr');
    
    fila.innerHTML += `<td class="tdCodigoP">${p[0]}</td>`
    fila.innerHTML += `<td class="tdProducto">${p[1]}</td>`    
    fila.innerHTML += `<td class="tdSerial">${p[2]}</td>`
    fila.innerHTML += `<td class="tdCan">${p[3]}</td>`
    fila.innerHTML += `<td class="tdPrecioU">${p[4]}</td>`
    fila.innerHTML += `<td class="tdTotal">${p[5]}</td>`

    cuerpoTabla.appendChild(fila);
});
tabla.appendChild(cuerpoTabla);

//-----------DATOS PRECIOS CAJA----------------------
const subTotal = parametrosURL.get('subTotal');
const otroDescuento = parametrosURL.get('otroDescuento');

const total = parametrosURL.get('total');
// formateamos a moneda Bs.
const formatSubT = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(subTotal);
const formatOtroDes = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(otroDescuento);

const formatTotal = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(total);

// Mostrando parametros en mi HTML
document.querySelector("#subTotal").innerHTML = (formatSubT);
document.querySelector("#otroDescuento").innerHTML = (formatOtroDes);

document.querySelector("#total").innerHTML = (formatTotal);

//-----------DATOS PAGOS----------------------
const pagado = parametrosURL.get('pagado');
const pago = parametrosURL.get('pago');
const tipoPago = parametrosURL.get('tipoPago');
const fechaPago = parametrosURL.get('fechaPago');
/*FUNCION PARA UNIR ARRAYS*/
function arrayPagos(datos1, datos2, datos3, datos4) {
    let contenido = [datos1, datos2, datos3, datos4];

    return contenido.reduce(
        (a, v) => (v.forEach((e, i) => a[i].push(e)), a),
        Array.from({
            length: Math.max(...contenido.map(d => d.length))
        }).map(d => [])
    );
}
//Convertimos en array cantidad, item, precio
const pagadoP = pagado.split(" , ");
const pagoP = pago.split(" , ");
const tipoPagoP = tipoPago.split(" , ");
const fechaPagoP = fechaPago.split(" , ");

const tablaPagos = arrayPagos(pagadoP, pagoP, tipoPagoP, fechaPagoP);
console.log(tablaPagos)
// Mostrando parametros en mi HTML
/* URL YOUTUBE https://www.youtube.com/watch?v=dDy2krKujCY
 https://www.youtube.com/watch?v=DMGiOhH8jcQ */
const tablaP = document.getElementById("tabla_pagos");
const bodyPagos = document.createElement('tbody');

tablaPagos.forEach(p => {
    let fila = document.createElement('tr');

    fila.innerHTML += `<td class="pagado">${p[0]}</td>`
    fila.innerHTML += `<td>${p[1]}</td>`
    fila.innerHTML += `<td>${p[2]}</td>`
    fila.innerHTML += `<td>${p[3]}</td>`

    bodyPagos.appendChild(fila);
});
tablaP.appendChild(bodyPagos);

//-----------DATOS FALTANTE----------------------
const faltante = parametrosURL.get('faltante');
//Formatea a moneda
const formatFaltante = new Intl.NumberFormat('es-BO',{ style: 'currency', currency: 'BOB' }).format(faltante);
// Mostrando parametros en mi HTML
document.querySelector("#faltante").innerHTML = (formatFaltante);

//-----------DATOS ESTADO----------------------
const estadoR = parametrosURL.get('estado');
// Mostrando parametros en mi HTML
document.querySelector("#estadoRegistro").innerHTML = (estadoR);

//-----------DATOS FIRMAS----------------------
const firmaNombreCliente = parametrosURL.get('nombreCliente');
const firmaNombrePropietario = parametrosURL.get('firmaNombrePropietario');
// Mostrando parametros en mi HTML
document.querySelector("#firmaNombreCliente").innerHTML = (firmaNombreCliente);
document.querySelector("#firmaNombrePropietario").innerHTML = (firmaNombrePropietario)

//-----------DATOS TENGA EN CUENTA----------------------
const tengaEnCuenta = parametrosURL.get('tengaEnCuenta');
// Mostrando parametros en mi HTML
document.querySelector("#tengaEnCuenta").innerHTML = (tengaEnCuenta);

