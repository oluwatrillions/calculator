const numbers = document.querySelectorAll('.numbers')
const clearAll = document.getElementById('clear')
const deleteItem = document.querySelector('.delete')
const equal = document.getElementById('equal')
let total = document.querySelector('.firstDiv')
let operations = document.querySelector('.secDiv')
let computation;

function updateOperand() {
    numbers.forEach(buttons => {
        buttons.addEventListener('click', (e) => {
            // computation = e.target.dataset.num
            // operations.textContent += computation 
            operations.innerText += e.target.innerText
        })
    })   
}
updateOperand()

equal.addEventListener('click', function () {
    try {
        total.innerText = eval(operations.innerText)
        operations.innerText = total.innerText
    } catch {
        operations.innerText = 'Please enter a valid number'
    }
})

clearAll.addEventListener('click', () => {
    total.textContent = 0
    operations.textContent = ''
})

deleteItem.addEventListener('click', () => {
    operations.textContent = operations.textContent.slice(0, -1)
})