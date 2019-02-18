//Passing arguments and setting module defaults:
var ray = (function() {
  var DEFAULTS = {
    say: "hello"
  };
  return {
    speak: function() {
      var myArgumnets = arguments[0] || "";
      var statement = myArgumnets.say || "Hello";

      console.log(statement);
    }
  };
})();
