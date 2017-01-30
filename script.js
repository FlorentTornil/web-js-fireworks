fireworks = new Array();
particules = new Array();

function commencer() {
    creerCanvas();
    var myInterval = setInterval(animer, 1000/30);
}

function genererFireworks() {
    for( var i=0; i<10; i++) {
        genererFirework();
    }
}

function genererFirework() {
    fireworks.push(new Firework());
}

function animer() {
    effacerTout();
    enleverMorts();
    for(var i=0; i<fireworks.length; i++) {
		if(!fireworks[i].isDead()) {
    		fireworks[i].bouger();
     		fireworks[i].dessiner();
		}
    }
    for(var i=0; i<particules.length; i++) {
        particules[i].bouger();
        particules[i].dessiner();
    }
}

function enleverMorts() {
    enleverFireworks();
    enleverParticules();
}

function enleverFireworks() {
    if(fireworks.length > 0 && fireworks[0].isDead()) {
        fireworks.shift();
        genererFirework();
        enleverFireworks();
    }
}

function enleverParticules() {
    if(particules.length > 0 && particules[0].isDead()) {
        particules.shift();
        enleverParticules();
    }
}
