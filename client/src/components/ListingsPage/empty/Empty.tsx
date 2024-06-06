import { ShoppingBasket } from 'lucide-react';

export const Empty = () => {
  return (
    <div className="flex flex-col pt-[200px] md:pl-[450px]">
      <ShoppingBasket className='m-auto' size={80} />
      <h3 className='m-auto text-xl md:text-2xl text-gray-600'>Product is not found</h3>
    </div>
  );
};
