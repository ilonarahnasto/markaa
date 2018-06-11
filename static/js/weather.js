function addPercentage() {
  var parameters = {
    "url": "https://dataservice.accuweather.com/forecasts/v1/hourly/1hour/133328?apikey=ERXjpvLv9nStpPKFXauhfWUWc8JfD7Av&language=fi",
    "method": "GET",
    "headers": {}
  }

  $.ajax(parameters).done(function (data) {
    var percentage = data[0].PrecipitationProbability;
    var node = document.createElement("H3");
    var textnode = document.createTextNode("Tällä hetkellä vituttaa " + percentage + " prosenttisesti.");
    node.appendChild(textnode);
    document.getElementById("vituttaa").appendChild(node);
  });

}
