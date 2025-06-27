import Header from '@components/Header/Header';
import Banner from '@/components/Baner/Baner';
import SectionInfo from '../../components/SectionInfo/SectionInfo';
import AdvanceHeading from '../../components/AdvanceHeading/AdvanceHeading';
import HeadingListproducts from '../../components/HeadingListProduct/HeadingListProduct';
import PoppularProduct from '../../components/PopularProduct/PopularProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '../../apis/productService';
import TransformNavbar from '../../components/Header/AnimatedNavbar';
import SaleHomePage from '../../components/SaleHomePage/SaleHomePage';
import Footer from '../../components/Footer/Footer';

function HomePage() {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    const query = {
      sortType: 0,
      page: 1,
      limit: 10
    };

    getProducts(query).then((res) => {
      setListProducts(res.contents);
    });
  }, []);
  return (
    <div>
      {/* <TransformNavbar /> */}
      <Header />
      <Banner />
      <div className=' mt-[-75px]'>
        <SectionInfo />
      </div>
      <AdvanceHeading />
      <HeadingListproducts data={listProducts.slice(0, 2)} />
      <PoppularProduct data={listProducts.slice(2, listProducts.length)} />
      <SaleHomePage />
      <Footer />
    </div>
  );
}

export default HomePage;
