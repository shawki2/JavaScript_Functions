//Using instance through the constructor:
var Dog = function() {
  var name, breed;
  console.dir(this);
};
firstDog = new Dog();
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog();
secondDog.name = "Fuffy";
secondDog.breed = "Poodle";
//console.log(firstDog.name);
//console.log(secondDog.name);
