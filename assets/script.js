var cityFormEl =$("#city-form");
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


cityBtn.on("click", function(event){
  event.preventDefault()
   var city = cityFormEl.val().trim()
   console.log(city)
   let weathApi1 = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=569b83e02c16eca2296eee261eebaa02"
  $.ajax({
    url: weathApi1,
    method: 'GET',
  }).then(function (response) {
  
    
    let lat = response.coord.lat
    let lon = response.coord.lon
    let cityName = response.name

    cityTodayEl.text(cityName)
    
    
  getWeather(lat,lon)

  });
  


})








 function getWeather(lat,lon){
  let weathApi2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=569b83e02c16eca2296eee261eebaa02"
  $.ajax({
    url: weathApi2,
    method: 'GET',
  }).then(function (response) {
    console.log("getWeatherfunc", response);
    

    let temp = response.current.temp;
    let wind = response.current.wind_speed;
    let humidity = response.current.humidity;
    let uv = response.current.uvi;
    let icont = "http://openweathermap.org/img/wn/" + response.daily[0].weather[0].icon + "@2x.png"

    $('#icon-t').attr("src", icont)

    //icon example
    // http://openweathermap.org/img/wn/10d@2x.png

   

    // cityTodayEl.text(cityName)
    tempTEl.text("Temp: " + temp + "°F");
    windTEl.text("Wind: " + wind + " mph");
    humTEl.text("Humidity: " + humidity + "%");
    uvTEl.text("UV Index: " + uv);
    console.log(lat, lon);

  

    for ( i = 1; i < 6; i++) {
      
      let icon1 = "http://openweathermap.org/img/wn/" + response.daily[i].weather[0].icon + "@2x.png"
    $("#temp" + i).text("Temp:" + response.daily[i].temp.max + "°F");
    $("#hum" + i).text("Humidity:" + response.daily[i].humidity + "%");
    $("#wind" + i).text('Wind: "' + response.daily[i].wind_speed + " MPH")
    $('#icon' +i).attr("src", icon1)


    }

    
   
  });
  
 }



  
  


