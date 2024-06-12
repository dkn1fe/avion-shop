import { Checkbox } from "@/shared/ui/ui/checkbox";
import {
  setFilterPrice,
  setFilterType,
  deleteFilterType,
  deleteFilterPrice,
} from "@/app/store/filterItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { MobileFilters } from "./MobileFilter";

export const Filters = () => {
  const dispatch = useDispatch();
  const { filterType, filterPrice } = useSelector(
    (state: RootState) => state.filterItemsSlice
  );

  const onGetInfoFilterType = (data: string) => {
    if (filterType.includes(data)) {
      dispatch(deleteFilterType(data));
    } else {
      dispatch(setFilterType(data));
    }
  };

  const onGetInfoFilterPrice = (title: string) => {
    if (filterPrice.includes(title)) {
      dispatch(deleteFilterPrice(title));
    } else {
      dispatch(setFilterPrice(title));
    }
  };

  const filterList = [
    { id: 1, title: "All", label: "all" },
    { id: 2, title: "Furniture", label: "furniture" },
    { id: 3, title: "Sofas", label: "sofas" },
    { id: 4, title: "Light fittings", label: "light" },
    { id: 5, title: "Accessories", label: "Accessories" },
  ];

  const priceFilterList = [
    { id: 1, title: "<250", label: "<250" },
    { id: 2, title: "<450", label: "<450" },
    { id: 3, title: "450+", label: "450+" },
  ];

  return (
    <>
      <div className="p-5 flex-col gap-5 hidden sm:flex">
        <h3 className="text-lg font-semibold">Product type</h3>
        {filterList.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <Checkbox onClick={() => onGetInfoFilterType(item.label)} />
            <label className="text-[#2A254B]">{item.title}</label>
          </div>
        ))}
        <h3 className="text-lg font-semibold pt-5">Price</h3>
        {priceFilterList.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <Checkbox onClick={() => onGetInfoFilterPrice(item.title)} />
            <label className="text-[#2A254B]">{item.title}</label>
          </div>
        ))}
      </div>
      <div className="flex absolute left-[35%] z-20 justify-center gap-3 sm:hidden">
        <MobileFilters
          onGetFilterInfo={onGetInfoFilterType}
          filterInfo={filterList}
          filterTypes="type"
        />
        <MobileFilters
          onGetFilterInfo={onGetInfoFilterPrice}
          filterInfo={priceFilterList}
          filterTypes="price"
        />
      </div>
    </>
  );
};
