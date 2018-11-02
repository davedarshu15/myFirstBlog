$(document).ready(function () {
  $("#submitbutton").click(function () {
    // alert("weather submitted");
     var city = $("#city").val();
     var unit = $("#dropdown").val();
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=" + unit +"&APPID=15c817f6969690be33e35ddf4ced6223",
      success: function (result) {
        $("#output").html("<p><b>Weather: </b>"+ result.weather[0].main +"<\p>" + "<p><b> Max Tempereture: </b>"+ result.main.temp_max +"&deg;F<\p>" + "<p><b> Min Tempereture: </b>"+ result.main.temp_min +"&deg;F<\p>" + "<p><b> Pressure: </b>"+ result.main.pressure + "<\p>" + "<p><b> Description : </b> <img src='http://openweathermap.org/img/w/" + result.weather[0].icon + ".png'>" + result.weather[0].description  + "<\p>" +  "<p><strong> Humidity </strong>: " + result.main.humidity + "%</p>" + "<\p>" + "<p><strong> Wind </strong>: " + result.wind.deg + "&deg;F</p>" );
        // $("#div1").html(result);
        // console.log(result);
      }
    });
  });
});

// function outputResult(result){
//   return JSON.stringify();
// }
function initMap() {
  var options = {
    zoom: 10,
    center: { lat: 47.6062, lng: -122.332 }
  }
  var map = new
    google.maps.Map(document.getElementById('map'), options);
  /*
  var marker= new google.maps.Marker({
    position:{lat:47.5509,lng:-122.0616},
    map:map,
    icon:''
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h3>This is where I work</h3>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map,marker);
  });
 */

  var marker = [
    {
      coordinates: { lat: 47.5509, lng: -122.0616 },
      content: '<h5>This is where I work</h5>',
      iconImage:'firstIcon.png'
    },
    {
      coordinates: { lat: 47.6101, lng: -122.3421 },
      content: '<h5>This is my coffee shop</h5>',
      iconImage:'coffee.png'
    },
    {
      coordinates: { lat: 47.6159, lng: -122.2021 },
      content: '<h5>This is my fav restaurant</h5>',
      iconImage:'cheeseCake.png'
    }
  ];

  for (var i = 0; i < marker.length; i++){
    addMarker(marker[i]);
  }


  function addMarker(global) {
    var marker = new google.maps.Marker({
      position: global.coordinates,
      map: map,
      //  icon:global.iconImage
    });

    if (global.iconImage) {
      marker.setIcon(global.iconImage);
    }

    if (global.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: global.content
      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }
  }
}