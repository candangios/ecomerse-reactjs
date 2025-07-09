import Button from '@/components/Button/Button';
import MainLayout from '@/components/Layout/Layout';
import ProductItem from '@/components/ProductItem/ProductItem';
import { OurShopContext } from '@/contexts/OurShopProvider';
import { useContext } from 'react';

function ListProducts() {
  const { products, isShowGrid, isLoading, handleLoadMore, total, isLoadMore } =
    useContext(OurShopContext);
  return (
    <div className='min-h-[800px] mt-3'>
      <MainLayout>
        {isLoading ? (
          <>Loading...</>
        ) : (
          <>
            <div
              className={
                isShowGrid
                  ? 'grid grid-cols-2 md:grid-cols-4 gap-3.5'
                  : 'flex flex-col gap-3.5'
              }
            >
              {products.map((item) => (
                <ProductItem
                  key={item.id}
                  src={item.images[0]}
                  prevSrc={item.images[1]}
                  name={item.name}
                  price={item.price}
                  details={item}
                  isHomepage={false}
                  isShowGrid={isShowGrid}
                />
              ))}
            </div>
            {products.length < total && (
              <div className='mt-10 flex items-center justify-center'>
                <Button
                  className='w-[300px] h-[40px] mx-auto'
                  content={isLoadMore ? <>Loading...</> : 'LOAD MORE PRODUCT'}
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
}

export default ListProducts;
