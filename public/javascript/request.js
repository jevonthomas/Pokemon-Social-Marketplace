$(document).ready(function() {
  $('select').material_select();
});

document.getElementById("makeOffer").addEventListener('click', () => {
  location.href = `${location.href}/choose-pokemon`;
});