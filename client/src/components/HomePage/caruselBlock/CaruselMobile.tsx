import { Card } from "@/shared/ui/ui/card";
import {
  Carousel,
  CarouselContent,
} from "@/shared/ui/ui/carousel";
import { FC } from "react";
import { Link } from "react-router-dom";

interface SlidesInfo {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  dimensions?: Record<string, number>;
  description?: string;
  specification?: string[];
}

interface CaruselMobileProps {
  slidesInfoList: SlidesInfo[];
}

export const CaruselMobile: FC<CaruselMobileProps> = ({ slidesInfoList }) => {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {slidesInfoList?.map((item) => (
          <Link key = {item._id} to={`/product/${item._id}`}>
            <Card key={item._id} className="[border:none] pt-8 pl-5">
              <div key={item._id} className="flex flex-col min-w-[250px]">
                <div className="relative pb-[100%] w-full rounded-lg overflow-hidden">
                  <img
                    className="absolute object-cover h-full w-full"
                    src={item.imgUrl}
                    alt={item.name}
                  />
                </div>
                <div className="flex flex-col pt-3 gap-2">
                  <h3>{item.name}</h3>
                  <p>{item.price} $</p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
