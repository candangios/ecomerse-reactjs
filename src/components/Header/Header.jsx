import { data, Link } from 'react-router';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constans.js';
import Menu from './Menu/Menu.jsx';
import Logo from '@icons/Logo.webp';
import HeartIcon from '@icons/svgs/heartIcon.svg';
import ReloadIcon from '@icons/svgs/reloadIcon.svg';
import CartIcon from '@icons/svgs/cartIcon.svg';
import useScrollHandling from '../../hooks/useScrollHanding.js';
import { useEffect, useState } from 'react';

function Header() {
  const [fixedPosition, setFixedPosition] = useState(false);
  const { scrollPosition } = useScrollHandling();
  useEffect(() => {
    setFixedPosition(scrollPosition > 100 ? true : false);
  }, [scrollPosition]);
  console.log('rerender');

  return (
    <div
      className={`w-full ${
        fixedPosition
          ? 'bg-white  fixed shadow-md -top-[83px] translate-y-[83px]'
          : 'top-0 absolute bg-transparent'
      } z-30 transition-all duration-500  ease-in-out flex items-center justify-center`}
    >
      <div className='container flex justify-between'>
        <div className='flex gap-3 items-center'>
          <div className='flex gap-2'>
            {dataBoxIcon.map((item) => {
              return (
                <BoxIcon key={item.type} type={item.type} href={item.href} />
              );
            })}
          </div>
          <div className='flex gap-3'>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img className='w-full max-w-[153px] ' src={Logo} alt='Logo' />
        </div>
        <div className=' flex items-center gap-3'>
          <div className='flex gap-3 '>
            {dataMenu.slice(3, 6).map((item) => {
              return (
                <Menu
                  key={item.content}
                  content={item.content}
                  href={item.href}
                />
              );
            })}
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-[26px] h-[26px] rounded-full flex items-center justify-center'>
              <img src={ReloadIcon} alt='Reload Icon' />
            </div>
            <div className='w-[26px] h-[26px] rounded-full flex items-center justify-center'>
              <img src={HeartIcon} alt='Reload Icon' />
            </div>
            <div className='w-[26px] h-[26px] p-6 rounded-full flex items-center justify-center'>
              <img src={CartIcon} alt='Reload Icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
