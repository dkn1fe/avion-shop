         
import { Button } from "@/shared/ui/ui/button";
import { FC } from "react";
import { CaruselMobile } from "./CaruselMobile";

interface CeramicItem {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  dimensions: Record<string, number>;
  description: string;
  specification: string[];
}

interface CaruselBlockProps {
  title: string;
  slidesInfoList: CeramicItem[];
}

export const CaruselBlock: FC<CaruselBlockProps> = ({
  slidesInfoList,
  title,
}) => {
  return (
    <div className="container">
      <h3 className="text-3xl">{title}</h3>

      {/* Десктоп версия */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {slidesInfoList.map((item) => (
            <div key={item._id} className="flex flex-col items-start">
              <img src={item.imgUrl} alt={item.name} />
              <div className="flex flex-col items-start pt-3 gap-2">
                <h3>{item.name}</h3>
                <p>{item.price} $</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10 w-full">
          <Button variant="secondary" className="w-full sm:w-auto px-6">
            <p>View Collection</p>
          </Button>
        </div>
      </div>

      {/* Мобильная версия */}
      <div className="block md:hidden">
        <CaruselMobile slidesInfoList={slidesInfoList} />
      </div>
    </div>
  );
};
