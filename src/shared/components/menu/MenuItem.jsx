import { Link } from 'react-router-dom';
import './styles/menu-item.css';
import PropTypes from 'prop-types';

export const MenuItem = ({ item = [], root = true }) => {
  const hasItem = Array.isArray(item.items) && item.items.length > 0;
  const isLink = Boolean(item.to);
  const Wrapper = isLink ? Link : 'a';
  const wrapperProps = isLink ? { to: item.to } : {};

  return (
    <>
      <li className={root ? 'root-menuitem' : ''}>
        {root && <div className="menuitem-root-text">{item.label}</div>}
        {!root && (
          <Wrapper {...wrapperProps}>
            <i className={[item.icon, 'menuitem-icon'].join(' ')}></i>
            <span className="menuitem-text">{item.label}</span>
            {hasItem && <i className="pi pi-angle-down layout-submenu-toggler"></i>}
          </Wrapper>
        )}
        {hasItem && ( // recurisve call MenuItem,for submenu items
          <ul className="submenu">
            {item.items.map((submenuItem, index) => (
              <MenuItem item={submenuItem} key={index} root={false} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.string,
    to: PropTypes.string,
  }),
  root: PropTypes.bool,
};
