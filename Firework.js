function Firework() {
    this.x = Math.floor((Math.random() * width) + 1);
    this.y = Math.floor((Math.random() * 100) + height);
    this.vitesseX = Math.random();
    this.vitesseY = Math.floor((Math.random() * 4) + 4);
    this.couleur = "purple";
    this.lifespan = (Math.random() * 2) + 1;

    this.dessiner = function() {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        context.fillStyle = this.couleur;
        context.strokeStyle = this.couleur;
        dessinerCercle(this.x, this.y, 5);
    }

    this.bouger = function() {
        this.x -= this.vitesseX;
        this.y -= this.vitesseY;
        this.lifespan -= 1/30;
	if(this.lifespan <= 0) {
		this.exploser();
		this.couleur = "rgba(0,0,0,0)";
	}
    }

    this.isDead = function() {
        return (this.x < 0 || this.y < 0 || this.lifespan <= 0);
    }

    this.exploser = function() {
        for(var i=0; i<50; i++) {
            particules.push(new Particule(this.x, this.y));
        }
    }

}
