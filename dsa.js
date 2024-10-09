let arraySize = parseInt(prompt('Enter the array size:'), 10);
if (isNaN(arraySize) || arraySize <= 0) {
  alert('Invalid array size. Using default size of 10.');
  arraySize = 10;
}

const array = new Array(arraySize).fill('');
let top1 = -1;
let top2 = arraySize;

const stack1Elem = document.getElementById('stack1');
const stack2Elem = document.getElementById('stack2');
const arrayElem = document.getElementById('array');
const inputElem = document.getElementById('input');
const push1Btn = document.getElementById('push1');
const push2Btn = document.getElementById('push2');
const pop1Btn = document.getElementById('pop1');
const pop2Btn = document.getElementById('pop2');

push1Btn.addEventListener('click', () => {
  const value = inputElem.value;
  if (value && top1 < arraySize - 1 && top1 < top2 - 1) {
    top1++;
    array[top1] = value;
    animatePush1();
    inputElem.value = '';
    displayArray();
  } else {
    alert('Stack 1 is full!');
  }
});

push2Btn.addEventListener('click', () => {
  const value = inputElem.value;
  if (value && top2 > 0 && top2 > top1 + 1) {
    top2--;
    array[top2] = value;
    animatePush2();
    inputElem.value = '';
    displayArray();
  } else {
    alert('Stack 2 is full!');
  }
});

pop1Btn.addEventListener('click', () => {
  if (top1 >= 0) {
    const poppedValue = array[top1];
    top1--;
    array[top1 + 1] = '';
    animatePop1();
    alert(`Popped value from Stack 1: ${poppedValue}`);
    displayArray();
  } else {
    alert('Stack 1 is empty!');
  }
});

pop2Btn.addEventListener('click', () => {
  if (top2 < arraySize) {
    const poppedValue = array[top2];
    top2++;
    array[top2 - 1] = '';
    animatePop2();
    alert(`Popped value from Stack 2: ${poppedValue}`);
    displayArray();
  } else {
    alert('Stack 2 is empty!');
  }
});

function animatePush1() {
  const element = document.createElement('div');
  element.className = 'stack-element';
  element.textContent = array[top1];
  stack1Elem.insertBefore(element, stack1Elem.firstChild);
}

function animatePush2() {
  const element = document.createElement('div');
  element.className = 'stack-element';
  element.textContent = array[top2];
  stack2Elem.insertBefore(element, stack2Elem.firstChild);
}


function animatePop1() {
  stack1Elem.removeChild(stack1Elem.firstChild);
}

function animatePop2() {
  stack2Elem.removeChild(stack2Elem.lastChild);
}

function displayArray() {
  arrayElem.innerHTML = '';
  for (let i = 0; i < arraySize; i++) {
    const element = document.createElement('div');
    element.className = 'array-element';
    const valueElement = document.createElement('span');
    valueElement.textContent = array[i];
    const indexElement = document.createElement('span');
    indexElement.className = 'array-index';
    indexElement.textContent = i;
    element.appendChild(valueElement);
    element.appendChild(indexElement);
    arrayElem.appendChild(element);
  }
}


displayArray();
