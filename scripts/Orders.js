import { getOrders } from "./database.js"
import { getMetals } from "./database.js"
import { getStyles } from "./database.js"
import { getSizes } from "./database.js"










//BIRDS EYE VIEW: THIS FUNCTION INTERPOLATES STATE TO CREATE THE HTML THAT THE USER SEES AT THE BOTTOM OF THE WINDOW.  IT DISPLAYS COMPLETED ORDER HISTORY.


const buildOrderListItem = (order) => {  

    const metals = getMetals()

        const foundMetal = metals.find(   //find the metal id in the metals array that matches the metal id of the order.  store in foundMetal. 
            (metal) => {
                return metal.id === order.metalId
            }
        )
       
    const sizes = getSizes()

        const foundSize = sizes.find(   
            (size) => {
                return size.id === order.sizeId
            }
        )  

    const styles = getStyles()

        const foundStyle = styles.find(   
            (style) => {
                return style.id === order.styleId
            }
        ) 
       
    const totalCost = foundMetal.price + foundSize.price + foundStyle.price //get the valie of that metal's price and store in totalCost.

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}


export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside  <------  LOOK HERE ON MONDAY
        the component function for Orders, but not the others?
    */
    const orders = getOrders()  //state from database.js customOders object array [aka order history] referenced as 'orders'

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)  
    html += listItems.join("")  //joining array of strings into one long string
    html += "</ul>"

    return html
}

