function Slider(){
  var playing = true;
  var that = this;
  this.slide = $('.carousel-item');

  this.event = function(){
    $('.carousel-control-next').click(function(){
      that.next();
    });
    $(document).keydown(function(e){
      if(e.which === 39){
        that.next();
      } else if(e.which === 37){
        that.prec();
      }
    });

    $('.carousel-control-prev').click(function(){
      that.prec();
    });

    $('.control-fa').click(function(){
      if(playing){
        $(this).toggleClass('fa-pause-circle fa-play-circle');
        that.pause();
        playing = false;
      } else {
        $(this).toggleClass('fa-play-circle fa-pause-circle');
        that.play();
        playing = true;
      }
    });

  }

  this.next = function(){
    this.indic = $('.carousel-indicators li');

    var isActive = $('.carousel-inner .active');
    if (that.slide.last().hasClass('active') === true){
      isActive.toggleClass('active');
      that.slide.first().toggleClass('active');
    } else {
      isActive.toggleClass('active');
      isActive.next().toggleClass('active');
    }
    //INDICATEURS
    var indicActive = $('.carousel-indicators .active');
    if (this.indic.last().hasClass('active') === true){
      indicActive.toggleClass('active');
      this.indic.first().toggleClass('active');
    } else {
      indicActive.toggleClass('active');
      indicActive.next().toggleClass('active');
    }
  }

  this.prec = function(){
    var isActive = $('.carousel-inner .active');
    if (that.slide.first().hasClass('active') === true){
      isActive.toggleClass('active');
      that.slide.last().toggleClass('active');
    } else {
      isActive.toggleClass('active');
      isActive.prev().toggleClass('active');
    }

    //INDICATEURS
    var indicActive = $('.carousel-indicators .active');
    if (this.indic.first().hasClass('active') === true){
      indicActive.toggleClass('active');
      this.indic.last().toggleClass('active');
    } else {
      indicActive.toggleClass('active');
      indicActive.prev().toggleClass('active');
    }
  }

  this.pause = function(){
    clearInterval(this.time);
    console.log("c'est en pause");
  }

  this.play = function(){
    this.time = setInterval (this.next, 5000);
    console.log("ça joue");
  }

  this.time = setInterval (this.next, 5000);

}
