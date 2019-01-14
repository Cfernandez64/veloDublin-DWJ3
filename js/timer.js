function Timer(){
  this.date = new Date().getTime();
  this.expiration = this.date + 1200000;

  if (sessionStorage.exp === undefined){
    sessionStorage.exp = this.expiration;
      this.timer = sessionStorage.exp;
    } else {
      this.timer = sessionStorage.exp;
    }

  this.timestamp = this.timer - this.date;
  this.minutes = Math.floor(this.timestamp / 60000);
  this.sec = Math.floor((this.timestamp % 60000) / 1000);
  if (this.sec < 10 && this.sec >= 0) {
    this.secondes = "0" + this.sec;
  } else {
    this.secondes = this.sec;
  }

  if(this.timestamp < 0){
    var book = new Book();
    book.autoRefresh();
  }

  this.timeAffiche = $('#timer').text(this.minutes + ':' + this.secondes);

  this.interval = function(){
    setInterval(Timer, 1000);
  }
};
