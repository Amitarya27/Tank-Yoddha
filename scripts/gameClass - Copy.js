class Game {
    constructor() {
        this.tile = [

            13, 2, 6, 2, 2, 2, 6, 2, 2, 14,
            1, 0, 1, 0, 0, 0, 1, 0, 0, 1,
            3, 2, 12, 2, 2, 2, 11, 2, 2, 4,
            1, 0, 1, 0, 0, 0, 1, 20, 20, 21,
            1, 0, 15, 6, 2, 2, 5, 34, 20, 21,
            1, 0, 0, 1, 7, 20, 20, 21, 20, 21,
            15, 2, 2, 5, 27, 22, 22, 25, 22, 36

        ];
        this.tileCount = 0;
        this.sX = 0;
        this.sY = 0;
        this.dX = 0;
        this.dY = 0;
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
        ctx.drawImage(bush,100,400,100,100);
        ctx.drawImage(bush,100,100,100,100);
        ctx.drawImage(bush,400,270,100,100);
        ctx.drawImage(small_bush,80,390,50,50);
        ctx.drawImage(bush,100,400,100,100);
        ctx.drawImage(lakdi,300,300,30,30);


        ctx.restore();
    }
}