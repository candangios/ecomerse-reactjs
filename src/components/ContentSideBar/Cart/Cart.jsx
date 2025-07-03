import { ShoppingCart } from 'lucide-react';
import ItemProduct from '../Components/ItemProduct';
import Button from '../../Button/Button';

function Cart() {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2 p-4'>
        <ShoppingCart className='text-primary' />
        <h1 className='text-xl text-primary'>CART</h1>
      </div>
      <div className='flex-1 flex-col gap-1 p-4'>
        <ItemProduct />
        <ItemProduct />
      </div>
      <div className='flex flex-col w-full p-4 '>
        <div className='flex justify-between items-center'>
          <p className='text-md text-thr'>Subtotal:</p>
          <span className='text-sm font-light'>$119.99</span>
        </div>
        <div className='flex flex-col gap-2'>
          <Button content={'VIEW CART'} />
          <Button content={'CHECKOUT'} isPriamry={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
