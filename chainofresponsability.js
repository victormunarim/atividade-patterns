//O padrão de design Chain of Responsibility (Cadeia de Responsabilidade) é um padrão comportamental que permite passar uma solicitação ao longo de uma cadeia de manipuladores. 
//Imaginemos que temos um sistema de suporte técnico, onde diferentes tipos de problemas podem ser resolvidos por diferentes níveis de suporte.

class Suporte {
    constructor(proximo = null) {
        this.proximo = proximo;
    }

    handle(tipoDeProblema) {
        if (this.proximo) {
            this.proximo.handle(tipoDeProblema);
        } else {
            console.log("Nenhum suporte disponível para resolver o problema.");
        }
    }
}

class SuporteBasico extends Suporte {
    handle(tipoDeProblema) {
        if (tipoDeProblema === "login") {
            console.log("Suporte Básico: Resolvido o problema de login.");
        } else {
            console.log("Suporte Básico: Não pode resolver, passando para o suporte avançado.");
            super.handle(tipoDeProblema);
        }
    }
}

class SuporteAvancado extends Suporte {
    handle(tipoDeProblema) {
        if (tipoDeProblema === "rede") {
            console.log("Suporte Avançado: Resolvido o problema de rede.");
        } else {
            console.log("Suporte Avançado: Não pode resolver, passando para o suporte especializado.");
            super.handle(tipoDeProblema);
        }
    }
}

class SuporteEspecializado extends Suporte {
    handle(tipoDeProblema) {
        if (tipoDeProblema === "hardware") {
            console.log("Suporte Especializado: Resolvido o problema de hardware.");
        } else {
            console.log("Suporte Especializado: Não pode resolver este tipo de problema.");
            super.handle(tipoDeProblema);
        }
    }
}

// Criando os manipuladores concretos
const suporteEspecializado = new SuporteEspecializado();
const suporteAvancado = new SuporteAvancado(suporteEspecializado);
const suporteBasico = new SuporteBasico(suporteAvancado);

// Cliente fazendo uma solicitação
console.log("Solicitação 1: Problema de login");
suporteBasico.handle("login");

console.log("\nSolicitação 2: Problema de rede");
suporteBasico.handle("rede");

console.log("\nSolicitação 3: Problema de hardware");
suporteBasico.handle("hardware");

console.log("\nSolicitação 4: Problema desconhecido");
suporteBasico.handle("desconhecido");

