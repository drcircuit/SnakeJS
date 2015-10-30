/**
 * Created by Espen on 10/11/2015.
 */
function SnakeSegment(x, y, size, color){
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
}
SnakeSegment.prototype.render = function(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
};
