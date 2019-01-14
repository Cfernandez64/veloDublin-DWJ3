function MapManager (){
  this.api = "https://api.jcdecaux.com/vls/v1/stations?contract=Dublin&apiKey=3bba44eacb24b07487cae3f93f27369e8722f95a";
  this.lat = 53.347;
  this.lng = -6.27;
  this.zoom = 13;
  var that = this;

  this.myMap = L.map('mapid').setView([this.lat, this.lng], this.zoom);
  this.initMap = function(){
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        maxZoom: 18,
        id: 'mapbox.streets',
        version:8,
        accessToken: 'pk.eyJ1IjoiY2Zlcm5hbmRlejY0IiwiYSI6ImNqcGllcTcwcTEzMWkzcG96aTAzdjM0cHIifQ.EI_311e4faPeUK83pR1f1Q'
    }).addTo(that.myMap);
  };

  this.addMarker = function(){
    $.getJSON(this.api, function(datas){
        $.each(datas, function(i, data){
          var marker = L.marker([data.position.lat, data.position.lng]).addTo(that.myMap);
          var station = new Station(data);
            $(marker).click(function(){
              station.infoStation();
            });
        });
      });

    };

};
