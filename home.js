function calculateAQI() {
    alert("AQI is some value. Working on it.");
}

function getGeolocation() {
    if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
         function success(position) {
           // for when getting location is a success
           alert('Successful. You are situated at ' + position.coords.latitude + ", " + position.coords.longitude);
         },
        function error(error_message) {
          // for when getting location results in an error
          alert('An error has occurred while retrieving location', error_message);
          return [];
        }  
      );
      } else {
        // geolocation is not supported
        // get your location some other way
        console.log('geolocation is not enabled on this browser')
        return [];
      }
}

function getAQI() {
    if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
         function success(position) {
           // for when getting location is a success
           const lat = position.coords.latitude;
           const lon = position.coords.longitude;
           const url = `https://api.waqi.info/feed/geo:${lat};${lon}/?token=45e9661d7db44c176518a27b4e0a30bb1e3abbd1`;
           let aqi = 0;
           fetch(url).then(response => response.json()).then(data => alert(`The AQI is currently ${data.aqi}`));
         },
        function error(error_message) {
          // for when getting location results in an error
          alert('An error has occurred while retrieving location', error_message);
        }  
      );
      } else {
        // geolocation is not supported
        // get your location some other way
        console.log('geolocation is not enabled on this browser')
      }
}

function getAQI2() {
    if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
         function success(position) {
           // for when getting location is a success
           const latitude = position.coords.latitude;
           const longitude = position.coords.longitude;
           const TOKEN = '45e9661d7db44c176518a27b4e0a30bb1e3abbd1'; // Replace with your actual WAQI API token
           const url = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${TOKEN}`;
           fetch(url)
              .then(response => response.json())
              .then(data => {
                 if (data.status === 'ok') {
                    const aqi = data.data.aqi;
                    console.log(`The AQI at (${latitude}, ${longitude}) is ${aqi}`);
                    document.getElementById("display").innerHTML = `The AQI is ${aqi}`;
                    // Do something with the AQI value
                 } else {
                    console.error('Unable to retrieve AQI data');
                    // Handle the error appropriately
                 }
              })
              .catch(error => {
                 console.error('Error:', error);
                 // Handle the error appropriately
              });
         },
         function error(error_message) {
          // for when getting location results in an error
          alert('An error has occurred while retrieving location', error_message);
         }  
      );
      } else {
        // geolocation is not supported
        // get your location some other way
        console.log('geolocation is not enabled on this browser')
      }
  }
  
function getAQI3() {
  const url = "https://api.techniknews.net/ipgeo/";
  let aqi = 0;
  fetch(url)
     .then((response) => response.json())
     .then((json) => console.log(json));
}