import './styles/pageheader.css';

export const PageHeader = ({ title, start, center, end, breadcrumb }) => {
  return (
    <>
      <div className="page-header">
        <div className="start">
          {title && (
            <div className={['page-header-title', breadcrumb && 'mb-1.5'].join(' ')}>
              {title && title}
            </div>
          )}
          {title && breadcrumb}
          {start && start}
        </div>
        <div className="center">{center && center}</div>
        <div className="end">{end && end}</div>
      </div>
    </>
  );
};
