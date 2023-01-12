type data = {
    newValue?: {},
    state?: any
}

export let arrayBuy: {}[] = ([{}])
let realState = null;
export function changeArray({newValue, state}:data){
    console.log(state);
    realState = state
    if(newValue){
        arrayBuy.push(newValue);
        console.log("entro")
    }
    realState(arrayBuy.length);
    
}
