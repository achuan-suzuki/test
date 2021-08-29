//
// branch(constructor function branch(start,end)):
// 1 add reference in index
// 2 add field start , end,finished(false) and initiate them
// 3add function show
// (1)add white stroke
// (2) draw a line from start to end

function Branch(start,end){
    this.start=start;
    this.end=end;
    this.finished=false;
    this.show=function (){
        stroke(255);
        line(this.start.x,this.start.y,this.end.x,this.end.y);
    }
    // 4add function branch
// (0)create dir vector which from start to end
// (1)rotate the dir vector at random angle
// (2)caculate new start(end of current) ,new end(add end to dir)
// (3)create a new branch with newstart and end
// (4)return the branch
    this.branch=function (angle){
        let dir=p5.Vector.sub(end,start);
        dir.rotate(angle);
        dir.mult(0.67);
        let newStart=end.copy();
        let newEnd=p5.Vector.add(end,dir);
        return new Branch(newStart,newEnd);

    }
}