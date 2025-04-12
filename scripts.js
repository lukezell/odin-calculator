const clear = document.querySelector("#clear");
const negate = document.querySelector("#negate");
const percent = document.querySelector("#percent");

const divide = document.querySelector("#divide");
const multiply = document.querySelector("#multiply");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");

const equals = document.querySelector("#equals");

const numZero = document.querySelector("#numZero");
const numOne = document.querySelector("#numOne");
const numTwo = document.querySelector("#numTwo");
const numThree = document.querySelector("#numThree");
const numFour = document.querySelector("#numFour");
const numFive = document.querySelector("#numFive");
const numSix = document.querySelector("#numSix");
const numSeven = document.querySelector("#numSeven");
const numEight = document.querySelector("#numEight");
const numNine = document.querySelector("#numNine");

const displayNum = document.querySelector("#displayNum");

let num1 = 0;
let num2 = 0;

//displayNum.textContent = `${num1}`;

function setOperands(numInput) {
    if (num1 === 0) {
        num1 = numInput;
    } else {
        num1 = Number(`${num1}${numInput}`);
    }
    displayNum.textContent = `${num1}`;
}

clear.addEventListener("click", () => {num1=0; displayNum.textContent = `${num1}`;});

numZero.addEventListener("click", () => {setOperands(0)});
numOne.addEventListener("click", () => {setOperands(1)});
numTwo.addEventListener("click", () => {setOperands(2)});
numThree.addEventListener("click", () => {setOperands(3)});
numFour.addEventListener("click", () => {setOperands(4)});
numFive.addEventListener("click", () => {setOperands(5)});
numSix.addEventListener("click", () => {setOperands(6)});
numSeven.addEventListener("click", () => {setOperands(7)});
numEight.addEventListener("click", () => {setOperands(8)});
numNine.addEventListener("click", () => {setOperands(9)});