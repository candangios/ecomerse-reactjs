import { useState, useEffect, useRef } from 'react';

const TransformNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const prevScrollPos = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = prevScrollPos.current < currentScrollPos;

      // Transform to fixed navbar after scrolling past 100px
      setIsScrolled(currentScrollPos > 100);

      // Hide/show logic for fixed state
      if (isScrolled) {
        setIsVisible(!isScrollingDown || currentScrollPos < 50);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  return (
    <nav
      ref={navRef}
      className={`
        w-full bg-white shadow-md transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${
          isScrolled
            ? `fixed ${isVisible ? 'translate-y-0' : '-translate-y-full'}`
            : 'absolute top-0 left-0'
        }
        z-50
      `}
    >
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-gray-800'>Your Logo</div>

        <div className='hidden md:flex space-x-6'>
          <a
            href='#'
            className='text-gray-600 hover:text-blue-500 transition-colors'
          >
            Home
          </a>
          <a
            href='#'
            className='text-gray-600 hover:text-blue-500 transition-colors'
          >
            About
          </a>
          <a
            href='#'
            className='text-gray-600 hover:text-blue-500 transition-colors'
          >
            Services
          </a>
          <a
            href='#'
            className='text-gray-600 hover:text-blue-500 transition-colors'
          >
            Contact
          </a>
        </div>

        <button className='md:hidden text-gray-800'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default TransformNavbar;
