import { FC } from "react";

interface DimensionProps {
  length: number;
  width: number;
  height: number;
}

interface DimensionListProps {
    dimensionList:DimensionProps
}

export const Dimension: FC<DimensionListProps> = ({ dimensionList }) => {
  return (
    <div className="mt-5">
      <h4 className="text-[#2A254B] mt-10 font-semibold">Dimensions</h4>
      <div className="flex mt-8 gap-14 text-[#505977]">
        <div className="flex flex-col gap-2 ">
          <h4>Height</h4>
          <p>{dimensionList.height}cm</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Width</h4>
          <p>{dimensionList.width}cm</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Length</h4>
          <p>{dimensionList.length}cm</p>
        </div>
      </div>
    </div>
  );
};
