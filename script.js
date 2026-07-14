// Feature 1 - Part 1C

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const birthdayScreen = document.getElementById("birthdayScreen");
const countdownText = document.getElementById("countdownText");
const birthdayTitle = document.getElementById("birthdayTitle");
const birthdaySub = document.getElementById("birthdaySub");
const continueBtn = document.getElementById("continueBtn");

const subtitle = document.querySelector(".subtitle");

const memeScreen = document.getElementById("memeScreen");
const memeImage = document.getElementById("memeImage");
const memeCaption = document.getElementById("memeCaption");
const nextMemeBtn = document.getElementById("nextMemeBtn");

const letterScreen = document.getElementById("letterScreen");
const openLetterBtn = document.getElementById("openLetterBtn");
const letterContent = document.getElementById("letterContent");
const typewriterText = document.getElementById("typewriterText");
const lastSurpriseBtn = document.getElementById("lastSurpriseBtn");

const birthdayMessage = `<< YOUR MESSAGE HERE >>`;

const countdownScreen = document.getElementById("countdownScreen");
const liveCountdown = document.getElementById("liveCountdown");

const pizzaScreen = document.getElementById("pizzaScreen");
const finishBtn = document.getElementById("finishBtn");

const quizScreen = document.getElementById("quizScreen");
const quizProgress = document.getElementById("quizProgress");
const quizQuestion = document.getElementById("quizQuestion");
const quizStatus = document.getElementById("quizStatus");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

const leftPreview = document.getElementById("leftPreview");
const rightPreview = document.getElementById("rightPreview");

const funnyMessages = [
  "😂 Aga khar sang!",
  "😜 Nahi ha option chalnar nahi.",
  "🤭 Ho var click kar.",
  "😏 Kiti khot bolnar?"
];
const memeImages = [
    "https://picsum.photos/400/500?random=1",
    "https://picsum.photos/400/500?random=2",
    "https://picsum.photos/400/500?random=3",
    "https://picsum.photos/400/500?random=4",
    "https://picsum.photos/400/500?random=5"
];

const memeCaptions = [
    "😎 Warning: Professional Chapri Detected!",
    "😂 Smile Level: 999+",
    "🌸 Birthday Queen Loading...",
    "Pan kharach... Tu khup sundar diste ❤️",
    "Happy Birthday Rashmi! Ha divas fakta tujhyasathi... 🎂✨"
];

const quizData = [

{
question:"Aaj konacha Birthday aahe? 🎂",
options:["Rashmi","Suresh"],
answer:0
},

{
question:"Official Chapri kon aahe? 😂",
options:["Me","Tu"],
answer:1
},

{
question:"Pizza kon khanar? 🍕",
options:["Rashmi","Kutra"],
answer:0
},

{
question:"Aajcha Star kon? ⭐",
options:["Rashmi","Mobile"],
answer:0
},

{
question:"Ready for Final Surprise? 🎁",
options:["Ho 😍","Ajun Nahi 😴"],
answer:0
}

];

let currentQuiz = 0;

let memeIndex = 0;

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

    const pos = [
        // Left
        {
            x: Math.max(20, rect.left - noBtn.offsetWidth - 20),
            y: rect.top + rect.height / 2
        },

        // Right
        {
            x: Math.min(rect.right + 20, window.innerWidth - noBtn.offsetWidth - 20),
            y: rect.top + rect.height / 2
        },

        // Bottom Left
        {
            x: rect.left,
            y: rect.bottom + 20
        },

        // Bottom Right
        {
            x: Math.min(rect.right - noBtn.offsetWidth, window.innerWidth - noBtn.offsetWidth - 20),
            y: rect.bottom + 20
        }
    ];

    const p = pos[(tries - 1) % pos.length];

    noBtn.style.position = "fixed";
    noBtn.style.left = p.x + "px";
    noBtn.style.top = p.y + "px";
}
function loadQuiz(){
const q = quizData[currentQuiz];

quizProgress.innerHTML = `Question ${currentQuiz+1} / ${quizData.length}`;

quizQuestion.innerHTML = q.question;

option1.innerHTML = q.options[0];

option2.innerHTML = q.options[1];

}
function checkAnswer(index){

    if(index === quizData[currentQuiz].answer){

        quizStatus.innerHTML = "✅ Correct! 🎉";
        quizStatus.style.color = "green";

        currentQuiz++;

        setTimeout(() => {

            quizStatus.innerHTML = "";

            if(currentQuiz < quizData.length){

                loadQuiz();

            }else{

                quizScreen.style.display = "none";
                letterScreen.style.display = "flex";

            }

        },700);

    }else{

        quizStatus.innerHTML = "❌ Oops! Punha Try Kar 😄";
        quizStatus.style.color = "red";

        setTimeout(() => {

            quizStatus.innerHTML = "";

        },1200);

    }

}
option1.addEventListener("click", () => {
    checkAnswer(0);
});

option2.addEventListener("click", () => {
    checkAnswer(1);
});
function startTypewriter() {

    let i = 0;

    typewriterText.innerHTML = "";

    const typing = setInterval(() => {

        if (i < birthdayMessage.length) {

            typewriterText.innerHTML += birthdayMessage.charAt(i);
            i++;

        } else {

            clearInterval(typing);

            lastSurpriseBtn.style.display = "inline-block";

        }

    }, 35);

}
function startCountdown() {

    const timer = setInterval(() => {

        const now = new Date();

        const target = new Date();

        target.setHours(22, 0, 0, 0);

        let difference = target - now;

        if (difference <= 0) {

            clearInterval(timer);

            liveCountdown.innerHTML = "00:00:00";

            countdownScreen.style.display = "none";

            pizzaScreen.style.display = "flex";

            launchConfetti();

            return;
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) / 1000
        );

        liveCountdown.innerHTML =
            String(hours).padStart(2, "0") + ":" +
            String(minutes).padStart(2, "0") + ":" +
            String(seconds).padStart(2, "0");

    }, 1000);

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
continueBtn.addEventListener("click", () => {

    birthdayScreen.style.display = "none";
    memeScreen.style.display = "flex";

});

nextMemeBtn.addEventListener("click", () => {

    memeImage.classList.add("photo-hide");

    setTimeout(() => {

        memeIndex++;

        if (memeIndex >= memeImages.length) {

            memeScreen.style.display = "none";
            quizScreen.style.display = "flex";
            currentQuiz = 0;
            loadQuiz();
            return;

        }

        leftPreview.src =
            memeImages[(memeIndex - 1 + memeImages.length) % memeImages.length];

        memeImage.src = memeImages[memeIndex];

        rightPreview.src =
            memeImages[(memeIndex + 1) % memeImages.length];

        memeCaption.innerHTML = memeCaptions[memeIndex];

        memeImage.classList.remove("photo-hide");
        memeImage.classList.add("photo-show");

    },300);

});
openLetterBtn.addEventListener("click", () => {

    document.getElementById("envelope").style.display = "none";

    openLetterBtn.style.display = "none";

    letterContent.style.display = "block";

    startTypewriter();

});
lastSurpriseBtn.addEventListener("click", () => {

    letterScreen.style.display = "none";

    countdownScreen.style.display = "flex";

    startCountdown();

});
finishBtn.addEventListener("click", () => {

    launchConfetti();

    alert("🎉 Happy Birthday Rashmi! 🎂");

});
