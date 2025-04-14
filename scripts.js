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
let operation = "";
let opCounter = 0;
let resetAns = false;

//displayNum.textContent = `${num1}`;

function whiteButtons () {
    divide.style.outlineColor = "#fff";
    multiply.style.outlineColor = "#fff";
    minus.style.outlineColor = "#fff";
    plus.style.outlineColor = "#fff";
}

function setOperands(numInput) {
    if (opCounter === 0) {
        if (num1 === 0 || resetAns) {
            num1 = numInput;
            resetAns = false;
        } else {
            num1 = Number(`${num1}${numInput}`);
        }
        displayNum.textContent = `${num1}`.substring(0, 15);
    } else {
        if (num2 === 0) {
            num2 = numInput;
        } else {
            num2 = Number(`${num2}${numInput}`);
        }
        displayNum.textContent = `${num2}`.substring(0, 15);
    }
}

function getAnswer() {
    if (opCounter === 1) {
        if (operation == "divide") {
            num1 = num1 / num2;
        } else if (operation == "multiply") {
            num1 = num1 * num2;
        } else if (operation == "add") {
            num1 = num1 + num2;
        } else if (operation == "subtract") {
            num1 = num1 - num2;
        }
        num2 = 0;
        displayNum.textContent = `${num1}`.substring(0, 15);
        resetAns = true;
    }
}

clear.addEventListener("click", () => {
    num1=0;
    num2=0;
    operation = "";
    opCounter = 0;
    whiteButtons ();
    displayNum.textContent = `${num1}`.substring(0, 15);
});

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

divide.addEventListener("click", () => {
    if (opCounter === 0) {
        operation = "divide";
        divide.style.outlineColor = "#75525A";
        opCounter = 1;
    } else {
        getAnswer();
        whiteButtons ();
        divide.style.outlineColor = "#75525A";
        operation = "divide";
    }
});
multiply.addEventListener("click", () => {
    if (opCounter === 0) {
        operation = "multiply";
        multiply.style.outlineColor = "#75525A";
        opCounter = 1;
    } else {
        getAnswer();
        whiteButtons ();
        multiply.style.outlineColor = "#75525A";
        operation = "multiply";
    }
});
minus.addEventListener("click", () => {
    if (opCounter === 0) {
        operation = "subtract";
        minus.style.outlineColor = "#75525A";
        opCounter = 1;
    } else {
        getAnswer();
        whiteButtons ();
        minus.style.outlineColor = "#75525A";
        operation = "subtract";
    }
});
plus.addEventListener("click", () => {
    if (opCounter === 0) {
        operation = "add";
        plus.style.outlineColor = "#75525A";
        opCounter = 1;
    } else {
        getAnswer();
        whiteButtons ();
        plus.style.outlineColor = "#75525A";
        operation = "add";
    }
});

equals.addEventListener("click", () => {
    getAnswer();
    whiteButtons ();
    opCounter = 0;
});