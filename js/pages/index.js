var selectCity = document.getElementById("ciudades");
var cities = getCitiesFromLocalStorage();

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}
function NoCiudadCargada() {
    if(cities.length == 0){
        confirm("ERROR: No hay ciudades cargadas");
    }
}

for (let ciudad of cities) {
    add(ciudad);
}

function add(ciudad) {
    let Nuevaopcion = document.createElement("option");
    Nuevaopcion.value = ciudad;
    Nuevaopcion.innerHTML = ciudad;
    selectCity.appendChild(Nuevaopcion);
}

async function FuncionAPI() {
    let CiudadIngresada = document.getElementById("ciudades").value;
    let API =`https://api.openweathermap.org/data/2.5/weather?q=${CiudadIngresada}&appid=9a6a18f12cfd008ec940c515b6c1cde2&units=metric&lang=es`;
    try {
        result = await fetch(API);
        jsonObjet = await result.json();
    } 
    catch (error) {
        document.getElementById("card").style.display="none";
    } 
    finally {
        document.getElementById("card").style.display="block";
        document.getElementById("Ciudad").innerHTML = jsonObjet.name;
        document.getElementById("Grados").innerHTML =` Grados: ${jsonObjet.main.temp}º`;
        document.getElementById("SensacionTermica").innerHTML =` Sensacion Termica: ${jsonObjet.main.feels_like}º`;
        document.getElementById("Humedad").innerHTML = `Humedad: ${jsonObjet.main.humidity}%`;
        document.getElementById("Velocidad").innerHTML = `Velocidad del Viento: ${(jsonObjet.wind.speed*3.6).toFixed(1)}Km/h`;
        document.getElementById("Presion").innerHTML = `Presion: ${jsonObjet.main.pressure} P`;
    }
}
