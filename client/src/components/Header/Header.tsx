import { ShoppingCart } from "lucide-react";
import { Profile } from "./Profile";
import { Assortmen } from "./Assortmen";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import { Link } from "react-router-dom";
import { SearchHeader } from "./Search";
import { BurgerMenu } from "./BurgerMenu";
import { CartInfo } from "@/app/store/cartSlice";
export const Header = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);

  return (
    <>
      <div className="p-6">
        <div className="flex items-center justify-between max-[600px]:flex-row">
          <div className="flex items-center gap-4 max-[600px]:order-2">
            <SearchHeader />
            <div className="min-[600px]:hidden">
              <BurgerMenu cartItems={cartItems as CartInfo[]} />
            </div>
          </div>
          <h3 className="text-2xl text-neutral-800">Avion</h3>
          <div className="flex items-center gap-5 relative">
            <div className="relative">
              <Link to="/baskets">
                <ShoppingCart className="max-[600px]:hidden" size={20} />
                {cartItems.length > 0 && (
                  <div className="absolute hidden top-[-10px] right-[-10px] md:flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs">
                    {cartItems.length}
                  </div>
                )}
              </Link>
            </div>
            <Profile />
          </div>
        </div>
        <div className="border h-0 mt-2 max-[600px]:hidden" />
      </div>
      <Assortmen />
    </>
  );
};
