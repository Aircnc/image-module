
var Tree = class {
  constructor(val) {
    this.value = val;
    this.chidlren = [];
  }
};


var addChild = (node, value) => {
    let randomVal = Math.floor(Math.random() * 10);
    let newChild = new Tree(randomVal);
    node.chidlren.push(newChild);	
    return newChild;
};


var root = new Tree(5);

for (let i = 0; i < 2; i++) {
    var newChild = addChild(root);

    for (var j = 0; j < 2; j++) {
        var anotherNewChild = addChild(newChild);
    }
}


var hasPathToSum = function(node, targetSum) {
  
    let hasPath = false;

     var traverseTree = (node, total) => {
    
     total += node.value;

     if (total === targetSum) {
         hasPath = true;
         return;

     } else {

        if (total < targetSum) {            
            node.chidlren.forEach( (child) => {
            traverseTree(child, total); 
            if (hasPath) return;
           
            });

        } else if (total > targetSum) {
            return false;
        }


     }


       
     };

    debugger;
     traverseTree(node,0);
     return hasPath;

};