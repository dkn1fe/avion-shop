import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/ui/ui/popover";
import { FC } from "react";
import { Button } from "@/shared/ui/ui/button";
import { Checkbox } from "@/shared/ui/ui/checkbox";
interface FilterInfo {
  id: number;
  title: string;
  label: string;
}
interface MobileFiltersProps {
  filterInfo: FilterInfo[];
  filterTypes: string;
  onGetFilterInfo: (data: string) => void;
}

export const MobileFilters: FC<MobileFiltersProps> = ({
  filterInfo,
  filterTypes,
  onGetFilterInfo,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="px-5">{filterTypes}</Button>
      </PopoverTrigger>
      <PopoverContent>
        {filterInfo.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <Checkbox onClick={() => onGetFilterInfo(item.label)} />
            <label className="text-[#2A254B]">{item.title}</label>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};

