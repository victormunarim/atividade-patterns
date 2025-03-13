//Ao invés de permitir que os objetos se comuniquem diretamente uns com os outros, o mediador facilita a comunicação entre eles, centralizando a lógica de interação
//Vamos imaginar um exemplo onde temos uma aplicação de chat

class Mediator {
    enviarMensagem(mensagem, usuario) {
        throw new Error("O método enviarMensagem deve ser implementado.");
    }
}

class ChatMediator extends Mediator {
    constructor() {
        super();
        this.usuarios = [];
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        usuario.setMediator(this);
    }

    enviarMensagem(mensagem, usuario) {
        this.usuarios
            .filter(u => u !== usuario)  // Exclui o remetente
            .forEach(u => u.receberMensagem(mensagem));
    }
}

class Usuario {
    constructor(nome) {
        this.nome = nome;
        this.mediator = null;
    }

    setMediator(mediator) {
        this.mediator = mediator;
    }

    enviarMensagem(mensagem) {
        console.log(`${this.nome} enviou: ${mensagem}`);
        this.mediator.enviarMensagem(mensagem, this);
    }

    receberMensagem(mensagem) {
        console.log(`${this.nome} recebeu: ${mensagem}`);
    }
}

// Criando o mediador (chat)
const chat = new ChatMediator();

// Criando usuários
const usuario1 = new Usuario("Alice");
const usuario2 = new Usuario("Bob");
const usuario3 = new Usuario("Charlie");

// Adicionando usuários ao chat
chat.adicionarUsuario(usuario1);
chat.adicionarUsuario(usuario2);
chat.adicionarUsuario(usuario3);

// Usuários enviando mensagens
usuario1.enviarMensagem("Olá, pessoal!");
usuario2.enviarMensagem("Oi Alice, tudo bem?");
usuario3.enviarMensagem("Olá a todos!");
