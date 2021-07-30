
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Orders } from "./Orders.js"
import { Metals } from "./Metals.js"
import { addCustomOrder } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
    }
)

export const KneelDiamonds = () => { //6. definition for KneelDiamonds().  Since this function is within the renderAllHTML function, it contains html to be returned for the document.  
    return `
        <h1>Kneel Diamonds</h1>  

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()} 
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}
document.addEventListener("click", clickEvent=> {
    if (clickEvent.target.id === "orderButton") {
        addCustomOrder()
    }
})


//7. The KneelDiamonds() function contains calls for other functions that retrieve state to be displayed in the html. the interpolated function definitions are in their corresponding js modules