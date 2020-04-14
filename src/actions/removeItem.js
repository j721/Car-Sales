export const removeItem = item =>{
    return{
        type: "Buy", payload:{ id: item.id, name: item.name, price: item.price}
    }
};


