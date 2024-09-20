function getPlanets(id) {
    $.get(`https://dragonball-api.com/api/planets/${id}`, function (data) {
        // Función para mostrar los personajes

        // Card principal
        let planetCard = $("<div></div>").addClass("planet-card");

        // Primera card secundaria
        let firstContainerPla = $("<div></div>").addClass("first-container-planet");

        let nameContainer = $("<div></div>").addClass("name-container");
        // Mostrar nombre del planeta y su id
        let name = $(`<a href="detalles-pla.html" id="planeta-${id}"></a>`).text(
            data.name.toUpperCase()
        ).addClass("planet-name");
        
        nameContainer.append(name);

        //Mostrar imagen del planeta
        let conteinerImgPla = $("<div></div>").addClass("container-img-planet");
        let img = $("<img />").attr("src", data.image).addClass("img-planet");
        conteinerImgPla.append(img);

        firstContainerPla.append(nameContainer, conteinerImgPla);

        //Segunda card secundaria
        let infoCard = $("<div></div>").addClass("info-card");
        //Mostrar isDestroyed
        let isDestroyed = $(`<p>Is destroyed? ${data.isDestroyed}</p>`).addClass("isdestroyed");
        infoCard.append(isDestroyed);

        //Agregamos los elementos al card
        planetCard.append(firstContainerPla, infoCard);
        //Agregamos la card al contendor 
        $("#planetas-container").append(planetCard);

    });
}

//Evento del clik en los nombres de los personajes
//Delegación de eventos para elementos 

$(document).on("click", ".name-container", function (e) {
    console.log(e.target.id);
    const id = e.target.id.split("-")[1];
  
    $.get(`https://dragonball-api.com/api/planets/${id}`, function (data) {
      // GUARDAMOS TODA LA DATA DEL POKEMON EN EL LOCALSTORAGE
      localStorage.setItem("planet-data", JSON.stringify(data));
      console.log(e.target.id);
    });
});

$(document).ready(function () {
    for (let i = 1; i <= 20; i++) {
        getPlanets(i);
    }
});

