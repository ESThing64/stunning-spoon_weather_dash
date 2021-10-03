
let city;
let weathApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=569b83e02c16eca2296eee261eebaa02"
let lonLat = "";
// var cityFormEl = $('#city-form')
var cityFormEl = document.getElementById("city-form")
let cityBtn = $('#city-btn')
let cityTodayEl = $('#city-today') 
let tempTEl = $('#temp-t') 
let windTEl = $('#wind-t') 
let humTEl = $('#hum-t') 
let uvTEl = $('#uv-t') 
// This is how to get data fomr the weather api but does this allow me to get 5 day??
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=569b83e02c16eca2296eee261eebaa02



//https://api.openweathermap.org/data/2.5/weather?q=function(n){var%20r,e,i,t=this[0];return%20arguments.length?(i=m(n),this.each(function(e){var%20t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t=%22%22:%22number%22==typeof%20t?t+=%22%22:Array.isArray(t)&&(t=S.map(t,function(e){return%20null==e?%22%22:e+%22%22})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&%22set%22in%20r&&void%200!==r.set(this,t,%22value%22)||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&%22get%22in%20r&&void%200!==(e=r.get(t,%22value%22))?e:%22string%22==typeof(e=t.value)?e.replace(xt,%22%22):null==e?%22%22:e:void%200}&appid=569b83e02c16eca2296eee261eebaa02


cityBtn.on("click", function(event){
  event.preventDefault()
   var city = cityFormEl.value
//    var city = cityFormEl.val
   console.log(city)
   let weathApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=569b83e02c16eca2296eee261eebaa02"
$.ajax({
    url: weathApi,
    method: 'GET',
  }).then(function (response) {
    console.log(response);
    let lonLat = response.coord
    console.log("Lon Lat: ", lonLat)
    tempTEl.innerHtml = response.main.temp
    // let windT = response.
    // let humT = response.
    // let uvTEl = response.
    console.log("Name ", response.name)
    console.log("Lon Lat: ", lonLat)
    console.log("temp", response.main.temp)
    console.log("wind",response.wind.speed)
    console.log("humidity",response.main.humidity )
    console.log("uv", )
  });


})