import { KneelDiamonds } from "./KneelDiamonds.js"  //1. getting database.js state

const mainContainer = document.querySelector("#container") //4. Sees that mainContainer references the selection of html #container with .querySelector, which allows javascript to modify the html element with the id of container.

const renderAllHTML = () => { //3. Finds function definition.  renderAllHTML() references variable 'mainContainer'.  Needs to find 'mainContainer' instantiation
    mainContainer.innerHTML = KneelDiamonds() //5. mainContainer, which references the ability to impact #container in html module, uses the .innerHTML method to put the KneelDiamonds() function into the html #container element.  Need to find definition for function KneelDiamonds(). {hint- module kneeldiamonds.js}
}

renderAllHTML() //2. Calling function renderAllHTML().  Needs to find function definition.

