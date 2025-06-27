function Menu({ content, href, onClick }) {
  return (
    <div
      onClick={onClick}
      className='text-secondary hover:text-primary cursor-pointer'
    >
      {content}
    </div>
  );
}

export default Menu;
