import { X } from 'lucide-react';
import LoginForm from '../ContentSideBar/Auth/LoginForm';
import { useSideBar } from '@/hooks/useSideBar';
import Compare from '../ContentSideBar/Compare/Compare';
import WishList from '../ContentSideBar/WishList/WishList';
import Cart from '../ContentSideBar/Cart/Cart';
import Auth from '../ContentSideBar/Auth/Auth';

function SideBar() {
  const { state, dispatch } = useSideBar();
  const isOpen = state.isOpen;

  const exitsSideBar = () => {
    dispatch({ type: 'EXITS' });
  };

  const renderContentBySideType = (type) => {
    switch (type) {
      case 'LOGIN':
        return <Auth />;
      case 'COMPARE':
        return <Compare />;
      case 'WISHLIST':
        return <WishList />;
      case 'CART':
        return <Cart />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='relative z-50'>
        <div
          onClick={exitsSideBar}
          className={`${
            isOpen ? 'fixed bg-[#0000004d] top-0 right-0 left-0 bottom-0' : ''
          }`}
        ></div>
        <div
          className={`fixed w-full max-w-[370px] top-0 right-0 h-full  bg-white ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300`}
        >
          {isOpen && (
            <div
              onClick={exitsSideBar}
              className='pointer p-2 absolute top-[20px] left-[-50px] bg-white text-primary hover:text-white rounded-full hover:bg-primary/50 transition-colors duration-75'
            >
              <X />
            </div>
          )}
          {renderContentBySideType(state.type)}
        </div>
      </div>
    </>
  );
}

export default SideBar;
