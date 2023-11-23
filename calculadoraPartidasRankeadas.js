let wins = 52;
let losses = 16;
let result = calculator(wins, losses);
console.log(result);

function calculator(wins, losses) {
    let balance = wins - losses;
    let level
    
    if (balance < 10) {
        level = "Ferro";
    } else if (balance >= 11 && balance <= 20) {
        level = "Bronze";
    } else if (balance >= 21 && balance <= 50) {
        level = "Prata";
    } else if (balance >= 51 && balance <= 80) {
        level = "Ouro";
    } else if (balance >= 81 && balance <= 90) {
        level = "Diamante";
    } else if (balance >= 91 && balance <= 100) {
        level = "Lendário";
    } else {
        level = "Imortal";
    }

    let message = "O Herói tem um saldo de " + balance + " e está no nível de " + level;
    return message;
}

//utilizando switch case
/*let wins = 52;
let losses = 16;
let result = calculator(wins, losses);
console.log(result);

function calculator(wins, losses) {
    let balance = wins - losses;
    let level;

    switch (true) {
        case (balance < 10):
            level = "Ferro";
            break;
        case (balance >= 11 && balance <= 20):
            level = "Bronze";
            break;
        case (balance >= 21 && balance <= 50):
            level = "Prata";
            break;
        case (balance >= 51 && balance <= 80):
            level = "Ouro";
            break;
        case (balance >= 81 && balance <= 90):
            level = "Diamante";
            break;
        case (balance >= 91 && balance <= 100):
            level = "Lendário";
            break;
        default:
            level = "Imortal";
    }

    let message = "O Herói tem um saldo de " + balance + " e está no nível de " + level;
    return message;
}*/