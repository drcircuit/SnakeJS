/* constants */
var screenWidth = 600;
var screenHeight = 400;
var LEFT = 37;
var RIGHT = 39;
var UP =  38;
var DOWN = 40;
var startKey =  32;
var foodColor = 'red';
var backgroundColor = '#1010ff';
var started = false;
var commandKeys = [];
var frame = 0;
var controlKeys = [];
var foodSize = 10;
var score = 0;
controlKeys[LEFT] = true;
controlKeys[RIGHT] = true;
controlKeys[UP] = true;
controlKeys[DOWN] = true;


/* globals */
var context;

var world = new World(screenWidth, screenHeight, backgroundColor);
var food = createFood(world, foodColor, foodSize);
var snake = new Snake(screenWidth / 2, screenHeight / 2, 20,'mintcream');
var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback){window.setTimeout(callback, 1000/60)};

var update = function(snake){
    snake.move();
    food.update(snake);
    if(food.eaten()){
        food = createFood(world, foodColor, foodSize);
        snake.grow();
    }
    if(food.dead()){
        food = createFood(world, foodColor, foodSize);
    }
};
var render = function(){
    world.render(context);
    food.render(context);
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
            event.preventDefault();
        }
        return false;
    });
};