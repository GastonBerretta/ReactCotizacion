export function calcularTotal(cantidad,plazo){
    //Cantidad
    //0-1000 = 25%
    //1001-5000 = 20%
    //5001-10000 = 15%
    //+10000 = 100%

    let totalCantidades;
    if(cantidad <= 1000){
        totalCantidades = cantidad * 0.25
        
    }else if(cantidad > 1000 && cantidad < 5000){
        totalCantidades = cantidad * 0.20
    }else if(cantidad > 5000 && cantidad < 10000){
        totalCantidades = cantidad * 0.15
    }else if(cantidad > 10000) {
        totalCantidades = cantidad * 0.10
    }
    //Calcular Plazo
    //3 = 5%
    //6 = 10%
    //12 = 15%
    //18 = 20%

    let totalPlazo = 0;

    switch (plazo) {
      case 3:
        totalPlazo = cantidad * 0.05;
        break;
      case 6:
        totalPlazo = cantidad * 0.10;
        break;
      case 12:
        totalPlazo = cantidad * 0.15;
        break;
      case 18:
        totalPlazo = cantidad * 0.20;
        break;
       default:
       break 
    }
    return totalPlazo + totalCantidades + cantidad
}