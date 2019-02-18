//Multiple functions - Chaining2
//using "return this" at the end of function:
var ray = (function() {
  var DEFAULTS = {
    say: "hello",
    speed: "normal"
  };
  return {
    speak: function() {
      var myArgumnets = arguments[0] || "";
      var statement = myArgumnets.say || DEFAULTS.say;

      console.log(statement);
      return this;
    },
    run: function() {
      var myArgumnets = arguments[0] || "";
      var running = myArgumnets.speed || DEFAULTS.speed;
      console.log(`Running ...`, running);
      return this;
    }
  };
})();
