import Header from '@/components/Header/Header';
import MainLayout from '@/components/Layout/Layout';
import { useNavigate } from 'react-router';
import Banner from './components/Banner';
import Filter from './components/Filter';
import { OurShopProvider } from '@/contexts/OurShopProvider';
import ListProducts from './components/ListProducts';
import Footer from '@/components/Footer/Footer';

function OurShop() {
  const navigate = useNavigate();

  const handleBackPreviousPage = () => {
    navigate(-1);
  };
  return (
    <OurShopProvider>
      <Header />
      <MainLayout className='mt-[83px]'>
        <div className='flex justify-between items-center text-thr'>
          <div className='py-2'>
            Home &gt; <span className=''>Shop</span>
          </div>
          <div onClick={() => handleBackPreviousPage()}>
            &lt; Return to previous page
          </div>
        </div>
        <Banner />
        <Filter />
        <ListProducts />
        <Footer />
      </MainLayout>
    </OurShopProvider>
  );
}

export default OurShop;
