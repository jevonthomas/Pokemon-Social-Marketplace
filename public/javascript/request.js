$(document).ready(function() {
  $('select').material_select();
});

$("#pokemon_selector").on('change', function() {
  // use the pokevalue to source the right sprite in the following url, based on pokedex number
  let pokevalue = $( "#pokemon_selector" ).val();
  document.getElementById("avatar").src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokevalue}.png`;
  // location.href = `${location.origin}/request/new/${pokevalue}`;
});