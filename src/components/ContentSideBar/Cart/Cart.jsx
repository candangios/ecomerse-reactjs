import { ShoppingCart } from 'lucide-react';
import ItemProduct from '../Components/ItemProduct';
import Button from '../../Button/Button';
import { useEffect, useMemo, useState } from 'react';
import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';
import { useSideBar } from '@/hooks/useSideBar';

function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const [listProductCart, setlistProductCart] = useState([]);
  const { state } = useSideBar();
  const userId = Cookies.get('userId');
  useEffect(() => {
    setIsLoading(true);
    getCart(userId)
      .then((res) => {
        setlistProductCart(res.data.data);
      })
      .catch((error) => {})
      .finally(() => {
        console.log(listProductCart);
        setIsLoading(false);
      });
  }, [userId, state.isOpen]);

  const subTotal = useMemo(() => {
    return listProductCart.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }, [listProductCart]);

  return (
    <div className='w-full h-full flex flex-col items-center'>
      <div className='flex flex-col items-center gap-2 p-4'>
        <ShoppingCart className='text-primary' />
        <h1 className='text-xl text-primary'>CART</h1>
      </div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <div className='flex-1 w-full flex-col gap-1 p-4'>
            {listProductCart.map((item, index) => (
              <ItemProduct
                key={index}
                src={item.images[0]}
                nameProduct={item.name}
                priceProduct={item.price}
                skuProduct={item.sku}
                sizeProduct={item.size}
                quantity={item.quantity}
                productId={item.productId}
                userId={item.userId}
              />
            ))}
          </div>
          <div className='flex flex-col w-full p-4 '>
            <div className='flex justify-between items-center'>
              <p className='text-md text-thr'>Subtotal:</p>
              <span className='text-sm font-light'>${subTotal}</span>
            </div>
            <div className='flex flex-col gap-2'>
              <Button content={'VIEW CART'} />
              <Button content={'CHECKOUT'} isPriamry={false} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
