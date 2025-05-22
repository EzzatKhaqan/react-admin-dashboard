import img from '../../assets/images/logo/IMG_5567.jpg';

export const AppAdminHeader = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <div className="logo">
            <img src={img} alt="" />
          </div>
          <div className="nav-title">
            <span>EzZat</span> React
          </div>
        </div>
        <div className="nav-options">
          <div className="nav-theme">
            <div className="toggle-theme-btn">
              <i className="pi pi-moon"></i>
            </div>
          </div>
          <div className="nav-user">
            <div className="user">
              <i className="pi pi-user"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
