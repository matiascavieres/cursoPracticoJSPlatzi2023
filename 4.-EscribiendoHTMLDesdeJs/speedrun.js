const suscripciones = {
    basico : "Con esta cuenta me puedo mandar un tussi basico",
    expert : "Con esta cuenta me puedo mandar un tussi experto",
    expertduo : "Con esta cuenta me puedo mandar un tussi experto doble XD",
    
}

function mostrarTipoDeSuscripcion(suscripcion){
    suscripciones[suscripcion] ? console.log(suscripciones[suscripcion]) : console.log("Chupa la tula XD")


    // if (suscripciones[suscripcion]){
    //     console.log(suscripciones[suscripcion])
    // }
}

mostrarTipoDeSuscripcion("basico");
mostrarTipoDeSuscripcion("expert");
mostrarTipoDeSuscripcion("expertduo");