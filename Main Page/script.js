var button = document.getElementById("inputButton");
var progressBar = document.getElementById("progress-bar");

var saved = 0;
var goal = 100;

var image = document.getElementById("catImage");
var imageOriginal = image.src;
var imageChange = "../Images/SageCat.gif";

var amountSaved = document.getElementById("amountSaved");

function buttonClick()
{
  saved += Number($('#moneySaved').val());
  percent = (saved/goal) * 100;
  document.querySelector(".progress-bar").style.width = percent + "%";

  amountSaved.innerHTML = "£" + saved;

  image.src = imageChange;
                  
  setTimeout(() =>
  {
    image.src = imageOriginal;
  }, 3000);

  if (percent == 100)
  {
    alert("You've met your goal!");
  }
}

button.addEventListener('click', buttonClick);