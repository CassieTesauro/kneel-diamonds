import { getMetals, setMetal } from "./database.js"  

const metals = getMetals() //metals state from database.js brought in by getMetals() and referenced in new variable 'metals'.


    //BIRDS EYE VIEW:  THIS EVENT LISTENER IS FOR WHEN  USER SELECTS AN OPTION FROM THE LIST////////////


document.addEventListener(  //User clicks radio button AKA change event occurs --> change is generated --> event listener runs function. 
    "change",
    (event) => {     
        if (event.target.name === "metal") {         // name refers to list item attribute name="metal"
            setMetal(parseInt(event.target.value))   // value refers to list item attribute value="${metal.id}"
        }
    }
)



    //BIRDS EYE VIEW:  THIS FUNCTION MAKES THE LIST THE USER SEES AND ADDS SOME ATTRIBUTES TO THE LIST/////////////


export const Metals = () => { //Metals() is defined.  It has a for loop to iterate through array objects and retrieve property values for interpolation in list items. AKA go get data from first object, use data in html, go get data from second object, add to html, etc
    
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) { //metals variable instatiated at top of this module
        html += 
            `<li>
                <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal} 
            </li>`
    }
   
    html += "</ul>"
    
    return html
} 
