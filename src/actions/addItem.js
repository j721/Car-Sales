export const addItem = item =>{
    return{
        type: "ADD_ITEM", payload: {id:item.id, price: item.price}
    }
}

