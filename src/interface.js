$(document).ready(() => {
  $("#input-form").submit(event, () => {
      event.preventDefault();
       console.log("hello");
  });
});
// $('#box1').val()
// $("#select-city").submit(event => {
//   event.preventDefault();
//   var city = $("#current-city").val();
//   displayWeather(city);
// });
//
// function displayWeather(city) {
//   var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city;
//   var token = "&appid=72a46f472cd78125c67ce1ba75151860";
//   var units = "&units=metric";
//   $.get(url + token + units, data => {
//     $("#city-temperature").text(Math.round(data.main.temp));
//     $("#city").text(data.name);
//   });
// }
