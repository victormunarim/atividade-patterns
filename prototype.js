//padrão criacional que permite criar novos objetos copiando um protótipo existente

class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        return `Woof!`;
    }
}

const cachorro1 = new Cachorro("Daisy");
const cachorro2 = new Cachorro("Max");
const cachorro3 = new Cachorro("Spot");

console.log(cachorro1.latir());

