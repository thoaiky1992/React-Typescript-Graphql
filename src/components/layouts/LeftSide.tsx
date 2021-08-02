import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { RootState } from "../../store/root.reducer";

export const LeftSide: React.FC = (props) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const path = window.location.pathname;
  return (
    <aside id="leftsidebar" className="sidebar">
      <div className="menu">
        <ul className="list">
          <li style={{ margin: '20px 0px 40px 0px' }}>
            <div className="user-info">
              <div className="image"><a href="profile.html"><img src={user?.avatar} alt="User" /></a></div>
              <div className="detail" style={{ margin: '10px 0px 20px 0px' }}>
                <h5>{user?.username}</h5>
              </div>
            </div>
          </li>
          <li className={path.includes('chat') ? 'active' : ''}>
            <NavLink to="/"><i className="zmdi zmdi-comments" /><span>Chat</span></NavLink>
          </li>
          <li className={path.includes('password') ? 'active' : ''}>
            <NavLink to="/change-password">
              <i className="zmdi zmdi-account-box-phone" /><span>Change Password</span>
            </NavLink>
          </li>
          {/* <li>
            <a><i className="zmdi zmdi-edit" /><span>Edit</span></a>
          </li> */}
        </ul>
      </div>
      <span className="life">
        App Chat &nbsp;<i className="fa fa-heart-o"></i>&nbsp; Kỳ Smile
      </span>
    </aside>
  )

}