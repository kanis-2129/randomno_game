//Selecting Elements

var inputBox = document.getElementById("input")
var result=document.getElementById("result")
var guessCount = document.getElementById("guessCount")
var noofguess=3

//Generate random number

var randomNumber = Math.floor(Math.random()*10)+1  //1 to 10

if (randomNumber>5)
{
    randomNumber=randomNumber-5
}

function checktheNumber()
{
    if(inputBox.value==randomNumber)
    {
        alert("You got it Right, Congratulations")
        result.textContent="you are Right!"

    }
    else
    {
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("you lost, Generated Random Number is :"+randomNumber)


        }

        guessCount.textContent = "Available Guesses is :"+noofguess
        result.textContent="you are Wrong!"
    }
        

}