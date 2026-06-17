let current = 1;

window.onload = function(){

setTimeout(function(){

let loader = document.getElementById("loader");

if(loader){
loader.style.display = "none";
}

},3000);

};

function checkPass(){

let pass = document.getElementById("password").value;

if(pass === "2206"){

let music = document.getElementById("bgmusic");

if(music){
music.play();
}

document.getElementById("login").classList.remove("active");

document.getElementById("slide1").classList.add("active");

typeText();

restartProgress();

let slideTimer = setInterval(function(){

document.getElementById("slide" + current)
.classList.remove("active");

current++;

if(current > 12){

clearInterval(slideTimer);

for(let i=0;i<20;i++){

setTimeout(function(){

createFirework();

},i*300);

}

showFinalPage();

return;

}

document.getElementById("slide" + current)
.classList.add("active");

restartProgress();

},12000);

}else{

alert("Wrong Password ❤️");

}

}

function restartProgress(){

let bar = document.getElementById("progress");

bar.style.transition = "none";
bar.style.width = "0%";

void bar.offsetWidth;

bar.style.transition = "12s linear";
bar.style.width = "100%";

}

function typeText(){

let text = "Happy Birthday Mummy ❤️";

let i = 0;

let title = document.getElementById("typing");

title.innerHTML = "";

let typing = setInterval(function(){

if(i < text.length){

title.innerHTML += text.charAt(i);

i++;

}else{

clearInterval(typing);

}

},100);

} function createHeart(){

let heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.className = "heart";

heart.style.left = Math.random()*100 + "vw";

heart.style.fontSize = (20 + Math.random()*25) + "px";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},8000);

}

setInterval(createHeart,1000);

function createRose(){

let rose = document.createElement("div");

rose.innerHTML = "🌹";

rose.className = "rose";

rose.style.left = Math.random()*100 + "vw";

document.body.appendChild(rose);

setTimeout(function(){

rose.remove();

},10000);

}

setInterval(createRose,3000);

function createFirework(){

let firework = document.createElement("div");

let effects = ["💖","✨","🎊","❤️"];

firework.innerHTML =
effects[Math.floor(Math.random()*effects.length)];

firework.className = "firework";

firework.style.left = Math.random()*100 + "vw";

firework.style.top = Math.random()*100 + "vh";

document.body.appendChild(firework);

setTimeout(function(){

firework.remove();

},2000);

}

function appreciate(){

document.body.innerHTML = `

<div class="finalPage">

<h1>🌹 Why You're Special 🌹</h1>

<p>

❤️ Your endless love

<br><br>

❤️ Your sacrifices

<br><br>

❤️ Your kindness

<br><br>

❤️ Your patience

<br><br>

❤️ Your strength

<br><br>

❤️ Your support

<br><br>

❤️ Everything you do for our family

<br><br>

❤️ Simply being my Mummy

</p>

<button onclick="location.reload()">

❤️ Back

</button>

</div>

`;

}

function openGift(){

document.body.innerHTML = `

<div class="finalPage">

<h1>🎁 Birthday Gift 🎁</h1>

<p>

If I could choose my mother again,

<br><br>

I would still choose you.

<br><br>

Thank you for being my biggest blessing.

<br><br>

Love You Mummy ❤️

</p>

<button onclick="showFinalPage()">
❤️ Back
</button>

</div>

`;

}

function secretLetter(){

document.body.innerHTML = `

<div class="finalPage">

<h1>💌 Dear Mummy ❤️</h1>

<p>

Thank you for every sacrifice.

<br><br>

Thank you for every prayer.

<br><br>

Thank you for every lesson.

<br><br>

Everything I am today is because of your love.

<br><br>

I am lucky to have you as my mother.

<br><br>

Love,

<br><br>

Divyeraj ❤️

</p>

<button onclick="showFinalPage()">
❤️ Back
</button>

</div>

`;

                                    } function showFinalPage(){

document.body.innerHTML = `

<div class="finalPage">

<h1>🎂 Happy Birthday Mummy ❤️</h1>

<p>

Thank you for every smile.

<br><br>

Thank you for every sacrifice.

<br><br>

Thank you for every prayer.

<br><br>

Thank you for every lesson.

<br><br>

May this year bring happiness,

health,

peace,

and countless smiles.

<br><br>

Love,

<br><br>

Divyeraj ❤️

</p>

<br>

<button onclick="secretLetter()">
💌 Secret Letter
</button>

<br>

<button onclick="openGift()">
🎁 Birthday Gift
</button>

</div>

`;

setTimeout(showMemoryBook,30000);

}

function showMemoryBook(){

document.body.innerHTML = `

<div style="
background:#f8f0e3;
color:black;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:20px;
">

<h1>📖 Memory Book 📖</h1>

<p style="font-size:24px;">
Flip through some special memories ❤️
</p>

<button onclick="openBookPage1()">
📖 Open Memory Book
</button>
</div>

`;

}

function openBookPage1(){

document.body.innerHTML = `

<div style="
background:#f8f0e3;
color:black;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:20px;
">

<h1>📖 Memory Book - Page 1</h1>

<img src="IMG-20240512-WA0039.jpg"
style="
max-width:80%;
max-height:60vh;
border-radius:15px;
">

<p>
One of my favorite memories ❤️
</p>

<button onclick="openBookPage2()">
➡ Next Page
</button>

</div>

`;

}
function openBookPage2(){

document.body.innerHTML = `

<div style="
background:#f8f0e3;
color:black;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:20px;
">

<h1>📖 Memory Book - Page 2</h1>

<img src="IMG-20240512-WA0046.jpg"
style="
max-width:80%;
max-height:60vh;
border-radius:15px;
">

<p>
Thank you for always supporting me ❤️
</p>

<button onclick="openBookPage1()">
⬅ Previous Page
</button>

<br><br>

<button onclick="openBookPage3()">
➡ Next Page
</button>
</div>

`;

}
function openBookPage3(){

document.body.innerHTML = `

<div style="
background:#f8f0e3;
color:black;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
padding:20px;
">

<h1>📖 Memory Book - Page 3</h1>

<img src="IMG-20240623-WA0000.jpg"
style="
max-width:80%;
max-height:60vh;
border-radius:15px;
">

<p>
Your smile brightens every day ❤️
</p>

<button onclick="openBookPage2()">
⬅ Previous Page
</button>

<br><br>

<button onclick="showCredits()">
📖 Close Memory Book
</button>

</div>

`;

}
function showCredits(){

document.body.innerHTML = `

<div style="
background:black;
color:white;
height:100vh;
overflow:hidden;
position:relative;
">

<div class="credits">

<br><br><br><br><br>

🎬 Happy Birthday Mummy ❤️

<br><br>

Starring

<br><br>

Sushmitha ❤️

<br><br>

Special Thanks

<br><br>

For Every Sacrifice 🌹

<br><br>

For Every Prayer 🙏

<br><br>

For Every Smile ❤️

<br><br>

Directed By

<br><br>

Your Son

<br><br>

Divyeraj ❤️

<br><br>

The End 🌸

<br><br>

<button onclick="location.reload()">

🔄 Start Over

</button>

</div>

</div>

`;

}
