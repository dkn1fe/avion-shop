import { ShoppingCart } from 'lucide-react';

export const EmptyBasket  = () => {
    return (
         <>
             <div className="flex flex-col pt-[200px] justify-center">
                  <ShoppingCart className='m-auto' size={80}/>
                  <h3 className='m-auto text-2xl pt-5'>Your shopping Basket is empty</h3>
             </div>
         </>
    )
}