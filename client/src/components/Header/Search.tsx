import { RootState } from "@/app/store/store";
import { Input } from "@/shared/ui/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const SearchHeader = () => {
  const ceramicInfoList = useSelector(
    (state: RootState) => state.ceramicSlice.ceramicInfoList
  );
  const [searchText, setSearchText] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const searchItemList = ceramicInfoList.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const resetSearch = () => {
    setSearchText('')
    setIsOpenSearch(false)
  }

  return (
    <>
      <div className="">
        <Search onClick={() => setIsOpenSearch(!isOpenSearch)} size={20} />
      </div>
      {isOpenSearch && (
        <div className="bg-[#F9F9F9] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-lg min-h-[200px]  absolute top-8 left-5 z-10">
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-[400px] m-2 h-[38px] outline-none"
          />
          <X
            onClick={() => setIsOpenSearch(false)}
            className="absolute top-4 right-4"
            size={20}
          />
          {searchItemList.map((item) => (
            <Link onClick={resetSearch} to={`/product/${item._id}`}>
              <div className="p-3">
                <div className="flex gap-2">
                  <div className="relative w-[100px] h-full">
                    <img className="object-cover" src={item.imgUrl} />
                  </div>
                  <div className="flex pt-2 flex-col">
                    <h3>{item.name}</h3>
                    <p>£{item.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
