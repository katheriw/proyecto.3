function getDragonBall(id) {
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
        // Función para mostrar los personajes

        // Card principal
        let personajesCard = $("<div></div>").addClass("personajes-card");

        // Primera card secundaria
        let firstContainer = $("<div></div>").addClass("first-container");

        let nameContainer = $("<div></div>").addClass("name-container");
        // Mostrar nombre y el ki del personaje
        let name = $(`<a href="detalles-per.html" id="personaje-${id}"></a>`).text(
            data.name.toUpperCase()
        ).addClass("personajes-name");
        let ki = $(`<p>${data.ki} ki</p>`);
        
        nameContainer.append(name, ki);

        //Mostrar imagen 
        let conteinerImg = $("<div></div>").addClass("container-img");
        let img = $("<img />").attr("src", data.image).addClass("img-card");
        conteinerImg.append(img);

        firstContainer.append(nameContainer, conteinerImg);
        
        // Segunda card secundaria
        let infoCard = $("<div></div>").addClass("info-card");

        // ki, race, gender, originPlanet.name
        //Mostrar race, gender, planet
        let race = $(`<p>RAZA: ${data.race.toUpperCase()}</p>`).addClass("race-info");
        let gender = $(`<p>GÉNERO: ${data.gender.toUpperCase()}</p>`).addClass("gender-info");
        let planet = $(`<p>PLANETA: ${data.originPlanet.name.toUpperCase()}</p>`).addClass("planet-info");

        infoCard.append(race, gender, planet);

        //Agregamos los elementos al card
        personajesCard.append(firstContainer, infoCard);
        //Agregamos la card al contendor 
        $("#personajes-container").append(personajesCard);

    });
}

//Evento del clik en los nombres de los personajes
//Delegación de eventos para elementos 

$(document).on("click", ".name-container", function (e) {
    console.log(e.target.id);
    const id = e.target.id.split("-")[1];
  
    $.get(`https://dragonball-api.com/api/characters/${id}`, function (data) {
      // GUARDAMOS TODA LA DATA DEL POKEMON EN EL LOCALSTORAGE
      localStorage.setItem("personaje-data", JSON.stringify(data));
      console.log(e.target.id);
    });
});

$(document).ready(function () {
    for (let i = 1; i <= 58; i++) {
        getDragonBall(i);
    }
});
