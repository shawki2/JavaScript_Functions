//Using this and arguments and a self-excuting  function using ()
// or Anonymous Closure:

(function(val1, val2) {
  console.log(val1 + val2);
  console.log(this);
  console.log(arguments);
})(2, 3);

//Using with function name plus:

// (function plus(val1, val2) {
//   console.log(val1 + val2);
//   console.log(this);
//   console.log(arguments);
// })(2, 3);
