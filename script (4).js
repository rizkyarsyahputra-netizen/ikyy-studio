// LOADER
window.onload = function(){

  setTimeout(()=>{

    document.getElementById("loader")
    .style.display = "none";

  },1000);

}


// CURSOR GLOW
const glow =
document.querySelector(
".cursor-glow");

document.addEventListener(
"mousemove",(e)=>{

  glow.style.left =
  e.clientX + "px";

  glow.style.top =
  e.clientY + "px";

});


// MUSIC BUTTON
const music =
document.getElementById(
"bgMusic");

document.getElementById(
"musicBtn")

.addEventListener("click",()=>{

  if(music.paused){

    music.play();

    document.getElementById(
    "musicBtn").innerText =
    "⏸ Music";

  }else{

    music.pause();

    document.getElementById(
    "musicBtn").innerText =
    "🎵 Music";

  }

});


// TYPING EFFECT
const typingText =
document.getElementById(
"typing-text");

const words = [

"Freelance Developer",

"Website Designer",

"Modern UI Creator",

"Coding Services"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

let currentWord =
words[wordIndex];

if(!deleting){

typingText.textContent =
currentWord.slice(0,charIndex++);

if(charIndex >
currentWord.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}else{

typingText.textContent =
currentWord.slice(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >=
words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,120);

}

typeEffect();


// TESTIMONIAL SLIDER
const reviews = [

"Website nya keren banget 🔥",

"Fast respon dan hasil memuaskan 😍",

"Landing page premium 😎",

"Recommended freelancer 👍",

"UI modern dan smooth ✨"

];

let reviewIndex = 0;

setInterval(()=>{

reviewIndex =
(reviewIndex + 1)
% reviews.length;

document.getElementById(
"testimonialText")

.innerText =
reviews[reviewIndex];

},3000);


// COUNTER ANIMATION
function counter(id,target,speed){

let count = 0;

let interval =
setInterval(()=>{

count++;

document.getElementById(id)
.innerText = count;

if(count >= target){

clearInterval(interval);

}

},speed);

}

counter("clientCount",10,80);

counter("projectCount",15,60);

counter("reviewCount",8,100);


// SCROLL REVEAL
window.addEventListener(
"scroll",()=>{

const elements =
document.querySelectorAll(
".card,.portfolio-card,.stat-box"
);

elements.forEach(el=>{

const top =
el.getBoundingClientRect()
.top;

if(top < window.innerHeight
-100){

el.style.opacity = "1";

el.style.transform =
"translateY(0px)";

}

});

});


// PARALLAX HERO IMAGE
window.addEventListener(
"scroll",()=>{

const heroImg =
document.querySelector(
".right img");

let scroll =
window.scrollY;

heroImg.style.transform =
`translateY(${scroll*0.1}px)`;

});


// AUTO HIDE NAVBAR
let lastScroll = 0;

window.addEventListener(
"scroll",()=>{

const nav =
document.querySelector("nav");

let currentScroll =
window.pageYOffset;

if(currentScroll > lastScroll){

nav.style.top = "-100px";

}else{

nav.style.top = "20px";

}

lastScroll = currentScroll;

});


// NAVBAR BACKGROUND
window.addEventListener(
"scroll",()=>{

const nav =
document.querySelector("nav");

if(window.scrollY > 50){

nav.style.background =
"rgba(15,23,42,0.85)";

nav.style.boxShadow =
"0 5px 20px rgba(0,0,0,0.3)";

}else{

nav.style.background =
"rgba(255,255,255,0.05)";

nav.style.boxShadow =
"none";

}

});


// PILIH LAYANAN
let layanan =
"Logo Design";

function pilihLayanan(btn){

document.querySelectorAll(
".service-btn")

.forEach(b=>{

b.classList.remove(
"active");

});

btn.classList.add(
"active");

layanan =
btn.innerText;

}


// ORDER WHATSAPP
function kirimWA(){

let nama =
document.getElementById(
"nama").value;

let wa =
document.getElementById(
"wa").value;

let pesan =
document.getElementById(
"pesan").value;

if(nama === "" ||
wa === ""){

alert(
"Isi dulu nama & nomor WA 😅"
);

return;

}

let text =

`Halo IKYY Studio 👋

Nama: ${nama}
WA: ${wa}
Layanan: ${layanan}

Pesan:
${pesan}`;

let url =

`https://wa.me/
6287710591220?text=${
encodeURIComponent(text)
}`;

window.open(url,"_blank");

}


// SMOOTH SCROLL ACTIVE
const links =
document.querySelectorAll(
"nav a"
);

links.forEach(link=>{

link.addEventListener(
"click",(e)=>{

e.preventDefault();

const target =
document.querySelector(
link.getAttribute("href")
);

target.scrollIntoView({

behavior:"smooth"

});

});

});


// POPUP WELCOME
setTimeout(()=>{

console.log(
"Welcome To IKYY Studio 🚀"
);

},1000);
// LIVE NOTIFICATION RANDOM
const notif =
document.getElementById(
"liveNotif");

const notifText = [

"🔥 Rizky baru order Website",
"💎 Andi baru order Logo",
"🚀 Fajar baru order Coding",
"⚡ Dimas baru order Landing Page",
"🎨 Kevin baru order UI Design"

];

setInterval(()=>{

let random =
Math.floor(
Math.random() *
notifText.length
);

notif.innerText =
notifText[random];

},4000);


// PORTFOLIO MODAL
const portfolioImages =
document.querySelectorAll(
".portfolio-card img"
);

const modal =
document.getElementById(
"portfolioModal"
);

const modalImg =
document.getElementById(
"modalImg"
);

const closeModal =
document.getElementById(
"closeModal"
);

portfolioImages.forEach(img=>{

img.addEventListener(
"click",()=>{

modal.style.display =
"flex";

modalImg.src =
img.src;

});

});

closeModal.onclick =
function(){

modal.style.display =
"none";

};


// RIPPLE EFFECT
const rippleButtons =
document.querySelectorAll(
".order-btn"
);

rippleButtons.forEach(btn=>{

btn.addEventListener(
"mousemove",(e)=>{

const x =
e.offsetX;

const y =
e.offsetY;

btn.style.setProperty(
"--x",
x + "px"
);

btn.style.setProperty(
"--y",
y + "px"
);

});

});


