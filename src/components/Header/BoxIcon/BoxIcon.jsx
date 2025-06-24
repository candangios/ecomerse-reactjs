import fbIcon from '@icons/svgs/fbIcon.svg';
import insIcon from '@icons/svgs/insIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';
import { Link } from 'react-router';

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
    <div>
      <div className='w-[26px] h-[26px] bg-primary rounded-full flex items-center justify-center'>
        <img src={handleRenderIcon(type)} alt={type} />
      </div>
    </div>
  );
}

export default BoxIcon;
