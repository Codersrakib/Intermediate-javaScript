// Global Scope

const name = "Monique";

function sayHi() {
  console.log(`Hi ${name}`);
}

sayHi();
// Hi Monique

var test = "I'm global";

function testScope() {
  var test = "I'm local";

  console.log (test);     
}

testScope();           // output: I'm local

console.log(test);     // output: I'm global