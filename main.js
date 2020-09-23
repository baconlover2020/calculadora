let previousOperand = document.querySelector('.previousOperand');
let currentOperand = document.querySelector('.currentOperand');
let numberButtons = document.querySelectorAll('.numberButton');
let operatorButton = document.querySelectorAll('.operator');
let equals = document.querySelector('.equals');
let clear = document.querySelector('.clear');
let currentOperator = '';

numberButtons.forEach(number =>{
    number.addEventListener('click',function(){
        if(number.value == '.' && currentOperand.textContent.includes('.')){

        }
        else{
            currentOperand.textContent += this.value;
        }
    })
})

operatorButton.forEach(operator =>{
    operator.addEventListener('click',function(){
        currentOperator = operator.value;
        previousOperand.textContent = currentOperand.textContent + currentOperator;
        currentOperand.textContent = '';
    })
})

clear.addEventListener('click',function(){
    currentOperand.textContent = ' ';
    previousOperand.textContent = ' ';
})

equals.addEventListener('click',function(){
    switch(currentOperator){
        case '+': currentOperand.textContent = parseFloat(previousOperand.textContent) + parseFloat(currentOperand.textContent);
        break;
        case '-': currentOperand.textContent = parseFloat(previousOperand.textContent) - parseFloat(currentOperand.textContent)
        break;
        case 'X': currentOperand.textContent = parseFloat(previousOperand.textContent) * parseFloat(currentOperand.textContent)
        break;
        case '/': currentOperand.textContent = parseFloat(previousOperand.textContent) / parseFloat(currentOperand.textContent)
        break;
    }
    previousOperand.textContent = '';
})