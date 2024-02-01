const app = document.getElementById('app');
const canvasSize = 11;
const tbl = document.createElement('table');
const tblBody = document.createElement('tbody');
const hiddenCounter = document.createElement('input');

window.onload = onload();

function onload() {
    createColorPicker();
    let colorPicker = document.getElementById('colorPicker');
    createResetButton();
    createHiddenCounter(hiddenCounter);
    createBasicTable();
    createGraphicTable();
    colorPickerListener(colorPicker);
}

function createColorPicker() {
    let colorPicker = document.createElement('input');
    colorPicker.setAttribute('type', 'color');
    colorPicker.setAttribute('id', 'colorPicker');
    colorPicker.setAttribute('value', '#000000');
    colorPicker.style.height = '100px';
    colorPicker.style.width = '200px';
    app.appendChild(colorPicker);
}

function createResetButton() {
    let resetButton = document.createElement('button');
    resetButton.setAttribute('id', 'resetButton');
    resetButton.setAttribute('value', 'Reset');
    resetButton.innerText = 'Reset';
    app.appendChild(resetButton);

    resetButtonListener();
    tailwindCssButton(resetButton);
}

/**
 * Create hidden input to count cells
 * @param hiddenCounter
 */
function createHiddenCounter(hiddenCounter) {
    hiddenCounter.setAttribute('type', 'hidden');
    hiddenCounter.setAttribute('id', 'counter');
    hiddenCounter.setAttribute('value', '0');
}

function createBasicTable() {
    app.appendChild(hiddenCounter);
    app.appendChild(tbl);
    tbl.appendChild(tblBody);
    tailwindCssTable(tbl);
    tailwindCssTable(tblBody);
    tailwindCssBasic(app);
}

function createGraphicTable() {
    for (let i = 0; i < canvasSize; i++) {
        const row = document.createElement('tr');
        tblBody.appendChild(row);
        for(let j = 0; j < canvasSize; j++) {
            const cell = document.createElement('td');
            cell.style.backgroundColor = 'rgb(170, 170, 170)';
            cell.style.width = '20px';
            cell.style.height = '20px';
            tailwindCssTable(cell);
            row.appendChild(cell);
        }
    }
}

/**
 * Color picker listener
 * @param colorPicker
 */
function colorPickerListener(colorPicker) {
    colorPicker.addEventListener('change', function() {
        let counter = document.getElementById('counter').value;

        if (counter >= canvasSize * canvasSize) {
            return;
        }

        let cells = document.getElementsByTagName('td');
        cells[counter].style.backgroundColor = colorPicker.value;
        counter++;
        document.getElementById('counter').value = counter;
    });
}

function resetButtonListener() {
    resetButton.addEventListener('click', function() {
        let cells = document.getElementsByTagName('td');
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = 'rgb(170, 170, 170)';
        }
        document.getElementById('counter').value = 0;
    });
}

function tailwindCssTable(element) {
    element.classList.add('border');
    element.classList.add('border-gray-400');
    element.classList.add('text-center');
    element.classList.add('text-gray-800');
    element.classList.add('font-bold');
    element.classList.add('py-2');
    element.classList.add('px-4');
}

function tailwindCssButton(element) {
    element.classList.add('bg-blue-500');
    element.classList.add('hover:bg-blue-700');
    element.classList.add('text-white');
    element.classList.add('font-bold');
    element.classList.add('py-2');
    element.classList.add('px-4');
    element.classList.add('rounded');
}

function tailwindCssBasic(element) {
    element.classList.add('flex');
    element.classList.add('flex-col');
    element.classList.add('items-center');
    element.classList.add('justify-center');
    element.classList.add('min-h-screen');
}