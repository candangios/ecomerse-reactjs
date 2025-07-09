import { addProductToCart } from '@/apis/cartService';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useSideBar } from '@/hooks/useSideBar';
import Cookies from 'js-cookie';
import {
  Eye,
  Heart,
  RefreshCcw,
  ShoppingBag,
  ShoppingCart
} from 'lucide-react';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

function ProductItem({
  src,
  prevSrc,
  name,
  price,
  details,
  isHomepage = true,
  isShowGrid = true
}) {
  const [sizeChoose, setSizeChoose] = useState(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const userId = Cookies.get('userId');
  const { dispatch } = useSideBar();

  const handleChooseSize = (size) => {
    setSizeChoose(size);
  };
  const handleAddToCart = () => {
    if (isAddingToCart) return;
    if (!userId) {
      toast.warning('Please login to add product to cart!');
      return;
    }
    if (!sizeChoose) {
      toast.warning('Please choose size!');
      return;
    }
    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChoose
    };
    setIsAddingToCart(true);
    addProductToCart(data)
      .then((res) => {
        dispatch({ type: 'CART' });
      })
      .catch((error) => {})
      .finally(() => {
        setIsAddingToCart(false);
      });
  };

  return (
    <div
      className={`group ${
        !isHomepage && !isShowGrid ? 'flex gap-2' : 'flex flex-col gap-2'
      } `}
    >
      <div className='relative  overflow-hidden'>
        <div className=' absolute w-[50px] bg-gray-100 right-[-50px] bottom-[20px] h-[180px] transform transition-transform duration-300 translate-x-0 group-hover:translate-x-[-70px]'>
          <div className='w-full h-full flex flex-col items-center justify-around'>
            <button className='iconBtn'>
              <ShoppingBag className='text-primary' />
            </button>
            <button className='iconBtn'>
              <Heart className='text-primary' />
            </button>
            <button className='iconBtn'>
              <RefreshCcw className='text-primary' />
            </button>
            <button className='iconBtn'>
              <Eye className='text-primary' />
            </button>
          </div>
        </div>
        <img src={src} className='block group-hover:hidden' alt='product' />
        <img
          src={prevSrc}
          className='hidden group-hover:block '
          alt='product'
        />
      </div>
      <div className='flex flex-col justify-center gap-2 mt-1'>
        {!isHomepage && (
          <div className={`flex gap-2 ${isShowGrid ? 'mx-auto' : ''}`}>
            {details.size.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`iconBtn border w-[20px] h-[20px] text-[10px] flex items-center justify-center ${
                    item.name === sizeChoose
                      ? 'text-primary border-primary'
                      : 'text-secondary border-secondary'
                  }`}
                  onClick={() => handleChooseSize(item.name)}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        )}
        <div
          className={`${
            isHomepage || !isShowGrid
              ? ''
              : 'flex flex-col items-center justify-center'
          } `}
        >
          <h2 className='text-primary font-roboto font-normal'>{name}</h2>
          <p className='text-secondary text-sm '>${price}</p>
        </div>
        {!isHomepage && (
          <button
            className={`btn primaryBtn uppercase w-[150px] text-sm ${
              isShowGrid ? 'mx-auto' : ''
            }`}
            onClick={handleAddToCart}
          >
            {isAddingToCart ? 'Adding to cart' : 'Add to card'}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
