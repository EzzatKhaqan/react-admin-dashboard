import { useMemo, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useLayout } from '../../../layouts/admin/context/LayoutContext';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

export const MenuItem = ({ item = {}, root = true, index, parentItemKey }) => {
  const location = useLocation();
  const submenuRef = useRef(null);

  const hasItem = Array.isArray(item.items) && item.items.length > 0;
  const isLink = Boolean(item.to);
  const Wrapper = isLink ? Link : 'a';
  const wrapperProps = isLink ? { to: item.to } : {};
  const { activeMenuItem, setActiveMenuItem } = useLayout();

  // Dynamically compute item key
  const itemKey = useMemo(() => {
    return parentItemKey ? `${parentItemKey}-${index}` : String(index);
  }, [parentItemKey, index]);
  // Dynamically compute isActiveMenu
  const isActiveMenu = useMemo(() => {
    return (
      activeMenuItem === itemKey || (activeMenuItem && activeMenuItem.startsWith(itemKey + '-'))
    );
  }, [activeMenuItem, itemKey]);

  const itemClick = (event, item) => {
    const newActiveKey = hasItem ? (itemKey === activeMenuItem ? parentItemKey : itemKey) : itemKey;
    setActiveMenuItem(newActiveKey);
  };

  const checkActiveRoute = () => item.to === location.pathname;
  const submenuVisible = hasItem && (root || isActiveMenu);

  return (
    <li className={[root ? 'root-menuitem' : '', isActiveMenu && 'active-menuitem'].join(' ')}>
      {root && <div className="menuitem-root-text">{item.label}</div>}

      {!root && (
        <Wrapper
          {...wrapperProps}
          className={[checkActiveRoute() ? 'active-route' : ''].join(' ')}
          onClick={(e) => {
            if (hasItem) {
              e.preventDefault();
              itemClick(e, item);
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
        timeout={300}
        classNames="submenu"
        unmountOnExit
        nodeRef={submenuRef}
      >
        <ul className="submenu" ref={submenuRef}>
          {hasItem &&
            item.items.map((child, i) => (
              <MenuItem key={i} item={child} root={false} index={i} parentItemKey={itemKey} />
            ))}
        </ul>
      </CSSTransition>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object.isRequired,
  root: PropTypes.bool,
  index: PropTypes.number.isRequired,
  parentItemKey: PropTypes.string,
};
