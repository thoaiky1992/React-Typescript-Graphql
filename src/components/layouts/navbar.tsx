import React from "react";
import { useHistory } from "react-router-dom";

export const NavBarLayoutDefault: React.FC = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    history.push('/login')
  }
  return (
    <nav className="navbar">
      <div className="col-12">
        <ul className="nav navbar-nav navbar-left">
          <li><a className="toggle-left-side"><i className="zmdi zmdi-swap" /></a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" role="button">
              <i className="zmdi zmdi-notifications" />
              <div className="notify"><span className="heartbit" /><span className="point" /></div>
            </a>
            <ul className="dropdown-menu dropdown-menu-right slideDown">
              <li className="header">NOTIFICATIONS</li>
              <li className="body">
                <ul className="menu list-unstyled">
                  <li> <a >
                    <div className="icon-circle bg-blue"><i className="zmdi zmdi-account" /></div>
                    <div className="menu-info">
                      <h4>8 New Members joined</h4>
                      <p><i className="zmdi zmdi-time" /> 14 mins ago </p>
                    </div>
                  </a> </li>
                  <li> <a >
                    <div className="icon-circle bg-amber"><i className="zmdi zmdi-shopping-cart" /></div>
                    <div className="menu-info">
                      <h4>4 Sales made</h4>
                      <p> <i className="zmdi zmdi-time" /> 22 mins ago </p>
                    </div>
                  </a> </li>
                  <li> <a >
                    <div className="icon-circle bg-red"><i className="zmdi zmdi-delete" /></div>
                    <div className="menu-info">
                      <h4><b>Nancy Doe</b> Deleted account</h4>
                      <p> <i className="zmdi zmdi-time" /> 3 hours ago </p>
                    </div>
                  </a> </li>
                  <li> <a >
                    <div className="icon-circle bg-green"><i className="zmdi zmdi-edit" /></div>
                    <div className="menu-info">
                      <h4><b>Nancy</b> Changed name</h4>
                      <p> <i className="zmdi zmdi-time" /> 2 hours ago </p>
                    </div>
                  </a> </li>
                  <li> <a >
                    <div className="icon-circle bg-grey"><i className="zmdi zmdi-comment-text" /></div>
                    <div className="menu-info">
                      <h4><b>John</b> Commented your post</h4>
                      <p> <i className="zmdi zmdi-time" /> 4 hours ago </p>
                    </div>
                  </a> </li>
                  <li> <a >
                    <div className="icon-circle bg-purple"><i className="zmdi zmdi-refresh" /></div>
                    <div className="menu-info">
                      <h4><b>John</b> Updated status</h4>
                      <p> <i className="zmdi zmdi-time" /> 3 hours ago </p>
                    </div>
                  </a> </li>
                  <li> <a >
                    <div className="icon-circle bg-light-blue"><i className="zmdi zmdi-settings" /></div>
                    <div className="menu-info">
                      <h4>Settings Updated</h4>
                      <p> <i className="zmdi zmdi-time" /> Yesterday </p>
                    </div>
                  </a>
                  </li>
                </ul>
              </li>
              <li className="footer"> <a >View All Notifications</a> </li>
            </ul>
          </li>
          <li>
            <a onClick={handleLogout} className="mega-menu" data-close="true"><i className="zmdi zmdi-power" /></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}