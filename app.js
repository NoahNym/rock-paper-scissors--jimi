let playerChoice = "" 
let computerChoice = "" 
let rps = ["Rock","Paper","Scissors"]
let rpsImg = ["rock.png","paper.png","scissor.png"]

let playerimg = document.getElementById("playerImg")
let computerimg = document.getElementById("computerImg")

function rockClicked(){
    playerChoice = "Rock"
    playerimg.src = "rock.png"
    computerChoose()
}

function paperClicked(){
    playerChoice = "Paper"
    playerimg.src = "paper.png"
    computerChoose()

}

function scissorsClicked(){
    playerChoice = "Scissors"
    playerimg.src = "scissor.png"
    computerChoose()

}

function computerChoose(){
    console.log("The player choose: " + playerChoice)

   pcPick = Math.floor(Math.random() * 3);
   computerChoice = (rps[pcPick])
   computerimg.src = (rpsImg[pcPick])
   console.log("The computer choose:" + computerChoice)

   if (playerChoice === computerChoice){
    (console.log("draw"))
    computerimg.classList.remove("winner")
    playerimg.classList.remove("winner")


    }else if(
        (playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") || 
        (playerChoice == "Scissors" && computerChoice == "Paper")
    ){
        console.log("Player Won!")
        playerimg.classList.add("winner")
        computerimg.classList.remove("winner")
    }else{
        console.log("Computer Won!")
        computerimg.classList.add("winner")
        playerimg.classList.remove("winner")

    }
 
}

