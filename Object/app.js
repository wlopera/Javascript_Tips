const person = {
  name: "wlopera",
  age: 50,

  anonymousFunction: function () {
    console.log("Anonima-this:", this);
    console.log("Anonima-this.name:", this.name);
  },

  toString() {
    console.log("Funcion-this:", this);
    console.log("Funcion-this.name:", this.name);
  },

  arrowFunction: (objet) => {
    console.log("Arrow-this:", this, objet);
    console.log("Arrow-this.name:", this.name);
  },
};

console.log("Objeto Persona:", person);
console.log("Nombre Persona:", person.name);
console.log("Edad Persona:", person.age);
console.log();
person.anonymousFunction();
console.log();
person.toString();
console.log();
person.arrowFunction("test");


const countries = ["Argentina", "Brasil", "Colombia"]
console.log(countries)
countries.push("Dinamarca")
console.log(countries)