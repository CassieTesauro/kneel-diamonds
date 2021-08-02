import { getOrders } from "./database.js"


//BIRDS EYE VIEW: THIS FUNCTION INTERPOLATES STATE TO CREATE THE HTML THAT THE USER SEES AT THE BOTTOM OF THE WINDOW.  IT DISPLAYS COMPLETED ORDER HISTORY.

const buildOrderListItem = (order) => {
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}



export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside  <------  LOOK HERE ON MONDAY
        the component function for Orders, but not the others?
    */
    const orders = getOrders()  //state from database.js customOders object array [aka order history] referenced as 'orders'

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)  //????????????? I think it's getting transient buildOrder data as it becomes customOrder data?  unsure of signal flow here.

    html += listItems.join("")  //joining array of strings into one long string
    html += "</ul>"

    return html
}

