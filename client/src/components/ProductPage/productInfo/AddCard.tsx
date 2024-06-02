import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/ui/button";
import { CeramicItem } from "@/app/store/productSlise";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart } from "@/app/store/cartSlice";
import { RootState } from "@/app/store/store";
import classNames from "classnames";
interface AddCardProps {
  productInfo: CeramicItem[];
}

export const AddCard: FC<AddCardProps> = ({ productInfo }) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);
  const [isHasCart, setIsHasCart] = useState(false);
  const dispatch = useDispatch();
  const isInCart = cartItems.some((item) => item.id === productInfo._id);
  console.log(cartItems);

  const addQuantityCart = () => {
    setQuantity(quantity + 1);
  };

  const deleteQuntityCart = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    setQuantity(1);
  }, [cartItems, productInfo]);

  const addCartInfo = () => {
    setIsHasCart(isInCart);
    if (isInCart) {
      dispatch(removeCart(productInfo._id));
    } else {
      const cartInfo = {
        id: productInfo._id,
        name: productInfo.name,
        imgUrL: productInfo.imgUrl,
        quantity,
        price: productInfo.price,
        description: productInfo.description,
      };
      dispatch(addCart(cartInfo));
    }
  };

  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center gap-4">
        <h3 className="text-lg">Amount</h3>
        <div className="bg-[#F9F9F9] h-[50px] w-[122px] flex items-center justify-between px-3 rounded">
          <Button
            onClick={deleteQuntityCart}
            variant="ghost"
            className="text-[#CAC6DA] focus:outline-none"
          >
            -
          </Button>
          <span>{quantity}</span>
          <Button
            onClick={addQuantityCart}
            variant="ghost"
            className="text-[#CAC6DA] focus:outline-none"
          >
            +
          </Button>
        </div>
      </div>
      <Button
        onClick={addCartInfo}
        className={classNames("w-[143px] h-[40px] rounded-none", {
          "bg-[#2A254B]": !isInCart,
          "bg-red-500": isInCart,
        })}
      >
        {isInCart ? "Remove to cart" : "Add to cart"}
      </Button>
    </div>
  );
};
