
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];

planets.reverse().forEach(function(planet) {

  var planetsList = document.getElementById('planets');

  var opt = document.createElement('option');

  opt.innerHTML = planet[0];

  planetsList.appendChild(opt);

});

function calculateWeight (weight, planetName) {

  for(var i=0; i<planets.length;i++) {

    if(planetName == planets[i][0]) {

      var multiplier = planets[i][1];

   };

 };

return weight*multiplier;

};

function handleClickEvent() {
  
  var userWeight = parseFloat($('#user-weight').val());
  
  var planetName = $('#planets').val();
  
  var result = calculateWeight(userWeight, planetName);
  
  $('#output').text("If you were on " + planetName + ", you would weigh "  + result +"lbs!");
  console.log(result);

};

$('#calculate-button').click(handleClickEvent);