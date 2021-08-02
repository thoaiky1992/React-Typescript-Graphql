import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom"
import { socket } from "../../App";
import { Dialog, TYPE_DIALOG } from "../../components/common/Dialog";
import axiosInstance from "../../config/axios";
import { loginAction } from "../../store/actions/authenticate/authenticate.action";


export const LoginPage: React.FC = () => {
  const [dialog, setDialog] = useState({
    open: false,
    message: '',
    type: TYPE_DIALOG.ERROR
  })
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      if (!user.email.length) {
        setDialog({
          ...dialog, type: TYPE_DIALOG.ERROR, message: 'Username should not be empty', open: true
        })
        return;
      }
      if (!user.password.length) {
        setDialog({
          ...dialog, type: TYPE_DIALOG.ERROR, message: 'Password should not be empty', open: true
        })
        return;
      }
      if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(user.email))) {
        setDialog({
          ...dialog, open: true, type: TYPE_DIALOG.ERROR, message: 'Email isn\'t valid'
        })
        return;
      }
      const result = await axiosInstance.post('/auth/login', user);
      dispatch(loginAction(result.data));
      socket.emit('join_room');
      history.push('/home');
    } catch (e) {
      if (e && e?.response.data.message) {
        setDialog({
          ...dialog,
          open: true,
          type: TYPE_DIALOG.ERROR,
          message: e?.response.data.message
        })
      }
    }
  }
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUser({
      ...user, [name]: value
    })
  }
  const handleClose = (val: boolean) => {
    setDialog({
      ...dialog, open: val
    })
  }
  return (
    <div className="form">
      <Dialog isShow={dialog.open} message={dialog.message} onClose={(value) => handleClose(value)} />
      <div className="header">
        <div className="logo-container">
          <img src="assets/images/logo.svg" alt="" />
        </div>
        <h5>Login</h5>
      </div>
      <div className="content">
        <div className="input-group input-lg">
          <input type="text" className="form-control" onChange={(e) => handleOnChange(e)} name="email" autoComplete="off" placeholder="Enter Email" />
          <span className="input-group-addon">
            <i className="zmdi zmdi-account-circle" />
          </span>
        </div>
        <div className="input-group input-lg">
          <input type="password" placeholder="Password" onChange={(e) => handleOnChange(e)} name="password" autoComplete="off" className="form-control" />
          <span className="input-group-addon">
            <i className="zmdi zmdi-lock" />
          </span>
        </div>
      </div>
      <div className="footer text-center">
        <span className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light" onClick={handleLogin}>
          Sign In
        </span>
        {/* <span className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
          <i className="zmdi zmdi-facebook" /> Login Facebook
        </span>
        <span className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
          <i className="zmdi zmdi-google" /> Login Google
        </span> */}
        <h6 className="m-t-20">
          <NavLink to="/forgot-password" className="link">Forgot Password ? </NavLink>
          <NavLink to="/register" style={{ textDecoration: 'underline', color: 'white' }}>Register</NavLink>
        </h6>
      </div>
    </div>
  )
}