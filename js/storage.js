function Storage(nomResa, prenomResa, nomStation, velosDispos) {
  this.station = nomStation;
  this.dispo = velosDispos;
  this.nom = nomResa;
  this.prenom = prenomResa;

  this.store = function(){
    sessionStorage.station = this.station;
    sessionStorage.velos = this.dispo - 1;
    localStorage.nom = this.nom;
    localStorage.prenom = this.prenom;
    this.success();
  };
  this.success = function(){
    $('#success').modal();
    $('.valider').click(function(){
      window.location.reload();
    });
    setTimeout(location.reload.bind(location), 3000);
  };
};
