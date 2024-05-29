import { Carousel, CarouselContent } from "@/shared/ui/ui/carousel";
import { FC } from "react";

interface SlidesInfo {
  _id: string;
  name: string;
  price: number;
  imgUrl: string;
  dimensions: Record<string, number>;
  description: string;
  specification: string[];
}

interface CaruselMobileProps {
  slidesInfoList: SlidesInfo[];
}

export const CaruselMobile: FC<CaruselMobileProps> = ({ slidesInfoList }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        <div className="p-5 flex gap-3">
            {slidesInfoList.map((item) => (
              <div
                key={item._id}
                className="flex flex-col min-w-[200px]"
              >
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
            ))}
          </div>
      </CarouselContent>
    </Carousel>
  );
};