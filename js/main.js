const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

//радіокнопка
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

// чекбокс

const ceilings = document.querySelectorAll('input[name="ceiling"]');
const walls = document.querySelectorAll('input[name="walls"]');
const floor = document.querySelectorAll('input[name="floor]');

// цена

const basePrice = 6000;
const totalPriceElement = document.querySelector('#total-price');

// ползунок

squareRange.addEventListener('input', function () {
  squareInput.value = squareRange.value;

})

// подія на кнопку

squareInput.addEventListener('input', function () {
  squareRange.value = squareInput.value;
})

//повна ціна ремонту

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);


  for (const radio of radioType) {
    if (radio.checked === true) {

      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  for (const radio of radioBuilding) {
    if (radio.checked === true) {

      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  for (const radio of radioRooms) {
    if (radio.checked === true) {

      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  

  const formatter = new Intl.NumberFormat('ru');
  totalPriceElement.innerText = formatter.format(totalPrice);
}
calculate();

for (const input of inputs) {

  input.addEventListener('input', function () {
    calculate();
  })

}

