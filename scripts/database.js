//database module stores transient and permanent state, defines getter/setter functions for sharing and grabbing state from mosule to module, defines function for 'change in state' when user clicks 'submit order' button and state goes transient ---> permanent


const database = {

    orderBuilder: {}, //TRANSIENT STATE this is an empty object in the database array meant to store what the user clicks on, AKA they clicked the option but not the submit order button.  When the user does click the submit order button, the orderBuilder array gets wiped clean so it can track the next bowl as options are being chosen.

    //below is the sort-or-permanent-state

    styles: [
        { id: 1, style: "Classic", price: 500 },
        { id: 2, style: "Modern", price: 710 },
        { id: 3, style: "Vintage", price: 965 }
    ],
    sizes: [
        { id: 1, carets: 0.5, price: 405 },
        { id: 2, carets: 0.75, price: 782 },
        { id: 3, carets: 1, price: 1470 },
        { id: 4, carets: 1.5, price: 1997 },
        { id: 5, carets: 2, price: 3638 }
    ],
    metals: [
        { id: 1, metal: "Sterling Silver", price: 12.42 },
        { id: 2, metal: "14K Gold", price: 736.4 },
        { id: 3, metal: "24K Gold", price: 1258.9 },
        { id: 4, metal: "Platinum", price: 795.45 },
        { id: 5, metal: "Palladium", price: 1241.0 }
    ],
    customOrders: [ //This stores all the completed order history state.  When orderBuilder state becomes permanent, it gets stored here and orderBuilder is wiped clean for the next order.
        {
            id: 1,
            metalId: 1, //ASK INSTR- Why dummy data?
            sizeId: 2,
            styleId: 3,
            timestamp: 1627677543583
        }
    ]  
}


//'getter' functions make state from database available in other modules 

export const getMetals = () => {  
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
} 



//'setter' functions take in an id of a user's choice as an argument.  Then it stores that id as a value in customOrders in the database module.  AKA completed customer orders are set down/saved in customOrders by using the id's of the options the user picks.

export const setMetal = (id) => {
    database.customOrders.metalId = id
}

export const setSize = (id) => {
    database.customOrders.sizeId = id
}

export const setStyle = (id) => {
    database.customOrders.styleId = id
}

//defines new function.  When user clicks 'submit order' their transient data from orderBuilder is transfered into [permanent state] customOrders as an object.  Function also wipes orderBuilder clean so it's ready for the next order. (AKA user clicked the purchase button so state transient --> permanent)
export const addCustomOrder = () => {
    
    //step 1- copy the transient state info in orderBuilder. Instantiate variable newOrder to reference it. 
    const newOrder = {...database.orderBuilder}

    //step 2- Use the length-1, last index+1 trick to give the id value to the newOrder.
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //step 3- add  the timestamp value to the newOrder
    newOrder.timestamp = Date.now()

    //step 4- push the created newOrder object into the customOrders object array
    database.customOrders.push(newOrder)

    //step 5- reset the  orderBuilder object that stores temporary state for user choices
    database.orderBuilder = {}

    //step 6- triggers aka 'dispatches' the code we wrote for a custom even we named "stateChanged".  Event code is at the bottom of main.js
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
