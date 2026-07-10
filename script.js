// Feature 1 - Part 1C

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const birthdayScreen = document.getElementById("birthdayScreen");
const countdownText = document.getElementById("countdownText");
const birthdayTitle = document.getElementById("birthdayTitle");
const birthdaySub = document.getElementById("birthdaySub");
const continueBtn = document.getElementById("continueBtn");
const funnyMessages = [
  "😂 Aga khar sang!",
  "😜 Nahi ha option chalnar nahi.",
  "🤭 Ho var click kar.",
  "😏 Kiti khot bolnar?"
];

let tries = 0;

noBtn.addEventListener("click", () => {

    tries++;

    alert(funnyMessages[Math.min(tries - 1, funnyMessages.length - 1)]);

    if (tries >= 4) {
        noBtn.style.display = "none";
        return;
    }

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

});
yesBtn.addEventListener("click", () => {

    document.querySelector(".container").style.display = "none";

    birthdayScreen.style.display = "flex";

    let count = 3;

    countdownText.innerText = count;

    const timer = setInterval(() => {

        count--;

        if(count > 0){

            countdownText.innerText = count;

        }else{

            clearInterval(timer);

            countdownText.style.display = "none";

            birthdayTitle.style.display = "block";

            birthdaySub.style.display = "block";

            continueBtn.style.display = "inline-block";

        }

    },1000);

});