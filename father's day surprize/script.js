/* ================= TYPEWRITER ================= */
const text = "Dear Dad, I have something special for you...";
let index = 0;
const speed = 80;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

/* ================= SCROLL ================= */
function scrollToEnvelope() {
  document.getElementById("envelope").scrollIntoView({ behavior: "smooth" });
}

/* ================= ENVELOPE ================= */
function openEnvelope() {
  document.querySelector(".letter-section").style.display = "block";
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  showLetter();
}

/* ================= LETTER ================= */
const letter = `Dear Dad,

Thank you for every sacrifice you made for me.
Thank you for every lesson you taught me.
Thank you for always believing in me even when I doubted myself.

You are my first hero, my greatest supporter, and my biggest inspiration.

No matter how old I become, I will always be your child.

Happy Father's Day ❤️

Love,
Your Daughter`;

function showLetter() {
  let i = 0;
  const box = document.getElementById("letterText");
  box.innerHTML = "";
  const interval = setInterval(() => {
    box.innerHTML += letter.charAt(i);
    i++;
    if (i >= letter.length) clearInterval(interval);
  }, 40);
}

/* ================= SURPRISE ================= */
function startSurprise() {
  document.getElementById("final").style.display = "block";
  document.getElementById("final").scrollIntoView({ behavior: "smooth" });
  startConfetti();
}

/* ================= CONFETTI ================= */
function startConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 3s linear infinite";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}