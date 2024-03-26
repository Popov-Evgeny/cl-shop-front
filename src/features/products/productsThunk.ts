import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product, ProductMutation } from '../../types';
import axiosApi from '../../axiosApi.ts';

export const fetchProducts = createAsyncThunk<Product[]>(
  'fetchProducts',
  async () => {
    const productsResponse = await axiosApi.get<Product[]>('/products');
    return productsResponse.data;
  }
);

export const createProduct = createAsyncThunk<void, ProductMutation>(
  'createProduct',
  async (productMutation) => {
    const serialized = {
      ...productMutation,
      price: parseFloat(productMutation.price),
    };

    return axiosApi.post('/products', serialized);
  }
);