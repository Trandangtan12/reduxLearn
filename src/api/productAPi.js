import axiosClient from "./axiosClient";

const productAPI = {
  getAll() {
    const url = "/product";
    return axiosClient.get(url);
  },
  add(product) {
    const url = "/product";
    return axiosClient.post(url, product);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
  update(product) {
    const url = `/product/${product.id}`;
    return axiosClient.put(url, product);
  },
};
export default productAPI;
