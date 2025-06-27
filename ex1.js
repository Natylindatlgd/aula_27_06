class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInformacoes() {
        return `Nome: ${this.nome}, Salário: R$${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    relatorioGerencial() {
        return `${this.exibirInformacoes()}, Departamento: ${this.departamento}\n` +
               `Relatório Gerencial: O departamento ${this.departamento} está sob minha gestão.`;
    }

    exibirInformacoes() {
        return `${super.exibirInformacoes()}, Departamento: ${this.departamento}`;
    }
}

const funcionario1 = new Funcionario("João Silva", 3000);
console.log(funcionario1.exibirInformacoes());

const gerente1 = new Gerente("Maria Souza", 8000, "TI");
console.log(gerente1.exibirInformacoes());
console.log(gerente1.relatorioGerencial());







