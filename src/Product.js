import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeProduct, deleteProduct, updateProduct } from "./slice/product";
// import { deleteProduct, getProducts } from "./actions/product";

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.value);
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  const [updateData, setupdateData] = useState("")
  const onHandleUpdate = (data) => {
    if (updateData === "") {
      dispatch(updateProduct(data))
    } else {
      const newData = {
        ...data,
        name: updateData
      }
      dispatch(updateProduct(newData))
    }

  }
  return <div>{products.map((product) => <div key={product.name}>
    <input onChange={(e) => setupdateData(e.target.value)} style={{ border: "none" }} type="text"
      defaultValue={product.name} />
    <button onClick={() => dispatch(deleteProduct(product.id))}>Xóa</button>
    <button onClick={() => onHandleUpdate(product)}>Sửa</button></div>)}</div>;
};
export default Product;