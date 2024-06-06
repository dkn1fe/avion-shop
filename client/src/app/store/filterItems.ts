import { createSlice } from "@reduxjs/toolkit";
interface FilterItem {
    filterType:string[],
    filterPrice:string[]
}

const initialState:FilterItem = {
  filterType: [],
  filterPrice: [],
};

export const filterItemsSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterType(state, action) {
      state.filterType = [...state.filterType, action.payload];
    },
    setFilterPrice(state, action) {
      state.filterPrice = [...state.filterPrice,action.payload]
    },
    deleteFilterType(state,action){
      state.filterType = state.filterType.filter(item => item !== action.payload)
    },
    deleteFilterPrice(state,action){
      state.filterPrice = state.filterPrice.filter(item => item !== action.payload)
    }
  },
});

export const { setFilterPrice, setFilterType,deleteFilterType,deleteFilterPrice } = filterItemsSlice.actions;
export default filterItemsSlice.reducer;
