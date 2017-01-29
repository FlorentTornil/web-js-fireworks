width = 700;
height = 500;

function dessinerCercle(x, y, taille) {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(x, y, taille, 0, Math.PI*2);
    context.fill();
    context.closePath();
}

function creerCanvas() {
    var canvas = document.getElementById('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = "grey";
}

function effacerTout() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}