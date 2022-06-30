const initialState = {
    counter: 0,
    showCounter: true,
   
}
const counterReducer = (state = initialState, action) => {
 switch(action.type){
     case "increment": 
     return {...state, counter: state.counter + 1};
     case "decrement": 
     return {...state, counter: state.counter - 1};
     case "increase":
     return {...state, counter: state.counter + action.payload}
     case "toggle":
     return {...state, showCounter: !state.showCounter}
     default: 
     return state;
 }

}

export default counterReducer
