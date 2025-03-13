//Proxy é um padrão estrutural que fornece um objeto substituto ou representante de outro objeto
//Vamos criar um exemplo simples de um Proxy para um serviço de imagem. A ideia é que o proxy carregue a imagem somente quando ela for realmente necessária

class Imagem {
    exibir() {
        throw new Error("Método 'exibir' deve ser implementado.");
    }
}

class ImagemReal extends Imagem {
    constructor(nome) {
        super();
        this.nome = nome;
        this.carregarImagem();
    }

    carregarImagem() {
        console.log(`Carregando a imagem: ${this.nome}`);
    }

    exibir() {
        console.log(`Exibindo a imagem: ${this.nome}`);
    }
}

class ImagemProxy extends Imagem {
    constructor(nome) {
        super();
        this.nome = nome;
        this.imagemReal = null;
    }

    exibir() {
        if (!this.imagemReal) {
            this.imagemReal = new ImagemReal(this.nome); // Carrega a imagem apenas quando necessário
        }
        this.imagemReal.exibir(); // Exibe a imagem
    }
}

// Criando o Proxy
const imagem = new ImagemProxy("imagem_grande.jpg");

// A imagem não é carregada até que a função exibir() seja chamada
imagem.exibir(); // A imagem será carregada e exibida na primeira chamada

// Caso chamemos novamente, a imagem já estará carregada
imagem.exibir(); // A imagem já está carregada, apenas será exibida

