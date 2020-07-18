const canv = document.querySelector('#canv');
const ctx = canv.getContext('2d');

canv.width = 1000;
canv.height = 700;

let keys = [];
const game = new Game();
const player = new Tank(tank_img1,50,100,40,50,true);

//const player1 = new Tank(tank_img1,100,200,40,50,true);


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canv.width,canv.height);
    game.render_world();
    player.render();
    player.move();
    // player1.render();
    // player1.move();
}
animate();