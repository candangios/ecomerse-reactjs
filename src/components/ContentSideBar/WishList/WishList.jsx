import { Heart } from 'lucide-react';
import Button from '../../Button/Button';
import ItemProduct from '../Components/ItemProduct';

function WishList() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2 p-4'>
        <Heart size='30px' className='text-primary' />
        <h1 className='text-xl text-primary uppercase'>WISHLIST</h1>
      </div>
      <div className='flex-1 flex-col gap-1 p-4'>
        <ItemProduct />
        <ItemProduct />
      </div>
      <div className='flex flex-col w-full p-4 gap-1'>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPriamry={false} />
      </div>
    </div>
  );
}

export default WishList;
