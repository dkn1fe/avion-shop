import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ItemList = () => {
  const { ceramicInfoList } = useSelector(
    (state: RootState) => state.ceramicSlice
  );
  const { filterType, filterPrice } = useSelector(
    (state: RootState) => state.filterItemsSlice
  );

  let filteredItemList: any = [];
  if (filterType.includes("all") || filterType.length === 0) {
    filteredItemList = ceramicInfoList;
  } else {
    filterType.forEach((type) => {
      const items = ceramicInfoList.filter((item) => item.type === type);
      filteredItemList.push(...items);
    })

    if (filterPrice.length) {
      filterPrice.forEach((type) => {
        if (type === "<250") {
          filteredItemList = filteredItemList.filter(
            (item: any) => item.price <= 250
          );
        }
        if (type === "<450") {
          filteredItemList = filteredItemList.filter(
            (item: any) => item.price <= 450
          );
        }
        if (type === "450+") {
          filteredItemList = filteredItemList.filter(
            (item: any) => item.price >= 450
          );
        }
      });
    }
  }
  return (
    <div className="flex flex-wrap gap-4">
      {filteredItemList.map((item: any) => (
        <Link
          key={item._id}
          to={`/product/${item._id}`}
          className="flex flex-col items-start w-[250px] m-2"
        >
          <div className="relative w-full">
            <img className="w-full h-auto" src={item.imgUrl} alt={item.name} />
          </div>
          <div className="text-start mt-2">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600">£ {item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
