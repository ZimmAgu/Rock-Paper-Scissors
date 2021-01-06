//////////////////////////////////
//                              //
// rock, paper, scissor project //
//      from codecademy         //
//                              //
//////////////////////////////////






















/*
    This function will make it possible 
    for the user to choose
    rock, paper, or scissors
    when the game starts
*/
const get_User_Choice = userInput => {




    /*  
        Makes all input lower case so case sensitivity isn't 
        a problem when choosing rock paper or scissors
    */
    userInput = userInput.toLowerCase();






    /*  Makes sure the user inputs a valid option
        if the user does not input rock paper or scissor
        and error message is sent to the console
    */
    if (userInput == `rock` || userInput == `paper` || userInput == `scissors`) {

        console.log(`The user has chosen ${userInput}`);
        return userInput;

    } else {

        console.log(`Error: Input not valid`);
    }




}; // End of the getUserChoice function




























/*
    This fuction gets the computer's choice
*/
const get_Computer_Choice = () => {


    /* 
        The computer generates a random integer
        between 0 and 2
    */
    const RandomNumber = Math.floor(Math.random() * 3);





    /*
        Depending on the integer generated
        the computer then returns either
        rock paper or scissors
    */
    switch (RandomNumber) {

       
        case 0:
            console.log(`The computer has chosen rock`);
            return `rock`;


        case 1:
            console.log(`The computer has chosen paper`);
            return `paper`;
        

        case 2:
            console.log(`The computer has chosen scissors`)
            return `scissors`;
            

    } // End of switch statement


} // End of the getComputerChoice function 
































/// This function determines the winner of the game
const determine_the_Winner = (userChoice, computerChoice) => {


    
    /*  
        When the game is a tie
        tie message gets printed to console
    */
    if (userChoice == computerChoice) {

        console.log(`The game is a tie`);

    }
   
  





    /*
        When the user picks rock 
        unless the computer chooses paper
        the user wins
    */
   if (userChoice == `rock`) {

        if (computerChoice == `paper`) {

            console.log(`The computer has won`);

        } else if (computerChoice == `scissors`) {

            console.log(`The user has won`);

        }

   }







    /*
        when the user picks paper
        unless the computer chooses scissors
        the user wins
    */
   if (userChoice == `paper`) {

        if (computerChoice == `scissors`) {  
        
            console.log(`The computer has won`);

        } else if (computerChoice == `rock`) {

            console.log(`The user has won`);

        }

    }   




    /*
        when the user picks scissors
        unless the computer chooses rock
        the user wins
    */
   if (userChoice == `scissors`) {

    if (computerChoice == `rock`) {  
    
        console.log(`The computer has won`);

    } else if (computerChoice == `paper`) {

        console.log(`The user has won`);

    }

}   
   


} // End of the determineWinner function





























/*
    This function actually runs the game of rock paper scissors
*/
const play_the_game = () => {

    let user = get_User_Choice(`scissors`);

    let computer = get_Computer_Choice();

    determine_the_Winner(user, computer);


}

play_the_game();