const initialState = {
    products: [],
    loading: true,
    activeProduct: false
}
const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "DELETE_PRODUCT":
            return{
                ...state,
                products: state.products.filter((item)=> item.id != action.payload.id)
            }   
        case "FETCH_PRODUCT":
            return {
                ...state,
                products: action.payload
            }
        // case "UPDATE_PRODUCT":
        // return {
        //     ...state,
        //     products: state.products.map(item=>{
        //         item.id === action.payload.id ? action.payload : item
        //     })
        // }
            default:
                return state
    }
}
export default productReducer;