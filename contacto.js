// Crear una lista de contactos con datos predefinidos
let listaDeContactos = ["Juan Perez", "Maria Lopez", "Pedro Sanchez"];

// Función para añadir un nuevo contacto a la lista
function agregarContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
}

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreApellido) {
  const index = listaDeContactos.indexOf(nombreApellido);
  if (index !== -1) {
    listaDeContactos.splice(index, 1);
  } else {
    console.log("El contacto no existe en la lista");
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  if (listaDeContactos.length === 0) {
    console.log("La lista de contactos está vacía.");
  } else {
    console.log("Lista de contactos:");
    listaDeContactos.forEach((contacto) => {
      console.log(contacto);
    });
  }
}

// Ejemplos de uso
imprimirContactos();  // Mostrar la lista de contactos inicial

agregarContacto("Laura Gomez");  // Añadir un nuevo contacto
imprimirContactos();  // Mostrar la lista de contactos actualizada

borrarContacto("Maria Lopez");  // Borrar un contacto existente
imprimirContactos();  // Mostrar la lista de contactos actualizada
