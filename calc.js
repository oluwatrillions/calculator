const numbers = document.querySelectorAll('.numbers')
const clearAll = document.getElementById('clear')
const deleteItem = document.querySelector('.delete')
const equal = document.getElementById('equal')
let total = document.querySelector('.firstDiv')
let operations = document.querySelector('.secDiv')
let computation;
let prev;
let next;

// const calculator = () => {
//     updateOperand()
//     // addition.addEventListener('click', (total, operations) => {
//     //    operations.textContent = total.textContent += operations.textContent
//     // })
// }
// calculator()
// const update = () => {
//     assignments.forEach(item => {
//         item.addEventListener('click', function () {
//             if (item.innerText = '/') {
//                 total = prev.textContent / next.textContent
//             } else if (item.innerText = '*') {
//                 total = prev.textContent * next.textContent
//             } else if (item.innerText = '+') {
//                 total = prev.textContent + next.textContent
//             } else {
//                 total = prev.textContent - next.textContent
//             }
//         })
//     })
//     update();
// }


// function add(){
//     operations.textContent = total.textContent
//     operations.textContent = total.textContent += operations.textContent
// }

function updateOperand() {
    numbers.forEach(buttons => {
        buttons.addEventListener('click', (e) => {
            computation = e.target.dataset.num
            operations.textContent += computation
        })
    })   
}
updateOperand()

equal.addEventListener('click', function () {
    if (operations.value === 0) {
        return 0
    } else {
        total = eval(operations.value)
        total = total
    }
})

clearAll.addEventListener('click', () => {
    total.textContent = 0
    operations.textContent = 0
})

deleteItem.addEventListener('click', () => {
    total.textContent = total.textContent.toString().slice(0, -1)
})