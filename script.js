const apiKey = "8951ed2d0e2eb83c0d96d41f3dd6301b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


let cityInput = document.querySelector(".search input");
let button = document.querySelector(".search button");
let temperature = document.querySelector("h1");
let cityElement = document.querySelector("h2");
let windElement = document.querySelector(".wind");
let humidityElement = document.querySelector(".humidity");
let weatherCon = document.querySelector("#weather-con h4 ");
let mainImg = document.querySelector(".weather-img");
let mainDiv = document.querySelector(".weather");
 
button.addEventListener('click', function () {
    checkWeather(cityInput.value.toLowerCase());
});

async function checkWeather(city) {
  fetch(apiUrl + city + `&appid=${apiKey}`).then((data)=>{
return data.json()
        }).then((data)=>{

            temperature.innerHTML = Math.round(data.main.temp) + "°C";
            if(data){

                cityElement.innerHTML = data.name;
                windElement.innerHTML = data.wind.speed + "km/h";
                humidityElement.innerHTML = data.main.humidity;


                if (data.weather[0].main == 'Clouds') {
                    mainImg.src = '../Images/Clouds.png';
                    weatherCon.innerText = "Clouds";
                } else if (data.weather[0].main == 'Clear') {
                    mainImg.src = '../Images/Clear.png';
                    weatherCon.innerText = "Clear";
                } else if (data.weather[0].main == 'Rain') {
                    mainImg.src = '../Images/Rain.png';
                    weatherCon.innerText = "Rain";
                } else if (data.weather[0].main == 'Haze') {
                    mainImg.src = '../Images/Drizzle.png';
                    weatherCon.innerText = "Drizzle";
                } else if (data.weather[0].main == 'Snow') {
                    mainImg.src = '../Images/Snow.png';
                    weatherCon.innerText = "Snow";
                } else if (data.weather[0].main == 'Mist') {
                    mainImg.src = '../Images/Mist.png';
                    weatherCon.innerText = "Mist";
                }
            }
    console.log(data.weather[0].main);
        })
        // const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
       
        //     const data = await response.json();

           
    //    mainImg.scr = `../Images/${data.weather[0].main}.png`
    
//     if (data.weather[0].main == 'Haze') {
//     mainDiv.innerHTML = '<div> <img src="../Images/drizzle.png"  /> </div>'
//     weatherCon.innerHTML = "Clouds";
// }
   

   
}








// const apiKey = "8951ed2d0e2eb83c0d96d41f3dd6301b"
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
// let cityname = document.querySelector(".search input")
// let button = document.querySelector(".search button")


// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
//     let data = await response.json();
//     console.log(data);

//     document.querySelector("h1").innerHTML= Math.round(data.main.temp) + "°C"
//     document.querySelector("h2").innerHTML= data.name
//     document.querySelector(".wind").innerHTML= data.wind.speed +"km/h"
//     document.querySelector(".humidity").innerHTML = data.main.humidity
    
//     button.addEventListener('click', function () {
//         checkWeather(cityname.value);
//     })
// }





