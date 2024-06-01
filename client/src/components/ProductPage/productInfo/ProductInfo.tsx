import { AppDispatch, RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Dimension } from "./Dimension";
import { AddCard } from "./AddCard";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCeramicsInfoById } from "@/shared/api/ceramic";
import { FC } from "react";

interface ProductInfoProps {
  productId: string | undefined;
}

export const ProductInfo: FC<ProductInfoProps> = ({ productId }) => {
  const { productInfo } = useSelector(
    (state: RootState) => state.productSlise
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCeramicsInfoById(productId));
  }, [productId]);

  return (
    <div className="flex flex-col md:flex-row container mx-auto p-8">
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <img
          src={productInfo.imgUrl}
          alt={productInfo.name}
          className="w-full h-[70%] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-[#2A254B]">
            {productInfo.name}
          </h3>
          <p className="text-xl text-[#2A254B]">{productInfo.price} £</p>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h4 className="text-lg mt-10 font-semibold text-[#2A254B]">
            Description
          </h4>
          <p className="text-[#505977]">{productInfo.description}</p>
          <ul className="list-disc list-inside">
            {productInfo.specifications?.map((item) => (
              <li className="pl-5 text-[#505977]" key = {item._id}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Dimension DimensionList={productInfo} />
        <AddCard />
      </div>
    </div>
  );
};
