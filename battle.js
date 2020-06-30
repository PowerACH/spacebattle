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
       
            if (Math.random() < this.accuracy) {
                mainShip.hull -= this.firePower //deduct the firepower from the main ship hull during attack
                alert("Alien attacked and hit your ship! Main Ship Hull: " + mainShip.hull)
                mainShip.mainShipCheck()//check the main ship for game ending damage
              
            } else {
                alert("Alien attacked and MISSED!")
                alienObject.shipAttack();//aliens turn for attack
            }
    }

    shipAttack() { //method for main ship attack
        
            if (Math.random() < mainShip.accuracy) {
                this.hull -= mainShip.firePower;//deduct the main ship firepower from the alien hull after attack
                alert("You attacked and hit the Alien ship! Alien hull: " + this.hull)
                alienObject.alienShipCheck()//check alien ship for game ending damage
                
            } else {
                alert("You attacked the alien and MISSED!")
                alienObject.alienAttack();//mainShip turn for attack
            }
    }

    mainShipCheck() {//method for main ship hull check
        if (this.hull <= 0) {//restarts game after main ship hull is below zero
            alert("Ship hull: " + this.hull + ". Your ship is destroyed!! GAME OVER!")
            playGame()
        } else if (this.hull > 0) {
            alienObject.shipAttack()//main ships turn for attack
        }
    }
    
    alienShipCheck() {
        if (this.hull <= 0) {//to continue or retreat after alien hull is destroyed
            let alienReplay = prompt("Alien hull: " + this.hull + ". Alien is destroyed! Would you like to retreat or attack again?", "retreat/attack")
            if (alienReplay === 'attack') {
                this.hull = hull
                alienObject.alienAttack()//loop
            } else if (alienReplay === 'retreat') {
                playGame()
            }
        } else {
            alienObject.alienAttack()
        }
    }

    test() {
        alert(`This is a test ${this.hull}`)
    }
}


//-------------------------------Creation of Objects---------------------------------//
const alienObject = new spaceCraft(hull, firePower, accuracy) //one enemy spacecraft
let mainShip = new spaceCraft(20, 5, 0.7) //main spacecraft

let aliens = new Array();//creation of alien array

for (let i = 0; i <= 5; i++) {//creation of alien array with 6 randomly generated spacecrafts
    aliens[i] = new spaceCraft(hull, firePower, accuracy)
    hull++
    
}

//------------------------------Beginning Game Function-------------------------------//
function playGame() {

    const start = prompt("ARE YOU READY TO PLAY?", 'Yes/No');
    if (start === 'yes' || start === 'Yes') {
        alienObject.shipAttack()
    } else if (start === null || start === "") {
        alert('Please enter an answer.')
        
    } else {
        alert('Thank you! Come again!')
    }
}

playGame()







