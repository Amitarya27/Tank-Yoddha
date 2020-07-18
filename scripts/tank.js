class Tank {

    constructor(img, x, y, w, h, player) {

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.img = img;
        this.player = player || false;
        this.speed = 3;
        this.a=0;
        this.fire = false;
        this.bullet = [];
    }

    render() {

        // rendering bullets
        for (let i = 0; i < this.bullet.length; i++) {
            let bult = this.bullet[i];
            ctx.save();
            ctx.translate(bult.x += bult.xVel, bult.y += bult.yVel);
            ctx.rotate(bult.a);
            //ctx.fillRect(-bult.w / 2, -bult.h / 2, bult.w, bult.h);
            ctx.drawImage(bult.img,-bult.w/2,-bult.h/2,bult.w,bult.h);
            ctx.restore();

            if(bult.x >= canv.width || bult.y >= canv.height || bult.y<=0 || bult.x<=0){
                this.bullet.splice(i,1);
            }

        }


        //TANK Render
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.a);
        ctx.drawImage(this.img, -this.w / 2, -this.h / 2, this.w, this.h);
        if(this.fire){
         ctx.drawImage(fire_img, -7.5, this.h/2, 15,30);
        }
        ctx.restore();

    }

    move() {

        /*left*/
        if (keys[37] && player.x > this.w / 2 || keys[65] && player.x >= this.w / 2) {
            player.x -= player.speed;
            this.a = game.deg2rad(90);
        }
        /*up */
        else if (keys[38] && player.y >= this.h / 2 || keys[87] && player.y >= this.h / 2) {
            player.y -= player.speed;
            this.a = game.deg2rad(-180);

        }
        //right
        else if (keys[39] && player.x + player.w / 2 <= canv.width || keys[68] && player.x + player.w / 2 <= canv.width) {
            player.x += player.speed;
            this.a = game.deg2rad(-90);

        }
        //down
        else if (keys[40] && player.y + player.h / 2 <= canv.height || keys[83] && player.y + player.h / 2 <= canv.height) {
            player.y += player.speed;
            this.a = game.deg2rad(0);

        }
    }

}