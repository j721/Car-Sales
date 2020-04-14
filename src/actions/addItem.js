export const addItem = item =>{
    return{
        type: "Delete", payload: {id:item.id, price: item.price}
    }
}

