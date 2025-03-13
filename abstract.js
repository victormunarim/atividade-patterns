//criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
//ex: tema claro e escuro


class UIFabrica {
    criarBotao() { }
    criarCampoDeInput() { }
    criarCampoDeAjuda() { }
}

class TemaClaro extends UIFabrica {
    criarBotao() {
        return new BotaoClaro();
    }
    criarCampoDeInput() {
        return new CampoDeInputClaro();
    }
    criarCampoDeAjuda() {
        return new CampoDeAjudaClaro();
    }
}

class TemaEscuro extends UIFabrica {
    criarBotao() {
        return new BotaoEscuro();
    }
    criarCampoDeInput() {
        return new CamporDeInputEscuro();
    }
    criarCampoDeAjuda() {
        return new CampoDeAjudaEscuro();
    }
}

class Botao { }

class BotaoClaro extends Botao {
    constructor() {
        super();
        console.log('Botao claro criado');
    }
}

class BotaoEscuro extends Botao {
    constructor() {
        super();
        console.log('Botao escuro criado');
    }
}

const claro = new TemaClaro();
const botaoClaro = claro.criarBotao();

const escuro = new TemaEscuro();
const botaoEscuro = escuro.criarBotao();