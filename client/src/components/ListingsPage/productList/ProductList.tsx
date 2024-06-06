import { Filters } from "../filters/Filters";
import { ItemList } from "../itemList/ItemList";

export const ProductList = () => {
  return (
    <div className="container flex gap-32">
      <Filters />
      <ItemList />
    </div>
  );
};