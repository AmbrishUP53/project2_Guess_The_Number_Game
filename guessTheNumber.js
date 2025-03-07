const input = document.querySelector("#inp")
const result = document.querySelector(".result")
const button = document.querySelector(".button")
const chance = document.querySelector("#chance")
const previous = document.querySelector("#previous")

let random = Math.floor(Math.random()*100 + 1)
let remaing = 10

button.addEventListener("click" , function(e){
    value = parseInt(input.value)
    
    if(checkValidity(value) && remaing >0){
        if(value === random){
           result.innerHTML =  `Congratulation !! You guessed right number. ${random}`
            endTheGame()
        }
        else{
            result.innerHTML = lowOrHigh(value) ;
            console.log(remaing);
            chance.innerHTML = ` ${(remaing)}`
            remaing -= 1
            previous.innerHTML += ` ${value}`
        }
    }
    else if(remaing == 0){
        result.innerHTML = "You have no more chances"
        endTheGame();
    }
    else{
        result.innerHTML = "Please enter a valid number !!"
    }
    input.value = "";
});

function checkValidity(str){
    if (isNaN(str))     
        return false;
    else   
        return true;
}

function endTheGame(){
    input.setAttribute("disabled" ,"")
    let p = document.createElement("p");
    p.innerHTML =  "<h2 id='newGame' style='border:2px solid black;color: golden'>start new Game</h2>";
    document.querySelector(".check").appendChild(p)
    startNewgame();
}

function startNewgame(){
    document.querySelector("#newGame").addEventListener("click" , function(e){
        random = Math.floor(Math.random()*100 + 1)
        input.value =""
        result.innerHTML ="";
        previous.innerHTML ="";
        remaing = 10;
        chance.innerHTML = remaing;
        input.removeAttribute("disabled");
        let p = document.querySelector("#newGame");
        p.remove();
    })

}
function lowOrHigh(value){
    if (value < random){
        return `The number is too low `;
    }
    else if(value > random){
        return 'The number is too high ';
    }
}
