let posCallback


// Kaldes, når browseren har fundet brugerens position.
// Læser bredde- og længdegrad og sender dem videre til callback-funktionen.
 function success(position) {

         let  myLocation={
        lat:"test",
        long:"test"
    }

    // Kaldes, hvis browseren ikke kan finde brugerens position.
    // Sender i øjeblikket testværdier videre til callback-funktionen.
  myLocation.lat = position.coords.latitude;
    myLocation.long= position.coords.longitude;
// kald callback der henter data
posCallback(myLocation)
  }

  function error() {
  console.log("no pos error");
  
     let  myLocation={
        lat:"test",
        long:"test"
    }

  posCallback(myLocation)
  }



// Beder browseren om brugerens position og gemmer funktionen,
// der skal kaldes, når positionen er fundet eller fejler.
  export function getPosition(callback){

posCallback=callback

  if (!navigator.geolocation) {
   //"Geolocation is not supported by your browser";
  } else {
   
    let myPos=navigator.geolocation.getCurrentPosition(success, error);
  }


}