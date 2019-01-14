function Signature() {

this.canvas = document.getElementById('signature');
this.context = this.canvas.getContext('2d');

this.painting = false;
this.pixelX = [];
this.pixelY = [];
this.clickDrag = [];

var that = this;

this.events = function(){
  $('#signature').mousedown(function(e){
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    that.painting = true;

    that.addClick(x,y);
    that.draw();
  });

  $('#signature').mousemove(function(e){
    var x = e.pageX - $('#signature').offset().left;
    var y = e.pageY - $('#signature').offset().top;
    if(that.painting){
      that.addClick(x,y,true);
      that.draw();
    }
  });

  $('#signature').mouseup(function(e){
    that.painting = false;
  });
};

this.addClick = function(x,y,dragging){
  that.pixelX.push(x);
  that.pixelY.push(y);
  that.clickDrag.push(dragging);
}

this.draw = function(){
  this.context.clearRect(0,0,300,130);

  this.context.strokeStyle = "black";
  this.context.lineJoin = "round";
  this.context.lineWidth = 2;
  for(var i = 0; i < this.pixelX.length; i++){
    this.context.beginPath();

    if(that.clickDrag[i] && i){
      that.context.moveTo(that.pixelX[i-1], that.pixelY[i-1]);
    } else {
      that.context.moveTo(that.pixelX[i]-1, that.pixelY[i]);
    }

    this.context.lineTo(that.pixelX[i], that.pixelY[i]);
    this.context.closePath();
    this.context.stroke();
  }
};


};
