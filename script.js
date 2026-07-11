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
function moveOutsideCard() {

    const card = document.querySelector(".glass-card");

    const rect = card.getBoundingClientRect();

    const btnW = noBtn.offsetWidth;
    const btnH = noBtn.offsetHeight;

    let x, y;

    do {
        const margin = 20;
        x = margin + Math.random() * (window.innerWidth - btnW - margin * 2);
        y = margin + Math.random() * (window.innerHeight - btnH - margin * 2);

    } while (

        x < rect.right + 20 &&
        x + btnW > rect.left - 20 &&
        y < rect.bottom + 20 &&
        y + btnH > rect.top - 20

    );

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("click", () => {
  
    tries++;
    
    if (tries == 1){
        title.innerHTML = "Aga khar khar sang... 😏";
        moveOutsideCard();
      
    }
    else if (tries == 2){
         noBtn.style.position = "fixed";

         setTimeout(() => {
         subtitle.style.display = "none";
             }, 400);
         subtitle.classList.add("fade-out");
         moveOutsideCard();
    }
    else if (tries == 3){
        title.innerHTML = "Ho var click kar na... 🤭";
        moveOutsideCard();
    }
    else{
        title.innerHTML = "Ata fakta 'Ho' available aahe 😎";
        console.log(noBtn);
        noBtn.remove();
    }
    
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
