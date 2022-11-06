function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

//localStorage.removeItem("CITIES");
 
function addNewCityToLocalStorage(newCity) {
    let Amarillo = document.getElementById("colorAmarillo");
    let Rojo = document.getElementById("Emailerror");
    let Verde = document.getElementById("colorVerde");
    let cities = getCitiesFromLocalStorage();
    let city_repetida = false;

    for(let i = 0; i < cities.length; i++){
        if(newCity == cities[i]){
            city_repetida = true;
        }
    }

    if(newCity.length == 0){
        Rojo.style.display = "block";
        setInterval(function(){
            Rojo.style.display = "none";
        }, 2000);
    } else if(city_repetida == true){
        Amarillo.style.display = "block";
        setInterval(function(){
            Amarillo.style.display = "none";
        }, 2000);
    } else {
        Verde.style.display = "block";
        setInterval(function(){
            Verde.style.display = "none";
        }, 2000);
        cities.push(newCity);
        localStorage.setItem("CITIES", JSON.stringify(cities));
    }

}
function AgregarCiudad() {
    let ciudad = document.getElementById("ciudad").value;
    addNewCityToLocalStorage(ciudad);
} 