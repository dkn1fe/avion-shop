import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Button } from "@/shared/ui/ui/button";
import img from "@/components/ceramic/img.jpg";

export const Ceramic = () => {
  const { ceramicInfoList } = useSelector(
    (state: RootState) => state.ceramicSlice
  );

  return (
    <div className="container">
      <h3 className="text-3xl">New ceramics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {ceramicInfoList.slice(0, 4).map((item) => (
          <div key={item._id} className="flex flex-col items-start">
            <img src={img} alt={item.name} />
            <div className="flex flex-col items-start pt-3 gap-2">
              <h3>{item.name}</h3>
              <p>{item.price} $</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 w-full">
        <Button variant="secondary" className="w-full sm:w-auto  px-6">
          <p>View Collection</p>
        </Button>
      </div>
    </div>
  );
};
