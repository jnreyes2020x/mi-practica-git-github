function generarSaludo(nombre) {
  if (!nombre) {
    return "Hola, invitado.";
  }

  return `Hola, ${nombre}. Ya estoy trabajando con buenas prácticas 🚀`;
}

const mensaje = generarSaludo("Jhon");
console.log(mensaje);