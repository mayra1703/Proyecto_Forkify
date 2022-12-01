"use strict";
const cardRecipe = (receta) => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card";
    const img = document.createElement("img");
    img.src = receta.image_url;
    const title = document.createElement("p");
    title.className = "title";
    title.innerHTML = receta.title;
    const author = document.createElement("p");
    author.className = "author";
    author.textContent = `Hecho por: ${receta.publisher}`;

    cardContainer.append(img);
    cardContainer.append(title);
    cardContainer.append(author);
    return cardContainer;
};

export default cardRecipe;    


const buscador = document.getElementById('buscador');

const buscar = document.createElement('input');
buscar.id = "busqueda";
buscar.style = "width: auto; height: 3rem; border-radius: 1rem; padding: 1rem; font-weight: 400; border: solid #ee974bc2";
buscar.placeholder = "example: Onion...";

const boton = document.createElement('button');
boton.textContent = "Buscar Recetas";
boton.onclick = mostrarReceta;
boton.style = "font-size: 1.2rem; width: 10%; height: 2.5rem; margin: 2rem; border: none; border-radius: 1.2rem; background-color:#ee974bc2; font-weight: bolder;";

const limpiar = document.createElement('button');
limpiar.textContent = "Limpiar";
limpiar.id = "Limpiar";
limpiar.onclick = limpiarCampo;
limpiar.style = "font-size: 1.2rem; width: 10%; height: 2.5rem; border: none; border-radius: 1.2rem; background-color:#ee974bc2; font-weight: bolder;";

buscador.append(buscar);
buscador.append(boton);
buscador.append(limpiar);