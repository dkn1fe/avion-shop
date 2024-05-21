import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Profile } from './Profile';
import { Assortmen } from './Assortmen';

export const Header = () => {
    return(
         <>
           <div className="p-6">
               <div className='flex items-center justify-between  max-[600px]:flex-row'>
                <div className='flex items-center justify-between gap-4 max-[600px]:order-2'>
                 <Search size={20} />
                 <Menu className='min-[600px]:hidden' size={20} />
                </div>
                <h3 className='text-2xl text-neutral-800'>Avion</h3>
                <div className='flex items-center gap-5 '>
                 <ShoppingCart className='max-[600px]:hidden' size={20} />
                 <Profile />
                </div>
               </div>
               <div className='border h-0 mt-2 max-[600px]:hidden'/>
           </div>
           <Assortmen />
         </>
    )
}
