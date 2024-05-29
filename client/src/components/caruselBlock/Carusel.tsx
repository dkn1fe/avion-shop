import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCeramicsInfo } from "@/shared/api/ceramic";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/store";
import { CaruselBlock } from "./CaruselBlock";

export const Carusel = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCeramicsInfo());
  }, []);

  const { ceramicInfoList } = useSelector(
    (state: RootState) => state.ceramicSlice
  );

  const ceramicList = ceramicInfoList.slice(0,4)
  const popularList = ceramicInfoList.slice(4,8)

  return (
     <>
      <section className="pt-10">
         <CaruselBlock title='New ceramics' slidesInfoList={ceramicList}/>
      </section>
      <section className="pt-32">
         <CaruselBlock title='Our popular products' slidesInfoList={popularList}/>
      </section>
     </>
  );
};
