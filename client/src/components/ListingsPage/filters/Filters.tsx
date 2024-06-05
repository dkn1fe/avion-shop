import React from "react";
import { Checkbox } from "@/shared/ui/ui/checkbox";
import { setFilterPrice, setFilterType,deleteFilterType,deleteFilterPrice} from "@/app/store/filterItems";
import { useDispatch,useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

export const Filters = () => {
  const dispatch = useDispatch();
  const { filterType,filterPrice } = useSelector(
    (state: RootState) => state.filterItemsSlice
  );
  const onGetInfoFilterType = (data:string) => {
       if(filterType.includes(data)){
          dispatch(deleteFilterType(data))
       }
       else{
        dispatch(setFilterType(data))
       }
  }
      const onGetInfoFilterPrice = (title:string) => {
        if(filterPrice.includes(title)){
            dispatch(deleteFilterPrice(title))
        }
        else {
           dispatch(setFilterPrice(title))
        }
     }

  const filterList = [
    { id: 1, title: "All", label: "all" },
    { id: 2, title: "Furniture", label: "furniture" },
    { id: 3, title: "Sofas", label: "sofas" },
    { id: 4, title: "Light fittings", label: "light" },
    { id: 5, title: "Accesories", label: "Accessories" },
  ];
  const priceFilterList = [
    { id: 1, title: "<250", minPrice:0,maxPrice:250},
    { id: 2, title: "<450", minPrice:251,maxPrice:450 },
    { id: 3, title: "450+", minPrice:451,maxPrice:null},
  ];
  return (
    <>
      <div className="flex pt-5 flex-col gap-5">
        <h3>Product type</h3>
        {filterList.map((item) => (
          <React.Fragment key={item.id}>
            <div className="flex items-center gap-3">
              <Checkbox onClick={() => onGetInfoFilterType(item.label)} />
              <label>
                <p className="text-[#2A254B]">{item.title}</p>
              </label>
            </div>
          </React.Fragment>
        ))}
        <h3 className="pt-5">Price</h3>
        {priceFilterList.map((item) => (
          <React.Fragment key={item.id}>
            <div className="flex items-center gap-3">
              <Checkbox
                onClick={() => onGetInfoFilterPrice(item.title)}
              />
              <label>
                <p className="text-[#2A254B]">{item.title}</p>
              </label>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
