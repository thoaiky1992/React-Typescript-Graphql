import React from 'react'
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="assets/css/authentication.css" />
      </Helmet>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-transparent">
        <div className="container">
          <div className="navbar-translate n_logo">
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link" title="Follow us on Google">
                  <i className="zmdi zmdi-google" />
                  <p className="d-lg-none d-xl-none">Google</p>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" title="Like us on Facebook">
                  <i className="zmdi zmdi-facebook" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" title="Follow us on Github">
                  <i className="zmdi zmdi-github" />
                  <p className="d-lg-none d-xl-none">Github</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <div className="page-header">
        <div className="page-header-image" style={{ backgroundImage: 'url(assets/images/login.jpg)' }} />
        <div className="container">
          <div className="col-md-12 content-center">
            <div className="card-plain">
              {/* children component */}
              {children}
              {/* children component */}
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="copyright">
              <span>App Chat <NavLink to="/">Kỳ Smile</NavLink></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}