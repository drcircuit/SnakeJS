/* constants */
var screenWidth = 600;
var screenHeight = 400;
var LEFT = 37;
var RIGHT = 39;
var UP =  38;
var DOWN = 40;
var startKey =  32;
var backgroundColor = '#1010ff';
var started = false;
var commandKeys = [];
var frame = 0;
var controlKeys = [];
controlKeys[LEFT] = true;
controlKeys[RIGHT] = true;
controlKeys[UP] = true;
controlKeys[DOWN] = true;

/* globals */
var context;

var world = new World(screenWidth, screenHeight, backgroundColor);
var snake = new Snake(screenWidth / 2, screenHeight / 2, 20,'mintcream');
var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback){window.setTimeout(callback, 1000/60)};

var update = function(snake){
    snake.move();
};
var render = function(){
    world.render(context);
    snake.render(context);
};

var step = function (){
    if(frame === 10){
        update(snake);
        render();
        frame = 0;
    }
    animate(step);
    frame += 1;
};

window.onload = function(){
    context = world.create(document);

    animate(step);
    window.addEventListener('keydown', function(event){
        if(controlKeys[event.keyCode]){
            snake.setDirection(event.keyCode);
        }
        if(event.keyCode === 32){
            snake.eating = true;
            snake.grow();
            console.log('grower and shower...'+snake.tail.length);
        }
        return false;
    });
};