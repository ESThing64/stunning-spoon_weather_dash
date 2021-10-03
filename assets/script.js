
// let city = "";
// let weathApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=569b83e02c16eca2296eee261eebaa02"
// let weatherApiUnits = "https://api.openweathermap.org/data/2.5/find?q=" + city + "&units=imperial&appid=569b83e02c16eca2296eee261eebaa02"

// let lonLat = "";
// var cityFormEl = $('#city-form')
var cityFormEl = $("#city-form");
let cityBtn = $('#city-btn');
let cityTodayEl = $('#city-today');
let tempTEl = $('#temp-t');
let windTEl = $('#wind-t');
let humTEl = $('#hum-t');
let uvTEl = $('#uv-t');
// This is how to get data fomr the weather api but does this allow me to get 5 day??
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=569b83e02c16eca2296eee261eebaa02


//add imperial-- &units=imperial
//https://api.openweathermap.org/data/2.5/weather?q=function(n){var%20r,e,i,t=this[0];return%20arguments.length?(i=m(n),this.each(function(e){var%20t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t=%22%22:%22number%22==typeof%20t?t+=%22%22:Array.isArray(t)&&(t=S.map(t,function(e){return%20null==e?%22%22:e+%22%22})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&%22set%22in%20r&&void%200!==r.set(this,t,%22value%22)||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&%22get%22in%20r&&void%200!==(e=r.get(t,%22value%22))?e:%22string%22==typeof(e=t.value)?e.replace(xt,%22%22):null==e?%22%22:e:void%200}&appid=569b83e02c16eca2296eee261eebaa02


cityBtn.on("click", function (event) {
  event.preventDefault()
  var city = cityFormEl.val().trim()
  console.log(city)
  // this one gets most of the data, is it only missing UV?
  let weathApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=569b83e02c16eca2296eee261eebaa02"
  $.ajax({
    url: weathApi,
    method: 'GET',
  }).then(function (response) {
    console.log("the frist funconion", response);


    //this function needs to just get lat and lon and name


    let lat = response.coord.lat
    let lon = response.coord.lon
    let cityName = response.name

    cityTodayEl.text(cityName)


    getWeather(lat, lon)

  });



})


//what do i need to dO?
// get the uv and 5 day forcast
//get weather icon to display
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// website says this will get the for cast for 7 days.



//on call is the uv, but can one call get forcat too? it says it can. So I can use
// the one call for 5day forcast and UV YES I CAN! UV AND 5day

// $.ajax({
// url: "https://api.openweathermap.org/data/2.5/onecall?lat=29.7633&lon=-95.3633&units=imperial&appid=569b83e02c16eca2296eee261eebaa02",
// method: 'GET',
// }).then(function (response) {
//   console.log("onecall", response)


//   // let cityName = response.name;
//   //   let lat = response.coord.lat
//   //   let lon = response.coord.lon
//     let temp = response.current.temp;
//     let wind = response.current.wind_speed;
//     let humidity = response.current.humidity;
//     let uv = response.current.uvi;

//   //   cityTodayEl.text(cityName)
//     tempTEl.text("Temp: " + temp)
//     windTEl.text("Wind: " + wind)
//     humTEl.text("Humidity: " + humidity)
//     uvTEl.text("UV Index: " + uv)
//   //   console.log(lat, lon)


//  });


// i need to run one api JUST to get the lat and lon THEN i can use the onecall 
//to get everything else.

function getWeather(lat, lon) {
  let weathApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=569b83e02c16eca2296eee261eebaa02"
  $.ajax({
    url: weathApi,
    method: 'GET',
  }).then(function (response) {
    console.log("the frist funconion", response);




    let cityName = response.name;
    let lat = response.coord.lat
    let lon = response.coord.lon
    let temp = response.main.temp;
    let wind = response.wind.speed;
    let humidity = response.main.humidity;
    let uv = "";

    cityTodayEl.text(cityName)
    tempTEl.text("Temp: " + temp)
    windTEl.text("Wind: " + wind)
    humTEl.text("Humidity: " + humidity)
    uvTEl.text("UV Index: " + uv)
    console.log(lat, lon)

  });



}

//USE THIS USE THIS USE THIS INSIDE THE SECOND FUNCTION





