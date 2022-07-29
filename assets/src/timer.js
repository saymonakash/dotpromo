function Timer() {
 
  this.timerObj = {};
  this.init = function (fn, t) {
    
    this.timerObj = setInterval(fn, t);
  }

  this.stop = function () {
      if (this.timerObj) {
        clearInterval(this.timerObj);
        this.timerObj = null;
      }
      return this;
    };

    // start timer using current settings (if it's not already running)
    this.start = function () {
      if (!this.timerObj) {
        this.stop();
        this.timerObj = setInterval(fn, t);
      }
      return this;
    };

    // start with new or original interval, stop current interval
    this.reset = function (newT = t) {
      t = newT;
      return this.stop().start();
    };
}

window.timer = new Timer;
export default new Timer();

