const button1Element = document.querySelector('.one');
const button2Element = document.querySelector('.two');
const button3Element = document.querySelector('.three');
const button4Element = document.querySelector('.four');
const button5Element = document.querySelector('.five');
const button6Element = document.querySelector('.six');
const button7Element = document.querySelector('.seven');
const button8Element = document.querySelector('.eight');
const button9Element = document.querySelector('.nine');
const button0Element = document.querySelector('.zero');
const buttonPlusElement= document.querySelector('.plus');
const buttonMinusElement = document.querySelector('.minus');
const buttonMultiplyElement = document.querySelector('.multiply');
const buttonDivideElement = document.querySelector('.divide');
const buttonEqualElement = document.querySelector('.equal');
const buttonDecimalElement = document.querySelector('.decimal');
const buttonClearElement = document.querySelector('.clear');
const displayText = document.querySelector('.display');

let calculation='';

button1Element.addEventListener('click',
    () =>
        {
            calculation+=1;
            displayText.innerText+="1";
        });

button2Element.addEventListener('click',
    () =>
        {
            calculation+=2;
            displayText.innerText+="2";
        });

button3Element.addEventListener('click',
    () =>
        {
            calculation+=3;
            displayText.innerText+="3";
        });

button4Element.addEventListener('click',
    () =>
        {
            calculation+=4;
            displayText.innerText+="4";
        });

button5Element.addEventListener('click',
    () =>
        {
            calculation+=5;
            displayText.innerText+="5";
        });

button6Element.addEventListener('click',
    () =>
        {
            calculation+=6;
            displayText.innerText+="6";
        });

button7Element.addEventListener('click',
    () =>
        {
            calculation+=7;
            displayText.innerText+="7";
        });

button8Element.addEventListener('click',
    () =>
        {
            calculation+=8;
            displayText.innerText+="8";
        });

button9Element.addEventListener('click',
    () =>
        {
            calculation+=9;
            displayText.innerText+="9";
        });

button0Element.addEventListener('click',
    () =>
        {
            calculation+=0;
            displayText.innerText+="0";
        });

buttonPlusElement.addEventListener('click',
    () =>
        {
            calculation+=' + ';
            displayText.innerText+=" + ";
            displayText.innerText+=' ';
        });

buttonMinusElement.addEventListener('click',
    () =>
        {
            calculation+=' - ';
            displayText.innerText+=" - ";
        });

buttonMultiplyElement.addEventListener('click',
    () =>
        {
            calculation+=' * ';
            displayText.innerText+=" *  ";
        });

buttonDivideElement.addEventListener('click',
    () =>
        {
            calculation+=' / ';
            displayText.innerText+=" /  ";
        });

buttonDecimalElement.addEventListener('click',
    () =>
        {
            calculation+='.';
            displayText.innerText+=".";
        });


buttonEqualElement.addEventListener('click',
    () =>
        {
            calculation=eval(calculation);
            displayText.innerText=calculation;
        });

buttonClearElement.addEventListener('click',
    () =>
        {
            displayText.innerText="";
            calculation='';
        });
