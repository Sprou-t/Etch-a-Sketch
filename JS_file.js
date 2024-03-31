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

/*create a function that dynamically changes the number of grid sq when the 
button is pressed */
function reset_grid(){
    //create element ref to button
    const button = document.querySelector('button');

    //need to create own eventlistener that:
    button.addEventListener('click', function(event) {
    
        //1. prompts user for no. of sqs (limit to 100)
        while (true){ //need to change the input to int. Also change to NaN if not a no.
            let input = parseInt(prompt('How many square grids per side would you require?'));
            
            if (input<=100 && !isNaN(input)){
                break;//i/p overwritten in every iteration so last i/p is recorded
            }

            else{
                alert('Invalid input. Please enter a valid number less than 100.');
            }
        }
        //Might be because i need to add another eventlistener to listen to the ans typed out
        
        //2. dynamically changes the no. of sqs
        //clear out the inner HTML content 
        container.innerHTML='';

        //set the new width and height of each cell
        //alt: container.setAttribute('style', `--cell-size: calc(640px / ${input})`);
        container.style.setProperty('--cell-size',`calc(640px / ${input})`);

        //establish new HTML content with the new squares
        //for loop
        for(let i=0; i<input ; i++){
            //create rows: need this step as we r not using array
            const row = document.createElement('div');


            for(let j=0; j<input; j++)
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
    })   
}
    

grid_generator();
hover();
reset_grid();