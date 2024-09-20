$(document).ready(function () {
    const data = JSON.parse(localStorage.getItem("personaje-data"));

    // Mi función para mostrar los personajes
    let conteinerGeneral = $("<div></div>").addClass("conteiner-general");

    // Primer conteiner
    let conteinerImagen = $("<div></div>").addClass("conteiner-imagen-dts");

    //Contenedor
    let nameContainer = $("<div></div>").addClass("name-container");
    // Nombre y ki del personaje
    let name = $("<h1>data.name</h1>").text(
        data.name.toUpperCase()).addClass("personajes-name");
    let ki = $(`<p>${data.ki} ki</p>`);
    
    nameContainer.append(name, ki);

    //Mostrar imagen 
    let conteinerImg = $("<div></div>").addClass("conteiner-img-first");
    let img = $("<img />").attr("src", data.image).addClass("img-personajes");
    conteinerImg.append(img);
    conteinerImagen.append(nameContainer, conteinerImg);
    
    //Segundo conteiner
    let conteinerInformacion = $("<div></div>").addClass("conteiner-informacion");

    let infoDatos = $("<div></div>").addClass("info-datos");
    //Mostrar race, gender, planet
    let maxKi = $(`<p>MaxKi: ${data.maxKi}</p>`).addClass("maxki");
    let race = $(`<p>Raza: ${data.race.toUpperCase()}</p>`).addClass("race");
    let gender = $(`<p> Género: ${data.gender.toUpperCase()}</p>`).addClass("gender");
    let description = $("<p></p>").text(data.description).addClass("description");
    infoDatos.append(maxKi, race, gender, description);
    //Obtenemos los elementos del segundo conteiner
    conteinerInformacion.append(infoDatos);
    
    // Mi función para mostrar el planet del personaje

    let planetCard = $("<div></div>").addClass("planet-card");
    // Primer contenedorplanet
    let imgConteiner = $("<div></div>").addClass("img-conteiner-planet");
    //Info
    let namePlaneta = $("<p></p>").text(data.originPlanet.name.toUpperCase());
    let planetImg = $("<img />").attr("src", data.originPlanet.image);
    
    imgConteiner.append(namePlaneta, planetImg);

    //Segundo contenedor
    let infoConteiner = $("<div></div>").addClass("info-conteiner-planet");
    let isDestroyed = $(`<p>Is Destoyed? ${data.originPlanet.isDestroyed}</p>`).addClass("subtitulo");
    let planetDescription = $("<p></p>").text(data.originPlanet.description);
    
    infoConteiner.append(isDestroyed, planetDescription);
    planetCard.append(imgConteiner, infoConteiner);

    
    
    // Mi función para mostrar el transformaciones del personaje
    let transforCard = $("<div></div>").addClass("transfor-card");

    //Info
    for (let transformation of data.transformations) {
        // Crear un contenedor individual para cada personaje
        let charCard = $("<div></div>").addClass("char-card");

        //Informacion de las trasformaciones del personaje
        let nameTrasfor = $(`<p></p>`).text(transformation.name.toUpperCase()).addClass("name-transfor");
        let imgCon = $("<div></div>").addClass("img-con");
        let imgTrasfor = $(`<img />`).attr("src", transformation.image).addClass("img-transfor");
        imgCon.append(imgTrasfor);
        let kiTrasfor = $(`<p></p>`).text(transformation.ki).addClass("ki-trasfor");
        //Añadiendo elementos al transforCard 
        charCard.append(nameTrasfor, imgCon, kiTrasfor);
        transforCard.append(charCard);
    }


    //Agregamos los elementos al card
    conteinerGeneral.append(conteinerImagen, conteinerInformacion);
    

    //Agregamos la card al contendor 
    $("#personajes-container").append(conteinerGeneral);
    $("#planet-container").append(planetCard);
    $("#transformaciones").append(transforCard);

});

