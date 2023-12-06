class Hero {

    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack(type) {
        let typeAttack;

        if (type === "mago") {
            typeAttack = "magia";

        } else if (type === "guerreiro") {
            typeAttack = "espada";

        } else if (type === "monge") {
            typeAttack = "artes marciais";

        } else {
            typeAttack = "shuriken"
        }

        console.log(`O ${this.type} atacou usando ${typeAttack}`);
    }

}



let message = new Hero("Keran","35","guerreiro")

message.attack("guerreiro");