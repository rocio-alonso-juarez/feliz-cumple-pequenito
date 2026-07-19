/*====================================
        FELIZ CUMPLEAÑOS ❤️
        script.js
====================================*/

// Elementos

const intro = document.getElementById("intro");
const carta = document.getElementById("carta");
const musica = document.getElementById("musica");
const boton = document.getElementById("musicaBtn");

//====================================
// REPRODUCCIÓN DE MÚSICA
//====================================

let reproduciendo = false;

function iniciarMusica(){

    if(reproduciendo) return;

    musica.play().catch(()=>{});

    reproduciendo = true;

    boton.textContent="⏸️";

}

document.addEventListener("click", iniciarMusica,{once:true});

boton.addEventListener("click",()=>{

    if(musica.paused){

        musica.play();

        boton.textContent="⏸️";

    }else{

        musica.pause();

        boton.textContent="🎵";

    }

});

//====================================
// TRANSICIÓN A LA CARTA
//====================================

setTimeout(()=>{

    intro.style.transition="opacity 2s";

    intro.style.opacity="0";

},8000);

setTimeout(()=>{

    intro.style.display="none";

    carta.style.display="block";

    document.body.style.overflowY="auto";

},10000);

//====================================
// FUEGOS ARTIFICIALES
//====================================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

let w=canvas.width=window.innerWidth;

let h=canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

    w=canvas.width=window.innerWidth;

    h=canvas.height=window.innerHeight;

});

class Particle{

    constructor(x,y,color){

        this.x=x;

        this.y=y;

        this.color=color;

        this.radius=2+Math.random()*3;

        this.speedX=(Math.random()-0.5)*8;

        this.speedY=(Math.random()-0.5)*8;

        this.life=100;

    }

    update(){

        this.x+=this.speedX;

        this.y+=this.speedY;

        this.life--;

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        ctx.fillStyle=this.color;

        ctx.fill();

    }

}

let particles=[];

function explosion(){

    const x=Math.random()*w;

    const y=Math.random()*h*0.6;

    const colores=[

        "#FFD700",

        "#FF69B4",

        "#00E5FF",

        "#FFFFFF",

        "#FF6347"

    ];

    const color=colores[Math.floor(Math.random()*colores.length)];

    for(let i=0;i<80;i++){

        particles.push(new Particle(x,y,color));

    }

}

setInterval(explosion,1200);

function animate(){

    ctx.clearRect(0,0,w,h);

    particles.forEach((p,index)=>{

        p.update();

        p.draw();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animate);

}

animate();

//====================================
// EFECTO TÍTULO
//====================================

const titulo=document.querySelector(".titulo");

let brillo=true;

setInterval(()=>{

    if(brillo){

        titulo.style.textShadow="0 0 10px gold,0 0 40px gold";

    }else{

        titulo.style.textShadow="0 0 30px white";

    }

    brillo=!brillo;

},900);

//====================================
// EFECTO FRASE
//====================================

const frases=document.querySelectorAll(".frase,.frase2");

frases.forEach((f,i)=>{

    f.style.opacity="0";

    setTimeout(()=>{

        f.style.transition="2s";

        f.style.opacity="1";

    },1500+i*1200);

});
