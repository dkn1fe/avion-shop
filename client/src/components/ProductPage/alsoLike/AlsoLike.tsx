import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { CaruselBlock } from "@/components/HomePage/caruselBlock/CaruselBlock";
import { CeramicItem } from "@/app/store/ceramicSlice";

export const AlsoLike = () => {
    const { productInfo } = useSelector(
        (state: RootState) => state.productSlise
      );
    return (
         <>
         <div className="mt-8 md:m-0">
         <CaruselBlock title="You might also like" slidesInfoList={productInfo?.alsoLike as CeramicItem[]}/>
         </div>
         </>
    )
}