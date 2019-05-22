navigator.geolocation.getCurrentPosition(function(position) {
    var sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);
   	var sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
    document.getElementById("latitude").innerHTML += position.coords.latitude;
    document.getElementById("longitude").innerHTML += position.coords.longitude;
});
