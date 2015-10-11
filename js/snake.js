<<<<<<< HEAD
/**
 * Created by Espen on 11.10.2015.
 */
=======
/**
 * Created by Espen on 10/10/2015.
 */

/* constants */
const screenWidth = 600;
const screenHeight = 400;
const leftKey = 37;
const rightKey = 39;
const upKey =  38;
const downKey = 40;
const startKey =  32;
const backgroundColor = '#1010ff';
var started = false;
var commandKeys = {};

commandKeys[leftKey] = true;
commandKeys[rightKey] = true;
commandKeys[upKey] = true;
commandKeys[downKey] = true;

/* globals */
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
var controlKeys = {};
var world = new World(screenWidth, screenHeight, backgroundColor);

var animate = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function(callback){window.setTimeout(callback, 1000/60)};

var update = function(){

};
var render = function(){
    world.render(context);
};

var step = function (){
    update();
    render();
    animate(step);
};
canvas.width = world.width;
canvas.height = world.height;


window.onload = function(){
    canvas.style.width = world.width;
    canvas.style.height = world.height;
    document.body.appendChild(canvas);
    animate(step);
};
>>>>>>> gamebasics
