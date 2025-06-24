import Menu from '../Header/Menu/Menu';

const dataMenu = [
  { content: 'Home', href: '#' },
  { content: 'Elements', href: '#' },
  { content: 'Shop', href: '#' },
  { content: 'Blog', href: '#' },
  { content: 'About us', href: '#' },
  { content: 'Contact us', href: '#' },
  { content: 'Compare', href: '#' }
];
function Footer() {
  return (
    <div className='mt-[100px] bg-primary'>
      <div className='flex flex-col justify-center items-center py-6 gap-6'>
        <div className='text-white text-center'>
          <h1 className='text-3xl'>Marseille</h1>
          <h2 className='text-sm capitalize'>XSTore theme</h2>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-8 text-white'>
          {dataMenu.map((item) => (
            <Menu key={item.content} content={item.content} href={item.href} />
          ))}
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-center text-white'>Guaranteed safe ckeckout</h1>
          <img
            src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
            alt=''
          />
        </div>
        <h1 className='text-center text-white'>
          Copyright © 2024 XStore theme. Created by 8theme – WordPress
          WooCommerce themes.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
