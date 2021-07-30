import { getSizes, setSize } from "./database.js"

const sizes = getSizes() //sizes references the string array of sizes state returned by getSizes() on database.js

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {   //bird's eye view: html build upon its own data to make an unordered list for DOM.  .map and .join help us form the list
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    //.map() takes a function as an argument.  The function acts on the items in the original array.  It copies them, changes them however the function specifies, then returns a new array of the changed items
        //WALKTHROUGH OF THIS .MAP()=
        //Instantiate variable listItems to referene the return of map's function.
        //map is being used on sizes array from database.js.
        //for each object (referenced in map function as size) copy, and convert the data as specified in the map function return.
        //return should be an array of strings.  each string is a list item that interpolates the data we copied.
        //AKA copy this list, change it so it looks like this, then give the new list to me.
        
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("") //.join("") is taking all the li strings we mad in the .map() function and making them one big string.
    html += "</ul>"

    return html
}

