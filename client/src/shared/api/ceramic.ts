import {createAsyncThunk} from '@reduxjs/toolkit'
import { coreApi } from './api'

export const fetchCeramicsInfo = createAsyncThunk(
    'fetch/fetchCeramic',
    async() => {
        const response = await fetch(`${coreApi}/ceramics`);
        return response.json();
    }
)

export const fetchCeramicsInfoById = createAsyncThunk(
    'fetch/fetchProduct',
    async(id:string | undefined) => {
        const response = await fetch(`${coreApi}/ceramics/${id}`);
        return response.json();
    }
)