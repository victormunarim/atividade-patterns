//A principal ideia do Facade é oferecer uma "fachada" (interface simples) que reúne as funcionalidades de várias classes ou subsistemas e expõe uma interface única para o usuário.

class Televisao {
    ligar() {
        console.log("Televisão ligada.");
    }
    desligar() {
        console.log("Televisão desligada.");
    }
}

class Projetor {
    ligar() {
        console.log("Projetor ligado.");
    }
    desligar() {
        console.log("Projetor desligado.");
    }
}


class HomeTheaterFacade {
    constructor(televisao, projetor) {
        this.televisao = televisao;
        this.projetor = projetor;
    }

    iniciarCinema() {
        console.log("Preparando para o cinema...");
        this.televisao.ligar();
        this.projetor.ligar();
    }

    desligarCinema() {
        console.log("Desligando o cinema...");
        this.televisao.desligar();
        this.projetor.desligar();
    }
}

const televisao = new Televisao();
const projetor = new Projetor();

// Criando a fachada
const homeTheater = new HomeTheaterFacade(televisao, projetor);

// Ligando o cinema
homeTheater.iniciarCinema();

// Desligando o cinema
homeTheater.desligarCinema();