// Link - https://www.hackerrank.com/challenges/queue-using-two-stacks/problem
// Queue using Two Stacks
/* input will be in the form of 
10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2 
That is 
"10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2"
We need to parse it so as to get the individual elements
*/
function processData(input) {
    //Enter your code here
    var stack1 = [];
    var stack2 = [];
    var arr = input.split("\n");
    // length of the input. 
    var l = arr[0]; //10
    // heads contain the solution in array. 
    var heads = [];
    
    for(i=1;i<=l;i++){
        // 1 42
        // 2
        // 1 14
        var a = arr[i].split(" "); // so 1 42 will be ["1","42"]
        var typeOfOp = parseInt(a[0]);// 1
        if(typeOfOp == 1){
           stack1.push(a[1]);
        }else if(typeOfOp == 2){
            // stack2 will always contain the first elements
            // so if stack2 is not empty, then there is no need to push elements from
            // stack1 to stack2
            if(stack2.length > 0){
                stack2.pop();
            }else{
                // move elements from stack1 to stack2
                while(stack1.length != 0){
                    stack2.push(stack1.pop());
                }
                stack2.pop();
            }
        }else{
            // stack2 will always contain the first elements
            // so if stack2 is not empty, then there is no need to push elements from
            // stack1 to stack2
            if(stack2.length > 0){
                // pop, get the element, and again push
                // equivalent to peek
                var elem = stack2.pop();
                heads.push(elem);
                stack2.push(elem);
            }else{
                // move elements from stack1 to stack2
                while(stack1.length != 0){
                    stack2.push(stack1.pop());
                }
                var elem = stack2.pop();
                heads.push(elem);
                stack2.push(elem);
            }
        }   
    }
    // print all the elements
    for(i=0;i<heads.length;i++){
        console.log(heads[i]);
    }
}         
