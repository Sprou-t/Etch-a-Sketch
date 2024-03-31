//create 16x16 divs using nested for loops
    //get reference
let container = document.querySelector('#container');

function grid_generator(){
    //for loop
    for(let i=0; i<16 ; i++){
        //create rows: need this step as we r not using array
        const row = document.createElement('div');


        for(let j=0; j <16; j++)
        {
            //create divs
            const cell = document.createElement('div');
           
            //add class
            cell.classList.add('cell');

            //append cell to row
            row.appendChild(cell);
        }

        //append the row to container at the end after each row iteration
        container.appendChild(row);
    }
}

function hover(){
//set up a event listener when mouse passes over the grid using delegation
    container.addEventListener('mouseover',(event) =>{
        let target = event.target;

        //change color when mouse hovers over an element of class 'cell'
        if (target.classList.contains('cell')){
            target.style.backgroundColor = 'lightblue';
        }
    })  
}

grid_generator();
hover();