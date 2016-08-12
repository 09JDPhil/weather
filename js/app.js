var coord = $.getJSON("http://ipinfo.io/json", gotCity);
var isC = false;

function gotCity(pos) {
  var city = pos.city;
  var region = pos.region;
  var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
  var id = '&appid=57068b706a014c374167fe94d3c2abc8';
  var F = '&units=imperial';
  var C = '&units=metric';
  if(!isC){
  $.getJSON(api + city + region + id + F, gotData);
  }else{
     $.getJSON(api + city + region + id + C, gotData);
  }

  function gotData(data) {
    var temp = Math.floor(data.main.temp);
    var icon = "<img src= http://openweathermap.org/img/w/" + data.weather[0].icon + ".png>";
    $('.location').html(data.name + ", " + data.sys.country);
    if(!isC){
    $(".temperature").html(icon + temp +" F"); //"<button class='btn btn-secondary' id='temp'>F</button>");
    } else {
      $(".temperature").html(icon + temp +" C");
    }
    if (data.weather[0].main === "Clear") {
      document.body.style.backgroundImage = 'url(http://i.imgur.com/a0uoL5c.jpg)'
    } else if (data.weather[0].main === "Clouds") {
      document.body.style.backgroundImage = 'url(https://static.pexels.com/photos/768/sky-clouds-cloudy-ray-of-sunshine.jpg)';
    } else if(data.weather[0].main==="Rain"){
      document.body.style.backgroundImage= 'url(https://i.ytimg.com/vi/lasWefVUCsI/maxresdefault.jpg)';
    } else if(data.weather[0].main==="Snow"){
      document.body.style.backgroundImage='url(https://az616578.vo.msecnd.net/files/responsive/cover/main/desktop/2016/01/09/635879112155223228-319755513_635861833670816810507191518_6670-perfect-snow-1920x1080-nature-wallpaper.jpg)';
    } else{
      document.body.style.backgroundImage='url(http://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/smap-weather.jpg?itok=cqnvjmB-)';
    }
  }
}
$("#temp").on("click", function() {
  if (!isC) {
    isC = true;console.log(isC);
    $.getJSON("http://ipinfo.io/json", gotCity);
  } else {
    isC = false;
    $.getJSON("http://ipinfo.io/json", gotCity);
  }
})
