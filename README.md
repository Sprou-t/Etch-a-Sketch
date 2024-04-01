### Etch-a-Sketch

## description
-Made a Sketchpad 

## functions 
# grid_generator()
uses a nested for loop to generate an initial grid pad of 
16 x 16 squarish cells with the total dimension of 960px by 960px

# hover()
changes the cell to lightblue color when the cursor hovers over/ enters into the cell

# reset_grid()
-creates a button that when clicked, prompts the user for the number of cells on each side for a new sketch pad. A while loop is used to reject the input if input is not a number <= 100
-Once input is entered, original grid table is cleared out using inner.html
-New dimension of each cell is dynamically calculated and applied while keeping the total dimension of the sketchpad unchanged.
-New sketchpad is then appended to the container