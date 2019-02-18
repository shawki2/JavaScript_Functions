//Using Object:
var calc = {
  status: "Awesome",
  plus: function(val1, val2) {
    return (
      console.log(this),
      console.log(val1 + val2),
      console.log(arguments),
      console.log(this.status)
    );
  }
};
calc.plus(2, 2);
