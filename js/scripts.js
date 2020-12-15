
let numList = [];

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
function clearFunc() {
    numList.length = 0;
    document.getElementById('calcDisplay').innerHTML = '';
}