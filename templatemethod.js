//Este padrão permite que subclasses redefinam certos passos de um algoritmo, mas não a estrutura geral
//Vamos considerar um exemplo de preparação de bebidas.

class Bebida {
    // Método template
    preparar() {
        this.fervendo();
        this.adicionarIngrediente();
        this.servir();
    }

    // Método concretos
    fervendo() {
        console.log("Fervendo a água.");
    }

    servir() {
        console.log("Servindo a bebida.");
    }

    // Método abstrato
    adicionarIngrediente() {
        throw new Error("Este método deve ser implementado pela subclasse.");
    }
}

class Cha extends Bebida {
    adicionarIngrediente() {
        console.log("Adicionando chá.");
    }
}

class Cafe extends Bebida {
    adicionarIngrediente() {
        console.log("Adicionando café.");
    }
}

// Criando instâncias de Chá e Café
const cha = new Cha();
const cafe = new Cafe();

// Preparando as bebidas
console.log("Preparando Chá:");
cha.preparar();

console.log("\nPreparando Café:");
cafe.preparar();
