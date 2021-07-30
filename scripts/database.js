/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
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
    customOrders: [ //this is a transient state array.  stores data for each order, then is wiped clean for next order.
        {
            id: 1,
            metalId: 3,
            sizeId: 2,
            styleId: 3,
            timestamp: 1614659931693
        }
    ]
}

export const getMetals = () => {  //11. Function is defined to copy metal object array and convert it into a new string array.
    return database.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return database.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return database.styles.map(styles => ({...styles}))
}

export const getOrders = () => {
    return database.styles.map(orders => ({...orders}))
} 

//set functions take in an id of a user's choice as an argument and make that id a value in the customer order object in the database module.  customer picks color with id of 2 from color options imported from database --> that id value is stored back in database customer order object

export const setMetal = (id) => {
    database.customOrders.metalId = id
}

export const setSize = (id) => {
    database.customOrders.sizeId = id
}

export const setStyle = (id) => {
    database.customOrders.styleId = id
}
