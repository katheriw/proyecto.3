$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("planet-data"));
    
    let planetCard = $("<div></div>").addClass("planet-card");

    // Contenedor img y info 
    let contendorPrimero = $("<div><div/>");
    // Mostrar nombre del planeta y su id
    let nameContainer = $("<div></div>").addClass("name-container");
    let planetName = $("<h1></h1>").text(data.name.toUpperCase()).addClass("planet-name");
    let planetId = $("<p></p>").text(`#${data.id}`).addClass("id");
    nameContainer.append(planetName, planetId);

    // Mostrar imagen del planeta
    let planetImg = $("<img />").attr("src", data.image).addClass("planet-img");
    let conteinerImg = $("<div><div/>").addClass("conteiner-img");
    conteinerImg.append(planetImg);

    // Contenedor de la información principal
    let infoCard = $("<div></div>").addClass("info-card");
    // Mostrar isDestroyed y description
    let isDestroyed = $(`<p>Is destroyed? ${data.isDestroyed}</p>`).addClass("is-destroyed");
    let description = $(`<p>Description: ${data.description}</p>`).addClass("description");
    
    infoCard.append(isDestroyed, description);
    contendorPrimero.append(nameContainer, conteinerImg, infoCard);
    
    let charactersContainer = $("<div></div>").addClass("characters-container");

    for (let character of data.characters) {
        // Crear un contenedor individual para cada personaje
        let charCard = $("<div></div>").addClass("char-card");
        // Información de los personajes del planeta
        let charName = $(`<p></p>`).text(character.name).addClass("name-char");

        let imgCon = $("<div></div>").addClass("img-con");
        let charImg = $(`<img />`).attr("src", character.image).addClass("img-char");
        imgCon.append(charImg);
        let charMaxKi = $(`<p>Maxki: ${character.maxKi}</p>`).addClass("maxKi-char");
        let charRace = $(`<p>Raza: ${character.race}</p>`).addClass("race");
        let charGender = $(`<p>Género: ${character.gender}</p>`).addClass("gender");
        let charAffiliation = $(`<p>Affiliation: ${character.affiliation}</p>`).addClass("affiliation");
        let charDescription = $(`<p></p>`).text(character.description).addClass("description");
        
        // Añadir todos los elementos al contenedor de la carta
        charCard.append(charName, imgCon, charMaxKi, charRace, charGender, charAffiliation, charDescription);
        // Añadir la carta al contenedor principal
        charactersContainer.append(charCard);
    }

    // Agregar los elementos al card
    planetCard.append(contendorPrimero, charactersContainer);
    // Agregar la card al contenedor
    $("#primer-conteiner").append(planetCard);
    $("#planetas-container").append(charactersContainer);
});
