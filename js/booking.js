function Book(){
  this.nom = localStorage.nom;
  this.prenom = localStorage.prenom;
  this.station = sessionStorage.station;
  this.velos = sessionStorage.velos;

  this.statutResa = function(){
    if(this.station !== undefined){
      $('#sta').text('Annuler la réservation').addClass('remove btn btn-outline-dark');
    } else {
      $('#sta').text('Pas de réservation en cours').removeClass('btn btn-outline-light');
    }
  };
  this.infoResa = function(){
    if(this.station !== undefined){
      $('#stationResa').text(this.station);
      $('#fullName').text(this.prenom + ' ' + this.nom);
      $('#chrono').show();
    }
  };
  this.refresh = function(){
    $('.remove').click(function(){
      sessionStorage.clear();
      window.location.reload();
    });
  };

  this.autoRefresh = function(){
    sessionStorage.clear();
    window.location.reload();
  };

  this.booked = function(){
    $('#resa').submit(function(e){
      var nomResa = $('#nom').val();
      var prenomResa = $('#prenom').val();
      var nomStation = $('#nomStation').text();
      var velosDispos = $('#number').text();

      var storage = new Storage(nomResa, prenomResa, nomStation, velosDispos);
      storage.store();
      alert('ok');
      e.preventDefault();
    });
  };
};
