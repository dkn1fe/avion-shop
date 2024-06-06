import { Menu, Home, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/ui/dropdown-menu";
import { Button } from "@/shared/ui/ui/button";
import { CartInfo } from "@/app/store/cartSlice";
import { FC } from "react";

interface BurgerMenuProps {
  cartItems: CartInfo[];
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)
  const BurgerMenuList = [
    { id: 1, title: "Home", img: <Home size={20} />, link: "/" },
    {
      id: 2,
      title: "All product",
      img: <ShoppingBasket size={20} />,
      link: "/allproduct",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          variant="ghost"
          className="p-2.5"
        >
          {!isOpen && (
            <>
            <div className="relative">
              <Menu size={20} />
              {cartItems.length > 0 && (
                <div className="absolute top-[-10px] left-[10px] flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs">
                  {cartItems.length}
                </div>
              )}
                </div>
            </>
          )}
          {isOpen && <Menu size = {20}/>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {BurgerMenuList.map((item) => (
          <DropdownMenuItem className="flex gap-2" key={item.id}>
            <Link to={item.link}>
              <div className="flex items-center gap-3">
                {item.img}
                <span>{item.title}</span>
              </div>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem className="flex gap-2">
          <Link to="/baskets">
            <div className="flex items-center gap-3">
              <ShoppingBasket className="relative" size={20} />
              <span>Basket</span>
              {cartItems.length > 0 && (
                <div className="absolute top-[0px] left-[18px] flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
