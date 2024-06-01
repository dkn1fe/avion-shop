import { useState } from "react";
import { Button } from "@/shared/ui/ui/button";

export const AddCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center gap-4">
        <h3 className="text-lg">Amount</h3>
        <div className="bg-[#F9F9F9] h-[50px] w-[122px] flex items-center justify-between px-3 rounded">
          <Button variant="ghost" className="text-[#CAC6DA] focus:outline-none">
            -
          </Button>
          <span>{quantity}</span>
          <Button variant="ghost" className="text-[#CAC6DA] focus:outline-none">
            +
          </Button>
        </div>
      </div>
      <Button className="bg-[#2A254B] w-[143px] h-[40px] rounded-none">
        Add to cart
      </Button>
    </div>
  );
};
