// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// export default store;

import {configureStore} from '@reduxjs/toolkit';
import counterSlice from '../slice/counter';
import productSlice from '../slice/product';
const store = configureStore({
  reducer: {
    counter: counterSlice,
    product: productSlice,
  }
});
export default store
