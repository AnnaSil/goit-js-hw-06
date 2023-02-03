const decrementButton = document.querySelector("[data-action=decrement]");

const incrementButton = document.querySelector("[data-action=increment]");

const value = document.querySelector('#value')

let counterValue = 0;


const increaseValue = () => {
    counterValue += 1
    value.textContent = counterValue
}

const decreaseValue = () => {
    counterValue -= 1
    value.textContent = counterValue
}

decrementButton.addEventListener('click', decreaseValue)
incrementButton.addEventListener('click', increaseValue)