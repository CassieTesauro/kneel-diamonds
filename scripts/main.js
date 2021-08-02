import { KneelDiamonds } from "./KneelDiamonds.js"  //1. gets database.js state


const mainContainer = document.querySelector("#container") //4. Sees that mainContainer references the selection of html #container with .querySelector, which allows javascript to modify the html element with the id of container.


const renderAllHTML = () => { //3. Finds function definition.  renderAllHTML() references variable 'mainContainer'.  Needs to find 'mainContainer' instantiation
    mainContainer.innerHTML = KneelDiamonds() //5. mainContainer, which references the ability to impact #container in html module, uses the .innerHTML method to put the KneelDiamonds() function into the html #container element.  Need to find definition for function KneelDiamonds(). {hint- module kneeldiamonds.js}
}


renderAllHTML() //2. Calls function renderAllHTML().  Needs to find function definition.



//adding the code below to listen for the custom event and generate html based on updated permanent state AKA user clicked the submit button so the transient state in orderObject is being moved into the customOrders object array as permanent state.  The orderObject is being wiped clean. The HTML that the user sees in the browser is regenerated based on the updated state AKA completed order is displayed, ready for new order.

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
