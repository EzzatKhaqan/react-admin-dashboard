import { Link } from 'react-router-dom';
import { AppButton } from '../../shared';
function AppPublicHeader() {
  return (
    <>
      <div className="app-public-header">
        <h1>App header</h1>

        <AppButton label="Get Started" type="help" role="link" to="/admin" />
      </div>
    </>
  );
}

export default AppPublicHeader;
