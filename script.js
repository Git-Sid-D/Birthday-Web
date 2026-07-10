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

const title = document.querySelector(".title");

function launchConfetti() {

    confetti({
        particleCount: 220,
        spread: 170,
        origin: { y: 0.6 }
    });

}

noBtn.addEventListener("click", () => {

    tries++;

    if (tries == 1){
        title.innerHTML = "Aga khar khar sang... 😏";
    }
    else if (tries == 2){
        title.innerHTML = "Kiti khot bolnar? 😂";
    }
    else if (tries == 3){
        title.innerHTML = "Ho var click kar na... 🤭";
    }
    else{
        title.innerHTML = "Ata fakta 'Ho' available aahe 😎";
        noBtn.style.display = "none";
        return;
    }

     // Screen size
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    // Button size
    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;

    // Margin taaki edge se chipke nahi
    const margin = 20;

    const randomX = Math.random() * (screenW - btnW - margin * 2) + margin;
    const randomY = Math.random() * (screenH - btnH - margin * 2) + margin;

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
  
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

            launchConfetti();
          
            birthdayTitle.style.display = "block";

            birthdaySub.style.display = "block";

            continueBtn.style.display = "inline-block";

        }

    },1000);

});
