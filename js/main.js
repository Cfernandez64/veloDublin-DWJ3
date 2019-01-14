$(document).ready(function(){

  //INITIALISATION DE LA MAP ET DES MARKERS
  var map = new MapManager();
  map.initMap();
  map.addMarker();

  //OUVERTURE DE LA RESA ET GESTION
  var book = new Book();
  book.statutResa();
  book.infoResa();
  book.refresh();
  book.booked();

  //DECLENCHEMENT DU CHRONO
  if(sessionStorage.station !== undefined){
    var timer = new Timer();
    timer.interval();
  }

  //SIGNATURE ACTIVEE
  var signature = new Signature();
  signature.events();

  //SLIDER
  var slider = new Slider();
  slider.event();
});
