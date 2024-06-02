import { createSlice } from "@reduxjs/toolkit";
import { fetchCeramicsInfoById } from "@/shared/api/ceramic";

export interface AlsoLike {
  _id: string;
  name: string;
  imgUrl: string;
  price: number;
}

export interface CeramicItem {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  dimensions: Record<string, number>;
  description: string;
  specification: string[];
  alsoLike: AlsoLike[];
}

interface CeramicListSliceData {
  productInfo: CeramicItem[];
  productInfoStatus: "idle" | "loading" | "error";
}

const initialState: CeramicListSliceData = {
  productInfo: [],
  productInfoStatus: "idle",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCeramicsInfoById.pending, (state) => {
      state.productInfoStatus = "loading";
    });
    builder.addCase(fetchCeramicsInfoById.fulfilled, (state, action) => {
      state.productInfo = action.payload;
      state.productInfoStatus = "idle";
    });
    builder.addCase(fetchCeramicsInfoById.rejected, (state) => {
      state.productInfoStatus = "error";
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
