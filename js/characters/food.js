/**
 * Created by Espen on 10/31/2015.
 */
function createFood(world, color, size){
    var size = size;
    var lifetime = 0;
    var timeofdeath = 30;
    var dead = false;
    var eaten = false;
    var x = Math.floor(world.width * Math.random())+size / 4;
    var y = Math.floor(world.height * Math.random()) + size / 4;
    var kill = function(){ dead = true;};
    var live = function(){ lifetime += 1;};
    var eat = function(){ eaten = true;};
    return {
        x : x,
        y : y,
        timeofdeath: function(){ return timeofdeath;},
        lifetime : function(){ return lifetime;},
        dead: function(){ return dead;},
        eaten : function(){ return eaten;},
        update : function(snake){
            console.log(lifetime);
            if(lifetime === timeofdeath){
                kill();
            } else {
                live();
            }
            var snakeXArea = snake.x + snake.size;
            var snakeYArea = snake.y + snake.size;
            var foodXArea = x + size;
            var foodYArea = y + size;
            var hitX = snakeXArea < x;
            var hitY = snakeYArea < y;
            var hitX2 = foodXArea < snake.x;
            var hitY2 = foodYArea < snake.y;
            if(!(hitX || hitY || hitX2 || hitY2)){
                eat();
                console.log('ate me ' + snakeXArea + ' ' + snakeYArea + ' ' + foodXArea + ' ' + foodYArea);
            }
        },
        render: function(ctx){
            ctx.fillStyle = color;
            ctx.fillRect(x, y, size, size)
        }
    }
}

