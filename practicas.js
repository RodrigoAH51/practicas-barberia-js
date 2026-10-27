/*let servicio = "corte de cabello";
let precio = 250;
let cantidad = 3;

let total = precio * cantidad;
let descuento = 100;

if (total >= 700) {
  let subDescuento = total - descuento;
  console.log("Servicio:" + servicio);
  console.log("Subtotal:" + total);
  console.log("Descuento:" + descuento);
  console.log("Total:" + subDescuento);
} else {
  console.log("Servicio:" + servicio);
  console.log("Total:" + total);
}


let barba ="Delineado de barba";
let costo = 300;
let cantidades = 1
let totales = costo * cantidades;
let promo = 100;

let totalFinal;

if(totales >= 900) {
    totalFinal = totales - promo;
}else{
    totalFinal = totales;
}

console.log("Servicio: " + barba  + "\nCantidad de servicios: " + cantidades  + "\nTotal: " + totalFinal);*/
let servicioCorte = "Corte de cabello";
let precioCorte = 350;
let cantidadCorte = 6;
let servicioBarba = "Recorte de barba";
let precioBarba = 300;
let cantidadBarba = 0;
let servicioFacial = "Limpieza facial";
let precioFacial = 280;
let cantidadFacial = 0;

let subtotalCorte = precioCorte * cantidadCorte;
let descuentoCorte = 200;
let totalCorte;
let descuentoAplicadoCorte;

let subtotalBarba = precioBarba * cantidadBarba;
let descuentoBarba = 100;
let totalBarba;
let descuentoAplicadoBarba;

let subtotalFacial = precioFacial * cantidadFacial;
let descuentoFacial = 150
let totalFacial;
let descuentoAplicadoFacial;



if (subtotalCorte >= 1050){
    totalCorte = subtotalCorte - descuentoCorte;
    descuentoAplicadoCorte = descuentoCorte;
}else{
    totalCorte = subtotalCorte;
    descuentoAplicadoCorte = 0;
}


if(subtotalBarba >= 900){
    totalBarba = subtotalBarba - descuentoBarba;
    descuentoAplicadoBarba = descuentoBarba;
}else{
    totalBarba = subtotalBarba;
    descuentoAplicadoBarba = 0;
}


if(subtotalFacial >= 840){
    totalFacial = subtotalFacial - descuentoFacial;
    descuentoAplicadoFacial = descuentoFacial;
}else{ 
    totalFacial = subtotalFacial;
    descuentoAplicadoFacial = 0;
}

console.log("Servicio: " + servicioCorte + "\nCantidad de servicios: " + cantidadCorte + 
    "\nSubtotal: " + subtotalCorte + "\nDescuento: " + descuentoAplicadoCorte + "\nTotal: " + totalCorte);

    console.log("Servicio: " + servicioBarba + "\nCantidad de servicios: " + cantidadBarba + 
    "\nSubtotal: " + subtotalBarba + "\nDescuento: " + descuentoAplicadoBarba + "\nTotal: " + totalBarba);

    console.log("Servicio: " + servicioFacial + "\nCantidad de servicios: " + cantidadFacial + 
    "\nSubtotal: " + subtotalFacial + "\nDescuento: " + descuentoAplicadoFacial + "\nTotal: " + totalFacial);

    let totalGeneral = totalCorte + totalBarba + totalFacial;

    console.log("Total general de servicios: " + totalGeneral);
    
    let totalBruto = subtotalBarba + subtotalCorte + subtotalFacial;
    if(totalBruto > 2000){
        console.log("Para nosotros es importante que este satisfecho, tramita tu membresía y recibe descuentos y beneficios")
    }else{
        console.log("Gracias por su preferencia")
    }