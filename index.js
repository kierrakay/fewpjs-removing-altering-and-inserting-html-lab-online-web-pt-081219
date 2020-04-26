// Write your code here!
document.querySelector('main').remove()
let newHeader = document.createElement('h1')
newHeader.id = 'victory'

newHeader.innerHTML = "YOUR-NAME is the champion"

const testVar = "hi"

// /* Enter the code to remove the node element here */
// document.querySelector("main#main").remove();

// /* Create your new element here and assign it to newHeader */
// const newHeader = document.createElement("h1");
// newHeader.id = "victory"
// newHeader.innerHTML = "Flatiron School is the champion!";
// newHeader.className = "victory";

index.html
    after index.js is processed
      ✓ no longer has DOM node 'main#main'
      ✓ has a 'newHeader' variable that points to node 'h1#victory'
      ✓ has a 'newHeader' variable that points to node 'h1#victory'
      ✓ has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
