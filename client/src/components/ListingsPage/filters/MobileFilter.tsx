import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/ui/select";
import { FC } from "react";

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
    <Select onValueChange={(value) => onGetFilterInfo(value)}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={filterTypes} />
      </SelectTrigger>
      <SelectContent>
        {filterInfo.map((item) => (
          <SelectItem key={item.id} value={item.label}>
            {item.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
