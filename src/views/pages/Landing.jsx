import { AppButton } from '../../shared/index';
function Landing() {
  return (
    <>
      <div className="landing-page">
        <header className="navbar">
          <div className="container">
            <h1 className="brand">Ezzat React Admin Dashboard</h1>
            <nav>
              <a href="#features">Features</a>
              <a href="#about">About</a>
            </nav>
          </div>
        </header>

        <section className="hero">
          <h2>Manage Everything with Ease</h2>
          <p>
            A robust <span className="gradient-text">React.js</span> admin dashboard that
            consolidates all administrative components into a single, manageable interface.
          </p>
          <div className="hero-buttons">
            <AppButton
              label="Get Started"
              type="info"
              role="link"
              to="/admin"
              icon="pi pi-caret-right"
              outlined={true}
            />
          </div>
        </section>

        <section id="features" className="features">
          <h3>Features</h3>
          <div className="features-grid">
            <div className="feature-card">
              <h4>Advanced Data Tables</h4>
              <p>
                Create, filter, sort, and paginate data effortlessly with fully customizable,
                high-performance tables.
              </p>
            </div>

            <div className="feature-card">
              <h4>Interactive UI Components</h4>
              <p>
                From buttons to dropdowns and modals, every component is designed for speed,
                accessibility, and style.
              </p>
            </div>

            <div className="feature-card">
              <h4>Seamless Integration</h4>
              <p>
                Built with <span className="gradient-text">React.js</span> for easy integration into
                any admin panel, with consistent design and responsive layouts.
              </p>
            </div>
          </div>
        </section>

        <footer className="_footer">
          © {new Date().getFullYear()} My Admin Dashboard. Some code, some magic ✨.
        </footer>
      </div>
    </>
  );
}

export default Landing;
