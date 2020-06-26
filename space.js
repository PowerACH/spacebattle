//start game
//main ship attack
//ship check
//alien attack
//ship check
//attack or retreat function





//------------------------Welcome message to the game--------------------------//
function playGame() {

    const start = prompt("ARE YOU READY TO PLAY?",'Yes/No');
    if(start.toLowerCase() === 'yes') {
        startGame()
    }
     else {
        window.location.reload
    }
    }  



//-------------------------------Variables-------------------------------------//


//-----------------------------Alien Ships-------------------------------------//

let accuracy = ((Math.random() * (0.8 - 0.6)) + 0.6).toFixed(1);
let firePower = Math.floor(Math.random() * (5 - 2)) + 2;
let hull = Math.floor(Math.random() * (7 - 3)) + 3;

class alien {
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
    }
}

let alienObject = new alien(hull, firePower, accuracy)


let aliens = new Array();

for (let i = 0; i <= 5; i++) {
    aliens[i] = new alien(hull, firePower, accuracy)
}

    //Alien ship method should attack and pass to Main ship
    function alienAttack() {
        while (ship.hull > 0) {
            if (Math.random() < aliens[0].accuracy) {
                ship.hull -= aliens[0].firePower;
                console.log("You've been HIT!!")
            } else {
                console.log("The aliens MISSED!")
            }
        }
    }
    function alienHullCheck() {
        if(aliens[0].hull > 0) {
            console.log(`Alien Hull: ${aliens[0].hull}`)
        } else {
            //
        }
    }


//-------------------------------Main Ship-------------------------------------//

let ship = {
    name: "PowerShip",
    hull: 20,
    firePower: 5,
    accuracy: 0.7
}

//Add method to attack Alien Ship, then pass to Alien Ship method

function mainAttack() {
    if (Math.random() < ship.accuracy) {
        aliens[0].hull -= ship.firePower;
        console.log("You attacked the alien ship and hit successful!!")
        console.log(ship)
    } else {
        console.log("You attacked the alien and MISSED!")
    }
}

//Method to check the health of the ships and end battle

function shipHullCheck() {
    if(ship.hull > 0) {
        console.log(`Your ${ship.name} hull is ${ship.hull}/20`)
    } else {
        break;
    }
}

mainAttack();
console.log(shipHullCheck())
alienAttack()
console.log(shipHullCheck())
mainAttack()
console.log(shipHullCheck())












//------------------------------Main Game Object-------------------------------------//