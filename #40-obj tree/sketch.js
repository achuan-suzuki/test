
// main:
//     1setup enviorment
// 2create first branch(root)(need vector start and  end)
// 3add array tree and push root into it

let root;
let tree=[];
let counter=0;
let leaves=[];
function setup() {
    createCanvas(600,600);
    let start=createVector(width/2,height);
    let end=createVector(width/2,height-100);
    root=new Branch(start,end);
    tree.push(root);

}
function mousePressed(){
    // 4add function mousePressed
// (0)loop through the tree backwards and call branch to create new branch  twice with two direction angle and add it into tree(draw too many times first two branches)
for(let i=tree.length-1;i>=0;i--){
    let right=tree[i].branch(PI/5);
    let left=tree[i].branch(-PI/4);
    tree.push(right);
    tree.push(left);
    tree[i].finished=true;
}
// (1)after create two branch set its finished as true
// (2)add a counter to count the times of generation
// (3)when counter==6 ,then loop through the tree
// (4)find out unfinished branches and store their end into an array leaves
//
counter++;
if(counter===6){
    for(let i=0;i<tree.length;i++){
        if(!tree[i].finished){
           leaves.push(tree[i].end.copy()) ;
        }
    }
}
}

function draw() {
background(0);
// 5 in draw
// (1)loop through the tree and call show
    for(let i=0;i<tree.length;i++){
        tree[i].show();
    }
// (2)loop through and draw the leaves as ellipse
    for(let i=0;i<leaves.length;i++){
        fill(255,0,0,100);
        noStroke();
        ellipse(leaves[i].x,leaves[i].y,8,8);
        leaves[i].y+=random(2);
        leaves[i].x+=random(0.1);
    }
// (3)make leaves fall(add ranom to the y value of leaves)
}





