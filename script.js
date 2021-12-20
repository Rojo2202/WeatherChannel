let input = document.querySelector("input")
let button = document.querySelector("button")
let ciudad
function cargarCiudad() {
    document.querySelector(".container").style.visibility = "visible"
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916",function(data){
        document.querySelector("#ciudad").textContent = data.name
        document.querySelector("#temperatura").innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>°C</sup>`
        document.querySelector("#wicon").setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        document.querySelector("#descripcion").textContent = data.weather[0].description
    })
    .fail(function() {
        alert("Ciudad no encontrada");
      }) 
}

button.addEventListener('click', function(){
    if(input.value.length !== 0 ) {
        ciudad = input.value
        cargarCiudad()
        input.value = ""
    }
    else{
        alert("Cargue un valor")
    }
})