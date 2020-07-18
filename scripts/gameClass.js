class Game {
    constructor() {
        this.tile = [

            3, 2, 2, 2, 2, 2, 6, 2, 2, 2,
            1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
            3, 2, 6, 2, 2, 2, 11, 2, 2, 6,
            1, 0, 1, 0, 0, 0, 1, 0, 0, 1,
            1, 0, 15, 6, 2, 2, 5, 14, 0, 1,
            1, 0, 0, 1, 0, 0, 0, 15, 2, 11,
            3, 2, 2, 5, 2, 2, 2, 2, 2, 5

        ];

        //tile values
        this.tileCount = 0;
        this.sX = 0;
        this.sY = 0;
        this.dX = 0;    
        this.dY = 0;

        this.col_Obj = [
            {x:100, y:100, w:100, h:100}

        ] ;



    }

    deg2rad(deg) {
        return deg * Math.PI / 180;
    }
    
    render_world() {
        ctx.save();


        for (let i = this.tile.length; i > -1; --i) {

            this.sX = (this.tile[i] % 10) * 128;
            this.sY = Math.floor(this.tile[i] / 10) * 128;

            this.dX = (i % 10) * 100;
            this.dY = Math.floor(i / 10) * 100;
            ctx.drawImage(bg_tileSet, this.sX, this.sY, 128, 128, this.dX, this.dY, 100, 100);


        }
        ctx.restore();

        ctx.save();
        ctx.drawImage(bush,510,350,50,50);
        ctx.drawImage(bush,110,110,80,80);
        ctx.drawImage(bush,400,270,80,80);
        ctx.drawImage(small_bush,80,390,50,50);
        ctx.drawImage(bush,100,400,100,100);
        ctx.drawImage(lakdi,300,300,30,30);
        ctx.restore();


        //gates
        ctx.save();
        ctx.translate(1010,160)
        ctx.rotate(game.deg2rad(90));
        ctx.drawImage(gate,90/2,18/2,90,18);
        ctx.restore();

        ctx.save();
        ctx.translate(1010,-40)
        ctx.rotate(game.deg2rad(90));
        ctx.drawImage(gate,90/2,18/2,90,18);
        ctx.restore();

        ctx.save();
        ctx.translate(1010,460)
        ctx.rotate(game.deg2rad(90));
        ctx.drawImage(gate,90/2,18/2,90,18);
        ctx.restore();


    }
}