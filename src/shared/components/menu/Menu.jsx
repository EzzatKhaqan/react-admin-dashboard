import { useState } from 'react';
import { MenuItem } from '../../index';
import PropTypes from 'prop-types';

export const Menu = ({ model }) => {
  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);
  return (
    <>
      <ul className="menu">
        {model.map((item, index) => (
          <MenuItem key={index} item={item} root={true} index={index} />
        ))}
      </ul>
    </>
  );
};

Menu.prototype = {
  model: PropTypes.array,
};
