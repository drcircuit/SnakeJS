/**
 * Created by Espen on 10/11/2015.
 */
function Snake(startX, startY, size, color){
    this.tail = [];
    this.x = startX;
    this.y = startY;
    this.size = size;
    this.snakeColor = color;
    this.speed = 1;
    this.incX = 0;
    this.incY = 1;
    this.eating = false;
}

Snake.prototype.render = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
};
Snake.prototype.setDirection = function(direction){
    switch(direction){
        case LEFT:
            this.incX = -1 * this.speed;
            this.incY = 0;
            break;
        case RIGHT:
            this.incX = 1 * this.speed;
            this.incY = 0;
            break;
        case UP:
            this.incX = 0;
            this.incY = -1 * this.speed;
            break;
        case DOWN:
            this.incX = 0;
            this.incY = 1 * this.speed;
    }
};
Snake.prototype.grow = function(){
    var x = (this.tail.length > 0) ? this.tail[0].x + (this.size-1) * this.incX : this.x;
    var y = (this.tail.length > 0) ? this.tail[0].y + (this.size-1) * this.incY : this.y;
   this.tail.unshift(new SnakeSegment(this.x, this.y, this.size, this.color));
};
Snake.prototype.move = function(){
    var nextX = this.x;
    var nextY = this.y;
    this.x += this.incX + (this.size-1) * this.incX;
    this.y += this.incY + (this.size-1) * this.incY;
    if(this.x < 0 - this.size){
        this.x = world.width + this.size;
    } else if(this.x > world.width + this.size){
        this.x = 0 - this.size;
    } else if (this.y < 0 - this.size){
        this.y = world.height + this.size;
} else if (this.y > world.height + this.size){
        this.y = 0 - this.size;
    }

    if(!this.eating){
        this.tail.pop();
    }
    this.eating = false;
    this.grow();
    this.tail.forEach(function(segment, index, segments){
        var prevX = segment.x;
        var prevY = segment.y;
        segment.x = nextX;
        segment.y = nextY;
        nextX = prevX;
        nextY = prevY;
    });
};
Snake.prototype.render = function(ctx){
    ctx.fillStyle = this.snakeColor;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    this.tail.forEach(function(segment, index, segments){
        segment.render(ctx);
    });
};