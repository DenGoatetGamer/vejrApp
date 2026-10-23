import {getPosition} from "./geolocation.js"


// Modtager brugerens position, bygger en URL til Open-Meteo
// og henter vejrdata for koordinaterne.
async function geoDataCallback(myPos){
    console.log(myPos);
    const myURL=`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,precipitation_sum,precipitation_probability_max&timezone=Europe%2FBerlin`
    let myData=await GetWeatherData(myURL)
    console.log(myData);
    
}


// Starter hentningen ved at bede om brugerens position.
export function getData(){
getPosition(geoDataCallback)
}

// Henter vejrdata fra den angivne URL og konverterer svaret til JSON.
async function GetWeatherData(URL) {
  return fetch(URL)
    .then(response => response.json())
    .then(data => {
      // data.message is the image url
     return data
    })
    .catch(error => {
      console.error("No data today:", error)
      myDogElement.textContent = "Could not fetch"
    })

}