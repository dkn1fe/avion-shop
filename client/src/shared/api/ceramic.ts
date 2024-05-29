import {createAsyncThunk} from '@reduxjs/toolkit'
import { coreApi } from './api'

export const fetchCeramicsInfo = createAsyncThunk(
    'fetch/fetchCeramic',
    async() => {
        const response = await fetch(`${coreApi}/ceramics`);
        return response.json();
    }
)