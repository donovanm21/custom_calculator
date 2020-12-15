/* Empty arry for all selected values and ops from calculator */
let numList = [];

/* Funtion to add values to array and produce the calculation */
function button(x) {
    if(x != '=') {
        let numAdd = numList.push(x);
        let calDisplay = numList.join('');
        document.getElementById('calcDisplay').innerHTML = calDisplay;
    } else {
        let sumNum = numList.join('');
        let sumTotal = eval(sumNum);
        document.getElementById('calcDisplay').innerHTML = sumTotal;
    }
}

/* The C (clear) function to reset dispplay without refresh */
function clearFunc() {
    numList.length = 0;
    document.getElementById('calcDisplay').innerHTML = '';
}