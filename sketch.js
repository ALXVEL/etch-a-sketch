const genButton = document.querySelector('#genButton');
const inputField = document.querySelector('#size');
let size = 16;

let listOfColors = ['blue','red','green','yellow'];
function randomColor(){
    // generates a number from 0 to 3
    return listOfColors[Math.floor(Math.random() * 4)]
}

const parent = document.querySelector('#container');

// returns a 2D array
function createDivGrid (size) {
    
    let matrix = [];

    // creating the 2D array
    for(let i = 0; i < size; i++){
        matrix[i] = new Array(size);
    }

    // populating the 2D array
    let n = 0;
    matrix.forEach( (arr) => {
        const divContainer = document.createElement('div');
        divContainer.setAttribute('class','div-container');

        for (let i = 0; i < size; i++){
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => {
                div.setAttribute('style','background:'+ randomColor() + ';');
            });
            arr[i] = div;
            divContainer.appendChild(arr[i]);
        }

        parent.append(divContainer);
    })

    return matrix;
}

function removePrevious(){
    console.log("Removing previous size: " + parent.childElementCount);
    if(parent.childElementCount > 0){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }
}


const invalid = document.querySelector('.invalid');
genButton.addEventListener('click', () => {
    removePrevious();
    size = parseInt(inputField.value);
    if (size > 100 || size < 0){
        invalid.textContent = 'Invalid number! Try again!';
    }else{
        createDivGrid(size);
    }
    console.log('Button Clicked!');
});
