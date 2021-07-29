import { getMetals } from "./database.js"  

const metals = getMetals()  //metals instatiated to reference the string array made in database.js by function getMetals() so we can use the data in the Metals() for loop

document.addEventListener(
    "change",
    (event) => {
    }
)

export const Metals = () => { //Metals() is defined.  It has a for loop to iterate through array objects and retrieve property values for interpolation in list items. AKA go get data from first object, use data in html, go get data from second object, add to html, etc
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) { 
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

