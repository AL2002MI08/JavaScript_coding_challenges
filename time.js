function dotest(seconds) {
    if (seconds === 0) return "now";
    let time = {},outPut = [],outputStr;
    
    while (seconds > 0) {
      (seconds >= 31536000)? getyears() : (seconds >= 86400) ?
        getDays() : (seconds >= 3600) ?
        gethours() : (seconds >= 60) ?
        getminutes(): (seconds < 60) ?
        getSeconds(): null
    }
    function getyears() {
      time.years = Math.floor(seconds / 31536000);
      seconds = seconds % 31536000;
    }
    function getDays() {
      time.Days = Math.floor(seconds / 86400);
      seconds = seconds % 86400;
    }
    function gethours() {
      time.hours = Math.floor(seconds / 3600);
      seconds = seconds % 3600;
    }
    function getminutes() {
      time.minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
    function getSeconds(){
      time.seconds = seconds;
      seconds = 0 
    }
    if (time.years > 0) {
      time.years > 1
        ? outPut.push(` ${time.years} years`)
        : outPut.push( ` ${time.years} year`);
    }
    if (time.Days > 0) {
      time.Days > 1
        ? outPut.push( ` ${time.Days} days`)
        : outPut.push( ` ${time.Days} day`);
    }
    if (time.hours > 0) {
      time.hours > 1
        ? outPut.push( ` ${time.hours} hours`)
        : outPut.push( ` ${time.hours} hour`);
    }
    if (time.minutes > 0) {
      time.minutes > 1
        ? outPut.push(` ${time.minutes} minutes`)
        : outPut.push( ` ${time.minutes} minute`);
    }
    if (time.seconds > 0) {
      time.seconds > 1
        ? outPut.push( ` ${time.seconds} seconds`)
        : outPut.push( ` ${time.seconds} second`);
    }
    if (outPut.length > 1) {
      let lastEl = outPut.slice(outPut.length - 1);
      outPut.pop();
      outputStr = outPut.join(",") + " and " + lastEl[0];
      return outputStr;
    }
    return outPut[0];
  }
  console.log(dotest(360990));