
// export const ADD_ITEM = 'ADD_ITEM';
// export const REMOVE_ITEM ='REMOVE_ITEM';


// export const addItem = item =>{
//     return{
//         type: "ADD_ITEM", payload: item
//     }
// }

// export const removeItem = item =>{
//     return{
//         type: 'REMOVE_ITEM', payload:item
//     }
// };



// export const removeItem = item => {
//     return { type: "Buy", payload: { id: item.id, price: item.price } };
//   };
  
//   export const addItem = item => {
//     return {
//       type: "Delete",
//       payload: { id: item.id, name: item.name, price: item.price }
//     };
//   };


export const ADD_FEATURE = 'ADD_FEATURE';
export const addFeature = (feature) => {
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const REMOVE_FEATURE = 'REMOVE_FEATURE';
export const removeFeature = (feature) => {
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}


export const ADD_TOTAL = 'ADD_TOTAL'
export const addTotal = (total) => {
    return {
        type: ADD_TOTAL,
        payload: total
    }
}