//Multiple functions - Chaining:
var ray = (function() {
  var DEFAULTS = {
    say: "hello",
    speed: "fast"
  };
  return {
    speak: function() {
      var myArgumnets = arguments[0] || "";
      var statement = myArgumnets.say || DEFAULTS.say;

      console.log(statement);
    },
    run: function() {
      var myArgumnets = arguments[0] || "";
      var running = myArgumnets.speed || DEFAULTS.speed;
      console.log(`Running ...`, running);
    }
  };
})();
