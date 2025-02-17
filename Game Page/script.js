var words = ["Advertising", "ATM", "Balance", "Bank", "Budget", "Cash", "Commission", "Costs", "Fee", "Income", "Interest Rate", "Invest", "Loan", "Profit", "Transfer", "Withdrawal"];
var word;
var emptyGuess = [];

var livesOutput = document.getElementById("lives");
var output = document.getElementById("output");
var wordOutput = document.getElementById("word");

var lives = 10;

$(document).ready(function()
{
    word = words[Math.floor(Math.random() * 17)];
    word = word.toUpperCase();
    word = word.split("");

    let step = 0;

    for (element in word)
    {
        emptyGuess[step] = "_ ";
        step += 1;
    }

    wordOutput.innerHTML = emptyGuess.join("");
});

$("#A, #B, #C, #D, #E, #F, #G, #H, #I, #J, #K, #L, #M, #N, #O, #P, #Q, #R, #S, #T, #U, #V, #W, #X, #Y, #Z").click(function()
{
    let letter = this.id;

    if (word.includes(letter))
    {
        output.innerHTML = letter + " is in the word";

        for (element in word)
        {
            if (this.id == word[element])
            {
                emptyGuess[element] = letter;
            }

            wordOutput.innerHTML = emptyGuess.join("");
        }

        if (emptyGuess.includes("_ ") == false)
        {
            output.innerHTML = "Congratulations, you found the word!";
        }
    }
    else
    {
        output.innerHTML = letter + " is not in the word";
        lives -= 1;

        if (lives == 0)
        {
            output.innerHTML = "You did not find the word, the word was " + word.join("");
        }
    }

    document.getElementById(this.id).disabled = true;

    livesOutput.innerHTML = "Lives: " + lives;
});