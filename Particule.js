function Particule(x, y) {
    this.x = x;
    this.y = y;
    this.vitesseX = Math.floor((Math.random() * 7) + 1) - Math.floor((Math.random() * 7) + 1);
    this.vitesseY = Math.floor((Math.random() * 7) + 1) - Math.floor((Math.random() * 7) + 1); 
    this.couleur = "rgba(" + Math.floor(Math.random() * 255) + "," +  Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ",";
    this.alpha = 1;

    this.dessiner = function() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.fillStyle = this.couleur + this.alpha + ")"; //Toutes les prochaines formes pleines seront rouges.
        context.strokeStyle = this.couleur + this.alpha + ")";
        dessinerCercle(this.x, this.y, 3);
    }

    this.bouger = function() {
        this.x -= this.vitesseX;
        this.y -= this.vitesseY;
        this.alpha -= 0.05;
    }

    this.isDead = function() {
        return (this.x < 0 || this.y < 0 || this.alpha <= 0 );
    }
}
