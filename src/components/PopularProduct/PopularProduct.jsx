import ProductItem from '../ProductItem/ProductItem';

function PoppularProduct({ data }) {
  return (
    <div className=' mx-auto container grid grid-cols-2 md:grid-cols-4 gap-3 '>
      {data.map((item, index) => (
        <ProductItem key={index} data={item} />
      ))}
    </div>
  );
}

export default PoppularProduct;
