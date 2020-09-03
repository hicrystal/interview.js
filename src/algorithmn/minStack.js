
let stack1 = [];
let stack2 = []; 
function push(node)
{
    stack1.push(node);
    if(stack2.length === 0){
        stack2.push(node);
    }else if(stack2.top() >= node){
        stack2.push(node);
    }
}
function pop()
{
    if(stack2.top=== stack1.top){
        stack2.pop();
    }
    stack1.pop();// write code here
}
function top(stack)
{
    return stack[stack.length-1];// write code here
}
function min()
{
    return top(stack2);// write code here
}
