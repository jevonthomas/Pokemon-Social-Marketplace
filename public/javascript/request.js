$(document).ready(function() {
  $('select').material_select();
  $(".button-collapse").sideNav();
});

document.getElementById("makeOffer").addEventListener('click', () => {
  location.href = `${location.href}/choose-pokemon`;
});