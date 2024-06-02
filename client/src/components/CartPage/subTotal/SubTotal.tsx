import { Button } from "@/shared/ui/ui/button";
import { FC, useEffect, useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
}

interface CartItems {
  cartItems: CartItem[];
}

export const SubTotal: FC<CartItems> = ({ cartItems }) => {
    
    const [total,setTotal] = useState(0)

 useEffect(() => {
   const newTotal = cartItems.reduce((acc,item) => acc + item.price * item.quantity,0)
   setTotal(newTotal)
 },[cartItems])

  return (
    <div className="flex flex-col mt-4 gap-4 items-end">
      <h3 className="text-[#4E4D93]  text-[20px] md:text-2xl">Subtotal <span className="text-[#2A254B] pl-4">£{total}</span></h3>
      <p className="text-[#4E4D93] text-[14px] md:text-[16px]">
        Taxes and shipping are calculated at checkout
      </p>
      <Button className="bg-[#2A254B] w-[180px] h-[56px] text-white">Go to checkout</Button>
    </div>
  );
};
