/*
Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery.
The class should have some basic attributes such as name, quantity, etc.
Feel free to add any other attributes you think will be necessary.
Add few grocery items to an array of groceries, such as milk, bread, and eggs,
along with some quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.
The output of this assignment will be grocery.ts and groceries.html displaying the output.
*/

interface GroceryItem {
  name: string;
  quantity: number;
  price: string;
}
class Grocery {
  name: string;
  quantity: number;
  price: string;
  constructor(paramaters: GroceryItem) {
    for (const param in paramaters) {
      this[param] = paramaters[param]
    }
  }
}

const milk = new Grocery({ name: 'milk', quantity: 12, price:'$3.00' })
const eggs = new Grocery({ name: 'eggs', quantity: 12, price:'$2.00' })
const bread = new Grocery({ name: 'bread', quantity: 12, price:'$1.50' })
const groceries: Grocery[] = [ milk, eggs, bread ]

const container: any = document.querySelector('body > .groceries > .container')

container.innerHTML = groceries.map((grocery) => {
  return (
    `<div>
      <h2>${grocery.name.toUpperCase()}</h2>
      <h3>We have ${grocery.quantity} in stock</h3>
      <h3>The Current Price is ${grocery.price}</h3>
    </div>`
)
}).join('')
