// Feature 1 - Part 1C

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const birthdayScreen = document.getElementById("birthdayScreen");
const countdownText = document.getElementById("countdownText");
const birthdayTitle = document.getElementById("birthdayTitle");
const birthdaySub = document.getElementById("birthdaySub");
const continueBtn = document.getElementById("continueBtn");

const subtitle = document.querySelector(".subtitle");

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
    }
    else if (tries == 2){
         title.innerHTML = "Kiti khot bolnar? 😂";
         subtitle.classList.add("fade-out");

          setTimeout(() => {
          subtitle.style.display = "none";
             }, 400);
    }
    else if (tries == 3){
        title.innerHTML = "Ho var click kar na... 🤭";
    }
    else{
        title.innerHTML = "Ata fakta 'Ho' available aahe 😎";
        noBtn.style.display = "none";
        return;
    }

     const viewport = window.visualViewport || window;

    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;

    const padding = 20;

    // Title ke niche se movement start hoga
    const titleBottom = title.getBoundingClientRect().bottom;
    const minY = titleBottom + 40;
  
    // Screen ke andar hi rahe
    const maxX = viewport.width - btnW - padding;
    const maxY = viewport.height - btnH - padding;

    const randomX = Math.random() * (maxX - padding) + padding;
    const randomY = Math.random() * (maxY - minY) + minY;

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
            launchBalloons();
          
            birthdayTitle.style.display = "block";

            birthdaySub.style.display = "block";

            continueBtn.style.display = "inline-block";

        }

    },1000);

});
