//Initialize the game with a greeting alert and prompt
alert("WELCOME ABOARD THE POWER SHIP!!");
const start = prompt("ARE YOU READY TO PLAY?",'Yes/No');
if(start.toLowerCase()) {
    alert('LETS PLAY')
} else {
    alert('Refresh when ready!')
}

//Main Ship 
//Make main ship an object 
// const power = { 
//     name = 'Powership',


// };

//Alien Ships
// class aliens {
//     constructor(name, hull, firePower, accuracy)
// }


//make a method for the main ship object that will attack the given target
//the target can be an input to the method
//run the method and pass to the alien ship
//make it so the method reduces the targets hull by the firepower 

//make a game object
//make a method in the game object that will run a 'check win' for the health of the aliens and or the main ship
//if the hull is 0 or less display a message that the ship went down. 
//make it so the alien will onlybe hit if a Math.random call is below the accuracy theshold
//make a method for the alien ship to attack the target 
//at a status console.log for the end of the round

//after an alien ship goes down, you can choose to retreat



//THERE 6 ALIEN SHIPS 
//make a single alien ship object
//multiple ships should be in a class
//each object should be different 
//hull between 3 and 6
//fire power between 2 and 4
//accuracy between 0.6 and 0.8
//javascript this.hull = Math.floor(Math.random() * 3) + 6 /10
//make a loop that calls the class and generates alien ships
//Push those constructed objects into a predefined array
//start with 6 ships (the loop should run 6 times)
//Try out the game with the first alien ship in the array 
//Run the battle with all ships in turn


//move functions into the game object

