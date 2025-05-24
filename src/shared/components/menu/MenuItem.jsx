import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { CSSTransition } from 'react-transition-group';
export const MenuItem = ({ item = [], root = true, index }) => {
  const hasItem = Array.isArray(item.items) && item.items.length > 0;
  const isLink = Boolean(item.to);
  const Wrapper = isLink ? Link : 'a';
  const wrapperProps = isLink ? { to: item.to } : {};
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const submenuRef = useRef(null);
  function toggleSubmenu() {
    setIsOpen((prev) => !prev);
  }

  function checkActiveRoute(item) {
    if (item.to) return item.to == location.pathname;
    else return false;
  }

  function checkSubmenu() {
    return root ? true : isOpen;
  }
  const submenuVisible = hasItem && checkSubmenu();
  return (
    <>
      <li className={[root ? 'root-menuitem' : '', isOpen && 'active-menuitem'].join(' ')}>
        {root && <div className="menuitem-root-text">{item.label}</div>}
        {!root && (
          <Wrapper
            {...wrapperProps}
            className={[checkActiveRoute(item) ? 'active-route' : '']}
            onClick={(e) => {
              if (hasItem) {
                e.preventDefault();
                toggleSubmenu();
              }
            }}
          >
            <i className={[item.icon, 'menuitem-icon'].join(' ')}></i>
            <span className="menuitem-text">{item.label}</span>
            {hasItem && <i className="pi pi-angle-right submenu-toggler"></i>}
          </Wrapper>
        )}

        <CSSTransition
          in={submenuVisible}
          timeout={1000}
          classNames="submenu"
          unmountOnExit
          nodeRef={submenuRef}
        >
          <ul className="submenu" ref={submenuRef}>
            {hasItem &&
              item.items.map((item, index) => (
                <MenuItem key={index} item={item} root={false} index={index} />
              ))}
          </ul>
        </CSSTransition>

        {/* {hasItem && ( 
          <AnimatePresence initial={false}>
            {checkSubmenu() && (
              <motion.ul
                className="submenu overflow-hidden"
                key="submenu"
                initial={{ maxHeight: 0, opacity: 0 }}
                animate={{ maxHeight: 1000, opacity: 1 }}
                exit={{ maxHeight: 0 }}
                transition={{
                  maxHeight: { duration: 0.1, ease: 'easeInOut' },
                }}
              >
                {item.items.map((item, index) => (
                  <MenuItem key={index} item={item} root={false} index={index} />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        )} */}
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
