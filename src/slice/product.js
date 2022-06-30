import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPI from "../api/productAPi";

export const fetchProduct = createAsyncThunk(
    //định nghĩa 1 action mới sử dụng thunk
    "GET_ALL_PRODUCT",
    async () => {
        const response = await productAPI.getAll();
        return response.data
    }
);
export const createProduct = createAsyncThunk(
    "ADD_PRODUCT",
    async (item) => {
        const { data } = await productAPI.add(item)
        return data
    }
)
export const deleteProduct = createAsyncThunk(
    "DELETE_PRODUCT",
    async (id) => {
        await productAPI.remove(id)
        return id
    }
)
export const updateProduct = createAsyncThunk(
    "UPDATE_PRODUCT",
    async (item) => {
        const { data } = await productAPI.update(item)
        return data
    }
)


const productSlice = createSlice({
    name: "product",
    initialState: { value: [], loading: false, error: "" },
    // reducers: {
    //     addProduct(state, action) {
    //         return {
    //             ...state.value,
    //             value: [...state.value, action.payload]
    //         };
    //     },
    //     removeProduct(state, action) {
    //         return {
    //             ...state.value,
    //             value: state.value.filter(item => item.id !== action.payload)
    //         }
    //     },
    //     editProduct(state, action) {
    //         return {
    //             ...state.value
    //         }
    //     }
    // },

    extraReducers: {
        [fetchProduct.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchProduct.fulfilled]: (state, action) => {
            state.value = action.payload;
            state.loading = false;
        },
        [fetchProduct.rejected]: (state, action) => {
            state.error = "Không gọi api"
        },
        [createProduct.fulfilled]: (state, action) => {
            return {
                ...state.value,
                value: [...state.value, action.payload]
            };
        },
        [deleteProduct.fulfilled]: (state, action) => {
            return {
                ...state.value,
                value: state.value.filter(item => item.id !== action.payload)
            }
        },
        [updateProduct.fulfilled]: (state, action) => {
            return {
                ...state.value,
                value: state.value.map(item => item.id === action.payload.id ? action.payload : item)
            }
        }
    },
    // extraReducers: (builder) => {
    //   builder.addCase(fetchProduct.fulfilled, (state, action) => {
    //     state.value = action.payload;
    //   });
    // }
});
export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;