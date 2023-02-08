const tiposDeSuscripciones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los curso de Platzi durante un ano",
  expertduo: "Tu y alguien mas pueden tomar todos los curso de Platzi durante un ano",
}

function conseguirTipoSuscripcion(suscripcion){
  if (tiposDeSuscripciones[suscripcion]){
    console.warn(tiposDeSuscripciones[suscripcion]);
  }
}

conseguirTipoSuscripcion("free");
conseguirTipoSuscripcion("basic");
conseguirTipoSuscripcion("expert");
conseguirTipoSuscripcion("expertduo");
x