function Station(station){
  this.station = station;
  this.nameStation = this.station.name;
  this.dispo = this.station.available_bikes;
  this.places = this.station.available_bike_stands;
  this.statutStation = this.station.status;

  this.infoStation = function(){
    $('#resa').hide();
    if(this.statutStation === 'OPEN'){
      $('#statutStation').addClass('text-success');
    } else {
      $('#statutStation').addClass('text-danger');
    }
    $('#statutStation').text('Station' + ' ' + this.statutStation);
    $('#nomStation').html(this.nameStation);
    $('#bikeIllus').show();
    $('#standDispos').text("Places dispos : " + this.places);
    if (sessionStorage.station !== undefined){
      $('#messageVide').show().text("Vous avez déjà une réservation en cours");
    } else{
      if (this.dispo > 0 && this.statutStation === 'OPEN'){
        $('#buttonResa').show();
        $('#messageVide').hide();
      } else {
        $('#buttonResa').hide();
        $('#messageVide').show().text("Désolé, aucun vélo n'est disponible");
      }
    }

    if (sessionStorage.velos !== undefined && this.nameStation === sessionStorage.station){
      $('#bikesDispos').text("Vélos Dispos : ");
      $('#numberBikes').text(this.dispo - 1);
    } else {
      $('#bikesDispos').text("Vélos Dispos : ");
      $('#numberBikes').text(this.dispo);
    }
    this.afficherFormulaire();
  };

  this.afficherFormulaire = function(){
    $('#buttonResa').click(function(){
      $('#resa').show();
      $('#buttonResa').hide();
      if (localStorage.nom !== undefined){
        $('#nom').val(localStorage.nom);
        $('#prenom').val(localStorage.prenom);
      }
    });
  };
};
