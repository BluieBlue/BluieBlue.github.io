function getAQI() {
    if ("geolocation" in navigator) {
        // check if geolocation is supported/enabled on current browser
        navigator.geolocation.getCurrentPosition(
         function success(position) {
           // for when getting location is a success
           const latitude = position.coords.latitude;
           const longitude = position.coords.longitude;
           const TOKEN = '45e9661d7db44c176518a27b4e0a30bb1e3abbd1';
           const url = `https://api.waqi.info/feed/geo:${latitude};${longitude}/?token=${TOKEN}`;
           fetch(url)
              .then(response => response.json())
              .then(data => {
                 if (data.status === 'ok') {
                    const aqi = data.data.aqi;
                    console.log(`The AQI at (${latitude}, ${longitude}) is ${aqi}`);
                    document.getElementById("display").innerHTML = `The AQI is ${aqi} \n`;
                    aqiEvaluate(aqi);
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
  
function aqiEvaluate(aqi) {
  if (aqi < 51) {
    document.getElementById("display2").innerHTML = `The AQI is good. The air quality is satisfactory, and air pollution poses little or no risk.`;
    document.querySelector(".output").style.backgroundColor = "green";
  } else if (aqi < 101) {
    document.getElementById("display2").innerHTML = `The AQI is moderate. Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution.`;
    document.querySelector(".output").style.backgroundColor = "yellow";
  } else if (aqi < 151) {
    document.getElementById("display2").innerHTML = `The AQI is unhealthy for sensitive groups. Members of sensitive groups may experience health effects. The general public is less likely to be affected.`;
    document.querySelector(".output").style.backgroundColor = "orange";
  } else if (aqi < 201) {
    document.getElementById("display2").innerHTML = `The AQI is unhealthy. Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.`;
    document.querySelector(".output").style.backgroundColor = "red";
  } else if (aqi < 301) {
    document.getElementById("display2").innerHTML = `The AQI is very unhealthy. Health alert: The risk of health effects is increased for everyone.`;
    document.querySelector(".output").style.backgroundColor = "purple";
  } else {
    document.getElementById("display2").innerHTML = `The AQI is hazardous. Health warning of emergency conditions: everyone is more likely to be affected.`;
    document.querySelector(".output").style.backgroundColor = "maroon";
  }
}