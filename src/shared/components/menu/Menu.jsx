import { MenuItem } from '../../index';
import PropTypes from 'prop-types';

export const Menu = ({ model }) => {
  return (
    <>
      <ul className="layout-menu">
        {model.map((item, index) => (
          <MenuItem item={item} key={index} root={true} />
        ))}
      </ul>
    </>
  );
};

Menu.prototype = {
  model: PropTypes.array,
};
