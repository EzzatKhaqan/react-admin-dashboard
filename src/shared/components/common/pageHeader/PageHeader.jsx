import './styles/pageheader.css';

export const PageHeader = ({ start, center, end, breadcrumb }) => {
  return (
    <>
      <div className="page-header-wrapper">
        <div className="start">
          <div className={['page-header-title', breadcrumb && 'mb-1.5'].join(' ')}>{start}</div>
          {breadcrumb}
        </div>
        <div className="center">
          <div className="page-header-title">{center}</div>
          <div className="page-header-breadcrumb"></div>
        </div>
        <div className="end">
          <div className="page-header-title">{end}</div>
          <div className="page-header-breadcrumb"></div>
        </div>
      </div>
    </>
  );
};
