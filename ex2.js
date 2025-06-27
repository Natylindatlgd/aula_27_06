class Usuario {
    #senha;
  
    constructor() {
      this.#senha = '';
    }
  
    get senha() {
      return this.#senha;
    }
  
    set senha(novaSenha) {
      if (novaSenha.length > 6) {
        this.#senha = novaSenha;
      } else {
        console.log('A senha deve ter mais de 6 caracteres.');
      }
    }
  }
  
  const usuario = new Usuario();
  usuario.senha = '12345'; 
  console.log(usuario.senha); 
  usuario.senha = 'senhaSegura123';
  console.log(usuario.senha);
