import React from 'react';
import {useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
// import { addProduct } from "./actions/product";
import { addProduct, createProduct } from './slice/product';

const AddForm = () => {
    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(createProduct(data));
        reset()
    }
    return (
        <form id="add" action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("name")} />
            <button type="submit">Thêm</button>
        </form>
    )
}

export default AddForm
