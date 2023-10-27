class NameField {
  constructor(name) {
    const field = document.createElement("li");
    field.textContent = name;
    const nameListHosk = document.querySelector("#names");
    nameListHosk.appendChild(field);
  }
}

class NameGenerator {
  constructor() {
    const btn = document.querySelector("button");
    this.names = ["Messi", "Neymar", "Ronaldo", "Suarez"];
    this.currentName = 0;
    this.addName();
    btn.addEventListener("click", () => {
      this.addName();
    });
    console.log("Quien me llama a la clase NameGenerator: ", this);
  }

  addName() {
    console.log("Quien llama a la funcion addName: ", this);
    const name = new NameField(this.names[this.currentName]);
    this.currentName++;
    if (this.currentName >= this.names.length) {
      this.currentName = 0;
    }
  }
}

const generator = new NameGenerator();
