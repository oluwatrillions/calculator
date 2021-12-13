const numbers = document.querySelectorAll('.numbers')
const clearAll = document.getElementById('clear')
const deleteItem = document.querySelector('.delete')
const divide = document.querySelector('.divide')
const multiply = document.querySelector('.multiply')
const addition = document.querySelector('.addition')
const subtract = document.querySelector('.subtract')
const period = document.querySelector('.period')
const equal = document.getElementById('equal')
let firstOperand = document.querySelector('.firstDiv')
let secOperand = document.querySelector('.secDiv')
let computation;

const calculator = () => {
    updateOperand()
    addition.addEventListener('click', (firstOperand, secOperand) => {
       secOperand.textContent = firstOperand.textContent += secOperand.textContent
    })
}
calculator()

// function add(){
//     secOperand.textContent = firstOperand.textContent
//     secOperand.textContent = firstOperand.textContent += secOperand.textContent
// }

function updateOperand() {
    numbers.forEach(buttons => {
        buttons.addEventListener('click', () => {
            firstOperand.textContent = buttons.textContent.toString;
            secOperand.textContent = firstOperand.textContent
        })
    })   
}
updateOperand()

clearAll.addEventListener('click', () => {
    firstOperand.textContent = ''
    secOperand.textContent = ''
})

deleteItem.addEventListener('click', () => {
    firstOperand.textContent = firstOperand.textContent.toString().slice(0, -1)
})