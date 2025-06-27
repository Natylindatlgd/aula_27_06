class Animal {
    emitirSom() {
      console.log("Este animal faz um som.");
    }
  }
  
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Au Au!");
    }
  }
  
  class Gato extends Animal {
    emitirSom() {
      console.log("Miau!");
    }
  }
  
  class Pato extends Animal {
    emitirSom() {
      console.log("Quack!");
    }
  }
  
  const animais = [new Cachorro(), new Gato(), new Pato()];
  
  animais.forEach(animal => {
    animal.emitirSom();
  });