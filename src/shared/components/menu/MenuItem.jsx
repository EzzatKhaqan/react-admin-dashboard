import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MenuItem = ({ item = [], root = true }) => {
  const hasItem = Array.isArray(item.items) && item.items.length > 0;
  const isLink = Boolean(item.to);
  const Wrapper = isLink ? Link : 'a';
  const wrapperProps = isLink ? { to: item.to } : {};
  const location = useLocation();

  function checkActiveRoute(item) {
    if (item.to) return item.to == location.pathname;
    else return false;
  }

  return (
    <>
      <li className={[root ? 'root-menuitem' : ''].join(' ')}>
        {root && <div className="menuitem-root-text">{item.label}</div>}
        {!root && (
          <Wrapper {...wrapperProps} className={[checkActiveRoute(item) ? 'active-route' : '']}>
            <i className={[item.icon, 'menuitem-icon'].join(' ')}></i>
            <span className="menuitem-text">{item.label}</span>
            {hasItem && <i className="pi pi-angle-down submenu-toggler"></i>}
          </Wrapper>
        )}
        <AnimatePresence>
          {hasItem && ( // recurisve call MenuItem,for submenu items
            <motion.ul className="submenu">
              {item.items.map((submenuItem, index) => (
                <MenuItem item={submenuItem} key={index} root={false} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
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
