import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

function BoxIcon({ type, href }) {
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insIcon;
      case 'ytb':
        return ytbIcon;
    }
  };
  return (
    <div className='bg-red-500 p-1'>
      <img className='bg-red-800' src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
