let listaAmigos = [];

function nuevoAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre que sea válido.");
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert(
      "Ese nombre ya está en la lista, ingresa uno diferente o ponle un distintivo!! ."
    );
    return;
  }

  listaAmigos.push(nombre);
  actualizar();
  input.value = "";
}
function actualizar() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    ul.appendChild(li);
  });
}

function sorteo() {
  if (listaAmigos.length === 0) {
    alert("Agrega al menos un nombre para el sorteo.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSecreto = listaAmigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> ${amigoSecreto} es el amigo secreto! !!! <3</li>`;
}
