const numbers = document.querySelectorAll('.numbers')
const assignments = document.querySelectorAll('.assignment')
const clearAll = document.getElementById('clear')
const deleteItem = document.querySelector('.delete')
const equal = document.getElementById('equal')
let total = document.querySelector('.firstDiv')
let operations = document.querySelector('.secDiv')
let tempDisplay = ''
let totalDisplay = ''
let result = null
let nextOperation = ''
let dot = false;

function updateOperand() {
    numbers.forEach(buttons => {
        buttons.addEventListener('click', (e) => {
            // computation = e.target.dataset.num
            // operations.textContent += computation 
            // operations.innerText += e.target.innerText
            if (e.target.innerText === '.' && !dot) {
                dot = true;
            } else if (e.target.innerText === '.' && dot) {
                return;
            }

            totalDisplay += e.target.innerText
            total.innerText = totalDisplay
        })
    })   
}
updateOperand()

assignments.forEach(keys => {
    keys.addEventListener('click', (e) => {
        if (!totalDisplay)
            return;
        dot = false;
        const operator = e.target.innerText
        if (tempDisplay && totalDisplay && nextOperation) {
            computation();
        } else {
            result = parseFloat(totalDisplay)
            total.innerText = result
        }
        console.log(result);
        tempDisplay += (totalDisplay + ' ' + operator) 
        operations.innerText = tempDisplay
        total.innerText = ''
        totalDisplay = ''
        total.innerText = result
        nextOperation = operator
        
    })
})

const computation = () => {
    if (nextOperation === '/') {
        result = parseFloat(result) / parseFloat(totalDisplay)
    } else if (nextOperation === '*') {
        result = parseFloat(result) * parseFloat(totalDisplay)
    } else if (nextOperation === '+') {
        result = parseFloat(result) + parseFloat(totalDisplay)
    } else {
        result = parseFloat(result) - parseFloat(totalDisplay)
    }
};

equal.addEventListener('click', () => {
    if (!tempDisplay || !totalDisplay)
        return;
    dot = false
    computation()
    
    operations.innerText += totalDisplay
    result = eval(operations.innerText)
    
    total.innerText = result
    totalDisplay = result
    tempDisplay = ''


})

clearAll.addEventListener('click', () => {
    total.textContent = 0
    operations.textContent = 0
    tempDisplay = ""
    totalDisplay = ''
    total.innerText = ''
})

deleteItem.addEventListener('click', () => {
    operations.textContent = operations.textContent.slice(0, -1)
})