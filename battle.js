
let accuracy = ((Math.random() * (0.8 - 0.6)) + 0.6).toFixed(2);//alien accuracy between .6 and .8
let firePower = Math.floor(Math.random() * (5 - 2)) + 2;//alien firePower between 2 and 4
let hull = Math.floor(Math.random() * (7 - 3)) + 3;//alien hull between 3 and 6

class spaceCraft { //object for the various spacecrafts
    constructor(hull, firePower, accuracy) {
        this.hull = hull;
        this.firePower = firePower;
        this.accuracy = accuracy;
        // this.name = name;
    }
    
    alienAttack() {//method for alien enemy attack
        if (mainShip.hull > 0) {//the hull of the main ship is the condition of this loop

            if (Math.random() < this.accuracy) {
                mainShip.hull -= this.firePower;
                console.log("Alien attacked and hit your ship! Main Ship Hull: " + mainShip.hull)
                if (this.hull <= 0) {
                    console.log("Alien hull: " + this.hull + ". Alien is destroyed! Play again?")
                } else {
                    mainShip.shipAttack()
                }
            } else {
                console.log("Alien attacked and MISSED!")
                mainShip.shipAttack();
            }
        } else {
            console.log("Ship hull: " + mainShip.hull + ". Your ship is destroyed!! GAME OVER!")
        }
    }
    shipAttack() { //method for main ship attack
        if (this.hull > 0) {
            if (Math.random() < mainShip.accuracy) {
                this.hull -= mainShip.firePower;
                console.log("You attacked and hit the Alien ship! Alien hull: " + this.hull)
                if (this.hull <= 0) {
                    console.log("Alien hull: " + this.hull + ". Alien is destroyed! Play again?")
                } else {
                    this.alienAttack()
                }
            } else {
                console.log("You attacked the alien and MISSED!")
                this.alienAttack();
            }
        } else {
            let replay = prompt("Alien hull: " + this.hull + ". Alien is destroyed! Play again?", "yes/no")
            if (replay === 'yes') {
                continue;
            } else {
                break;
            }

        }
    }

}
//-------------------------------Creation of Objects---------------------------------//
const alienObject = new spaceCraft(hull, firePower, accuracy) //one enemy spacecraft
let mainShip = new spaceCraft(20, 5, 0.7) //main spacecraft

let aliens = new Array();//creation of alien array

for (let i = 0; i <= 5; i++) {//creation of alien array with 6 randomly generated spacecrafts
    aliens[i] = new spaceCraft(hull, firePower, accuracy)
    hull++
    firePower++
}


function playGame() {

    const start = prompt("ARE YOU READY TO PLAY?", 'Yes/No');
    if (start.toLowerCase() === 'yes') {
        startGame()
    } else if (start === null || start === "") {
        alert('Please enter an answer.')
        playGame()
    } else {
        alert('Thank you! Come again!')
    }
}


function startGame() {
   shipAttack()
}

// playGame();



