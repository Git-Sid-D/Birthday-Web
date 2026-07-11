// Feature 1 - Part 1C

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const birthdayScreen = document.getElementById("birthdayScreen");
const countdownText = document.getElementById("countdownText");
const birthdayTitle = document.getElementById("birthdayTitle");
const birthdaySub = document.getElementById("birthdaySub");
const continueBtn = document.getElementById("continueBtn");

const subtitle = document.querySelector(".subtitle");

const glassCard = document.querySelector(".glass-card");

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

function launchBalloons(){

    const container = document.getElementById("balloon-container");

    const colors = [
        "#ff4d4d",
        "#ffcc00",
        "#66ff66",
        "#4da6ff",
        "#ff66cc",
        "#b366ff"
    ];

    for(let i = 0; i < 25; i++){

        const balloon = document.createElement("div");

        balloon.classList.add("balloon");

        balloon.style.left = Math.random() * 100 + "vw";

        balloon.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        balloon.style.animationDuration =
            (5 + Math.random() * 3) + "s";

        container.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, 8000);

    }
}

noBtn.addEventListener("click", () => {

    tries++;

    if (tries == 1){
        title.innerHTML = "Aga khar khar sang... 😏";
        noBtn.style.left = "20px";
        noBtn.style.top = "180px";
        noBtn.style.right = "";
        noBtn.style.bottom = "";
      
    }
    else if (tries == 2){
         title.innerHTML = "Kiti khot bolnar? 😂";
         noBtn.style.left = "";
         noBtn.style.top = "";
         noBtn.style.right = "20px";
         noBtn.style.bottom = "20px";
         subtitle.classList.add("fade-out");

          setTimeout(() => {
          subtitle.style.display = "none";
             }, 400);
    }
    else if (tries == 3){
        title.innerHTML = "Ho var click kar na... 🤭";
        noBtn.style.left = "";
        noBtn.style.top = "180px";
        noBtn.style.right = "20px";
        noBtn.style.bottom = "";
    }
    else{
        title.innerHTML = "Ata fakta 'Ho' available aahe 😎";
        noBtn.style.display = "none";
        return;
    }
     //problem lines
     // Glass card ki position
    const cardRect = glassCard.getBoundingClientRect();

    // Title ki height
    const titleBottom =
    title.getBoundingClientRect().bottom - cardRect.top;

// Button size
const btnW = noBtn.offsetWidth;
const btnH = noBtn.offsetHeight;

// Padding
const padding = 20;

// X movement
const minX = padding;
const maxX = cardRect.width - btnW - padding;

// Y movement (title ke niche se)
const minY = titleBottom + 50;
const maxY = cardRect.height - btnH - padding;

const randomX =
    Math.random() * (maxX - minX) + minX;

const randomY =
    Math.random() * (maxY - minY) + minY;

noBtn.style.position = "absolute";
noBtn.style.left = randomX + "px";
noBtn.style.top = randomY + "px";
  
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
            launchBalloons();
          
            birthdayTitle.style.display = "block";

            birthdaySub.style.display = "block";

            continueBtn.style.display = "inline-block";

        }

    },1000);

});
