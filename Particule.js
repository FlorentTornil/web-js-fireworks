function Particule(x, y) {
    this.x = x;
    this.y = y;
    this.vitesseX = Math.floor((Math.random() * 10) + 1) - Math.floor((Math.random() * 10) + 1);
    this.vitesseY = Math.floor((Math.random() * 10) + 1) - Math.floor((Math.random() * 10) + 1); 
    this.couleur = "rgba(0,0,255,1)";
    this.alpha = 1;

    this.dessiner = function() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.fillStyle = this.couleur; //Toutes les prochaines formes pleines seront rouges.
        context.strokeStyle = this.couleur;
        dessinerCercle(this.x, this.y, 2);
    }

    this.bouger = function() {
        this.x -= this.vitesseX;
        this.y -= this.vitesseY;
        this.alpha -= 0.05;
        this.couleur = "rgba(0,0,255," + this.alpha + ")";
    }

    this.isDead = function() {
        return (this.x < 0 || this.y < 0 || this.alpha <= 0 );
    }
}