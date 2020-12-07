
function displayHistory(){
    var history=document.getElementById("history").innerHTML;
    if(history==""){
        history="<p>No history yet!</p>";
    }
    if(document.getElementById("history").style.display=="none"){
        document.getElementById("history").style.display="block";
    }else{
        document.getElementById("history").style.display="none";
        if(history=="<p>No history yet!</p>"){
            history="";
        }
    }
}
var a,result,op,remove=false;
function addVal(text) {
    if(remove){
        document.getElementById("inp").value = text;
        remove=false;
    }else{
        document.getElementById("inp").value += text;
    }
}
function clearAll() {
    document.getElementById("inp").value = '';
    a = undefined;
    remove=false;
    op=undefined;
    result=undefined;
    if(document.getElementById("history").innerHTML!=""){
        document.getElementById("history").innerHTML+="<hr/>";
    }
}
function clearLast() {
    inpFieldVal = document.getElementById("inp").value;
    if(inpFieldVal.length==1){
        clearAll();
    }else {
        inpFieldVal = inpFieldVal.substring(0, inpFieldVal.length - 1);
        document.getElementById("inp").value = inpFieldVal;
    }
}
function operate(operator) {
    num=Number(document.getElementById("inp").value);
    document.getElementById("inp").value="";
    if(a===undefined){
        a=num;
        op=operator;
    }
    else{
        performOp(num);
        if(operator!="="){   
            op=operator;
        }
        document.getElementById("inp").value=result;
        a=result;
        remove=true;
        if(operator=="="){
            a=undefined;
            op=undefined;
        }
    }
}
function performOp(b) {
    if (op == '+') {
        result = a + b;
    } else if (op == '-') {
        result = a - b;
    } else if (op == '*') {
        result = a * b;
    } else if (op == '/') {
        result = a / b;
    } else if (op == '%') {
        result = a % b;
    }
    var operation = a + " "+op+" " + b + " = " + result;
    document.getElementById("history").innerHTML+=operation+"<br/>";
    console.log(operation);
}