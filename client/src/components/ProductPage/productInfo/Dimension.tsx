import { FC } from "react";

interface DimensionProps {
  length: number;
  width: number;
  height: number;
}

interface DimensionListProps {
  DimensionList: {
    dimensions: DimensionProps;
  };
}

export const Dimension: FC<DimensionListProps> = ({ DimensionList }) => {
  return (
    <div className="mt-5">
      <h4 className="text-[#2A254B] mt-10 font-semibold">Dimensions</h4>
      <div className="flex mt-8 gap-14 text-[#505977]">
        <div className="flex flex-col gap-2 ">
          <h4>Height</h4>
          <p>{DimensionList.dimensions?.height}cm</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Width</h4>
          <p>{DimensionList.dimensions?.width}cm</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Length</h4>
          <p>{DimensionList.dimensions?.length}cm</p>
        </div>
      </div>
    </div>
  );
};
