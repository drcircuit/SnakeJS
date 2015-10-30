/**
 * Created by Espen on 10/10/2015.
 */
function World(width, height, background){
    this.width = width;
    this.height = height;
    this.background = background;
}

World.prototype.render = function(ctx){
    ctx.fillStyle = this.background;
    ctx.fillRect(0,0,this.width, this.height);
};
World.prototype.create = function(doc) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = this.width;
    canvas.height= this.height;
    canvas.style.width = this.width;
    canvas.style.height = this.height;
    doc.body.appendChild(canvas);
    return context;
}