const apikey="b0f8dc6d2c58bc6e1cb5cbe79e038922";
const   url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// var data;

const cityName= document.querySelector(".search input");
const search=document.querySelector(".search button")
const mausamPic=document.querySelector(".weather-icon")
async function Weather(cityName)
{
    const response = await fetch(url+cityName+'&appid='+apikey);
    data=await response.json();
    console.log(data);
 
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
    
    // why document.getElementsByClassName( this) is not wokring.
    // document.getElementsByClassName("humidity").innerHTML=data.main.humidity;

    if(data.weather[0].description=="clear sky")
    {
        mausamPic.src="sun_9361662.png"
    }
    else if(data.weather[0].description=="few clouds" || data.weather[0].description=="overcast clouds")
    {
        mausamPic.src="clouds.png"
    }
    else if(data.weather[0].description=="moderate rain")
    {
        mausamPic.src="rain.png"
    }



}

search.addEventListener("click",()=>{
    Weather(cityName.value)
})
;

