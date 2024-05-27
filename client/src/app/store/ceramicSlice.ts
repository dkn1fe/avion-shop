import { createSlice } from "@reduxjs/toolkit";
import { fetchCeramicsInfo } from "@/shared/api/ceramic";

interface CeramicList {
     _id:string,
     name:string,
     price:number,
     dimensions:{},
     description:string,
     specification:string[],
}

interface CeramicListSliceData{
    ceramicInfoList:CeramicList[],
    ceramicInfoStatus:'idle' | 'loading' | 'error'
}

const initialState:CeramicListSliceData = {
  ceramicInfoList: [],
  ceramicInfoStatus: "idle",
};

export const ceramicSlice = createSlice({
  name: "ceramic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCeramicsInfo.pending, (state) => {
      state.ceramicInfoStatus = "loading";
    });
    builder.addCase(fetchCeramicsInfo.fulfilled, (state, action) => {
      (state.ceramicInfoList = action.payload),
        (state.ceramicInfoStatus = "idle");
    });
    builder.addCase(fetchCeramicsInfo.rejected, (state) => {
      state.ceramicInfoStatus = "error";
    });
  },
});
export const {} = ceramicSlice.actions;
export default ceramicSlice.reducer;
