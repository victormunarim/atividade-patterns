//O padrão de design Command é um padrão comportamental que encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes pedidos
//ex: Imaginemos que temos um sistema de controle de dispositivos (como uma luz, ventilador, etc.), e queremos usar o padrão Command para ligar e desligar esses dispositivos com flexibilidade.

class Command {
    execute() {
        throw new Error("Método execute deve ser implementado");
    }
}

class Luz {
    ligar() {
        console.log("Luz ligada");
    }

    desligar() {
        console.log("Luz desligada");
    }
}

class Ventilador {
    ligar() {
        console.log("Ventilador ligado");
    }

    desligar() {
        console.log("Ventilador desligado");
    }
}

class ComandoLigarLuz extends Command {
    constructor(luz) {
        super();
        this.luz = luz;
    }

    execute() {
        this.luz.ligar();
    }
}

class ComandoDesligarLuz extends Command {
    constructor(luz) {
        super();
        this.luz = luz;
    }

    execute() {
        this.luz.desligar();
    }
}

class ComandoLigarVentilador extends Command {
    constructor(ventilador) {
        super();
        this.ventilador = ventilador;
    }

    execute() {
        this.ventilador.ligar();
    }
}

class ComandoDesligarVentilador extends Command {
    constructor(ventilador) {
        super();
        this.ventilador = ventilador;
    }

    execute() {
        this.ventilador.desligar();
    }
}

class ControleRemoto {
    constructor() {
        this.comando = null;
    }

    definirComando(comando) {
        this.comando = comando;
    }

    pressionarBotao() {
        this.comando.execute();
    }
}

// Criando os receptores
const luz = new Luz();
const ventilador = new Ventilador();

// Criando os comandos concretos
const comandoLigarLuz = new ComandoLigarLuz(luz);
const comandoDesligarLuz = new ComandoDesligarLuz(luz);
const comandoLigarVentilador = new ComandoLigarVentilador(ventilador);
const comandoDesligarVentilador = new ComandoDesligarVentilador(ventilador);

// Criando o invocador
const controleRemoto = new ControleRemoto();

// Usando o controle remoto para ligar e desligar dispositivos
controleRemoto.definirComando(comandoLigarLuz);
controleRemoto.pressionarBotao(); // Luz ligada

controleRemoto.definirComando(comandoDesligarLuz);
controleRemoto.pressionarBotao(); // Luz desligada

controleRemoto.definirComando(comandoLigarVentilador);
controleRemoto.pressionarBotao(); // Ventilador ligado

controleRemoto.definirComando(comandoDesligarVentilador);
controleRemoto.pressionarBotao(); // Ventilador desligado