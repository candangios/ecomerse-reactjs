import { data, Link } from 'react-router';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constans.js';
import Menu from './Menu/Menu.jsx';
import Logo from '@icons/Logo.webp';
import HeartIcon from '@icons/svgs/heartIcon.svg';
import ReloadIcon from '@icons/svgs/reloadIcon.svg';
import CartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '../../hooks/useScrollHanding.js';
import { useSideBar } from '../../hooks/useSideBar.js';
import { useEffect, useState } from 'react';
import { Heart, RefreshCcw, ShoppingCart } from 'lucide-react';

function Header() {
  const [fixedPosition, setFixedPosition] = useState(false);
  const { scrollPosition } = useScrollHandling();

  const { dispatch } = useSideBar();
  useEffect(() => {
    setFixedPosition(scrollPosition > 83 ? true : false);
  }, [scrollPosition]);

  const setIsOpen = (type) => {
    dispatch({ type });
  };

  return (
    <div
      className={`w-full ${
        fixedPosition
          ? 'bg-white  fixed shadow-md -top-[83px] translate-y-[83px] transition-transform duration-300 '
          : 'top-0 absolute bg-transparent'
      } z-30 flex items-center justify-center`}
    >
      <div className='container flex justify-between'>
        <div className='flex gap-5 items-center'>
          <div className='flex gap-3'>
            {dataBoxIcon.map((item) => {
              return (
                <BoxIcon key={item.type} type={item.type} href={item.href} />
              );
            })}
          </div>
          <div className='flex gap-4'>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                  onClick={() => {}}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img className='w-full max-w-[153px] ' src={Logo} alt='Logo' />
        </div>
        <div className=' flex items-center gap-3'>
          <div className='flex gap-4 '>
            {dataMenu.slice(3, 6).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                  onClick={() => {
                    if (item.content === 'SignIn') {
                      setIsOpen('LOGIN');
                    }
                  }}
                />
              );
            })}
          </div>
          <div className='flex items-center gap-2'>
            <div
              onClick={() => {
                setIsOpen('COMPARE');
              }}
              className='w-[26px] h-[26px] rounded-full flex items-center justify-center cursor-pointer'
            >
              <RefreshCcw className='text-primary' />
            </div>
            <div
              onClick={() => {
                setIsOpen('WISHLIST');
              }}
              className='w-[26px] h-[26px] rounded-full flex items-center justify-center cursor-pointer'
            >
              <Heart className='text-primary' />
            </div>
            <div
              onClick={() => {
                setIsOpen('CART');
              }}
              className='w-[26px] h-[26px] rounded-full flex items-center justify-center cursor-pointer'
            >
              <ShoppingCart className='text-primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
