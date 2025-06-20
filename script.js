let card = document.getElementById("card");

document.querySelector("#yes").addEventListener("click", function () {
  let question = document.getElementById("question");
  let message = document.getElementById("answer");

  card.style.backgroundImage =
    "url('https://media.tenor.com/XZlVEiZ2yLAAAAAi/happy-birthday-love-you.gif')";
  question.style.display = "none";
  message.style.display = "flex";
});

document.querySelector("#no").addEventListener("mouseover", function () {
  let width = window.innerWidth - 100;
  let height = window.innerHeight - 50;

  this.style.position = "absolute";
  this.style.top = Math.random() * height + "px";
  this.style.left = Math.random() * width + "px";
});
