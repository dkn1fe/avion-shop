import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { EmptyBasket } from "../EmptyBasket/EmptyBasket";
import { SubTotal } from "../subTotal/SubTotal";

export const CartItems = () => {
  const { cartItems } = useSelector((state: RootState) => state.cartSlice);

  return (
    <>
      <div className="bg-[#F9F9F9] min-h-[800px]">
        <div className="container my-3 mt-2 mx-auto">
          <h2 className="pt-10 text-4xl">Your shopping cart</h2>
          <div className="hidden md:flex mt-10 mb-3 justify-between">
            <p>Product</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <hr className="hidden md:block" />
          {cartItems.length === 0 && <EmptyBasket />}
          {cartItems.map((item) => (
            <>
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row justify-between items-center mt-5"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="flex items-center gap-4"
                >
                  <div className="relative z-1 w-[150px] mt-3 h-[150px] flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={item.imgUrl}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col gap-2 pt-4 item-center md:-mt-10">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      {item.description.slice(0, 50)}...
                    </p>
                  </div>
                </Link>
                <div className="flex  flex-col items-start -mt-2 md:-mt-10 md:order-2 md:ml-10">
                  <p className="text-gray-600">£{item.price}</p>
                </div>
                <div className="flex flex-col items-start mt-2 md:-mt-10 md:order-1 md:mr-10">
                  <p className="text-gray-600">{item.quantity}</p>
                </div>
              </div>
            </>
          ))}
          {cartItems.length > 0 && (
            <>
              <hr className="mt-8" />
              <SubTotal cartItems={cartItems} />
            </>
          )}
        </div>
      </div>
    </>
  );
};
