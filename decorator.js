//ex: Decorador de Produtos
//O padrão de design Decorator é um padrão estrutural que permite adicionar comportamentos adicionais a um objeto dinamicamente, sem modificar a classe original do objeto

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    getPreco() {
        return this.preco;
    }

    getNome() {
        return this.nome;
    }
}

function aplicarDesconto(produto, porcentagem) {
    const precoComDesconto = produto.getPreco() * (1 - porcentagem / 100);
    produto.getPreco = () => precoComDesconto;  // Sobrescreve o método getPreco
    return produto;
}

// Criando um produto
const produto = new Produto("Camiseta", 100);

// Aplicando desconto de 20%
const produtoComDesconto = aplicarDesconto(produto, 20);

console.log(`Produto: ${produtoComDesconto.getNome()}`);
console.log(`Preço com desconto: R$ ${produtoComDesconto.getPreco().toFixed(2)}`);