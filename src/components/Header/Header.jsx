import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './Constans.js';
import Menu from './Menu/Menu.jsx';

function Header() {
  return (
    <div>
      <div>
        <div>
          {dataBoxIcon.map((item) => {
            return (
              <BoxIcon key={item.type} type={item.type} href={item.href} />
            );
          })}
        </div>
        <div>
          {dataMenu.slice(0, 3).map((item) => {
            return (
              <Menu
                key={item.content}
                content={item.content}
                href={item.href}
              />
            );
          })}
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Header;
