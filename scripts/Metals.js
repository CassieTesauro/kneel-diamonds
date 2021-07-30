import { getMetals } from "./database.js"  

const metals = getMetals()  //metals instatiated to ref. the string array made in database.js by function getMetals() so we can use its data in the Metals() for loop


//User clicks a radio button AKA change event occurs --> change is generated --> event listener runs function.  
document.addEventListener(
    "change",
    (event) => { //event is the function parameter, so is the argument the action of the user selecting a radio button ???????????
        if (event.target.name === "metal") {  // name refers to list item attribute name="metal"
            window.alert(`User chose metal ${event.target.value}`)  // value refers to list item attribute value="${metal.id}"
        }
    }
)

export const Metals = () => { //Metals() is defined.  It has a for loop to iterate through array objects and retrieve property values for interpolation in list items. AKA go get data from first object, use data in html, go get data from second object, add to html, etc
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) { //metals ref. the return of function getMetals() that was imported from database state
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal} 
        </li>`
    }

    html += "</ul>"
    return html
} 
