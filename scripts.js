// console.log("sanity check");
function Timer(id, endtime){
  this.endtime = endtime;
  this.id = id;
  var clock = document.getElementById(id);
  this.weekSpan = clock.querySelector(".weeks");
  this.daySpan = clock.querySelector(".days");
  this.hourSpan = clock.querySelector(".hours");
  this.minuteSpan = clock.querySelector(".minutes");
  this.secondSpan = clock.querySelector(".seconds");
  this.disappointmentSpan = clock.querySelector(".disappointment");
}

Timer.prototype.getTimeRemaining = function(){
  var t = Date.parse(this.endtime) - Date.parse(new Date());
  this.disappointment = t;
  this.seconds = Math.floor((t / 1000) % 60);
  this.minutes = Math.floor((t / 1000 / 60) % 60);
  this.hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  this.days = Math.floor((t / (1000 * 60 * 60 * 24)) % 7);
  this.weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));

};

Timer.prototype.updateTimer = function(){
  this.getTimeRemaining()
  this.weekSpan.innerHTML = this.weeks;
  this.daySpan.innerHTML = this.days;
  this.hourSpan.innerHTML = this.hours;
  this.minuteSpan.innerHTML = this.minutes;
  this.secondSpan.innerHTML = this.seconds;
  this.disappointmentSpan.innerHTML = this.disappointment;
};

var endDate = new Date(Date.parse("December 25, 2017"));
console.log(endDate);

var disneyChristmasTimer = new Timer("timer-div",endDate);
setInterval(function(){
  disneyChristmasTimer.updateTimer();
},1000);