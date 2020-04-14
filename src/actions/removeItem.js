export const removeItem = item =>{
    return{
        type: "REMOVE_ITEM", payload:{ id: item.id, name: item.name, price: item.price}
    }
};


