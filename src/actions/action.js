
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM ='REMOVE_ITEM';


export const addItem = item =>{
    return{
        type: "ADD_ITEM", payload: {id:item.id, price: item.price}
    }
}

export const removeItem = item =>{
    return{
        type: 'REMOVE_ITEM', payload:{ id: item.id, name: item.name, price: item.price}
    }
};
