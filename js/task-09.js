function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const spanColor = document.querySelector('.color');
const button = document.querySelector('.change-color');
const backgroundColor = document.querySelector('body')

button.addEventListener('click', changeBackgroungColor)

function changeBackgroungColor() {
  const randomColor = getRandomHexColor()
  backgroundColor.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
}
