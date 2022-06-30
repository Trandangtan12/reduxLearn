import productAPI from '../api/productAPi';
export const addProduct = (item) => async (dispatch) => {
  try {
    const { data } = await productAPI.add(item);
    dispatch({ type: "ADD_PRODUCT", payload: data })
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const { data } = await productAPI.remove(id);
    dispatch({ type: "DELETE_PRODUCT", payload: data });
  } catch (error) {

  }
}
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await productAPI.getAll()
    dispatch({ type: 'FETCH_PRODUCT', payload: data })
  } catch (error) {
    console.log(error);
  }
}