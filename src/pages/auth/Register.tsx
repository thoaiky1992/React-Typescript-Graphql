import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { Dialog, TYPE_DIALOG } from "../../components/common/Dialog";
import axiosInstance from "../../config/axios";

export const RegisterPage: React.FC = () => {
  const [info, setInfo] = useState({
    email: '',
    username: '',
    password: ''
  });
  const [dialog, setDialog] = useState({
    open: false,
    message: '',
    type: TYPE_DIALOG.ERROR
  })
  const [isCheckbox, setIsCheckBox] = useState(false);
  const history = useHistory();

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info, [name]: value
    })
  }
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckBox(e.target.checked)
  }
  const signUp = async () => {
    try {
      if (!isCheckbox) {
        setDialog({
          ...dialog, open: true, type: TYPE_DIALOG.ERROR, message: 'You need agree to theterms of usage'
        })
        return;
      }
      if (!info.username.length || !info.password.length || !info.password.length) {
        setDialog({
          ...dialog, open: true, type: TYPE_DIALOG.ERROR, message: 'Email or Name or Password should not be empty'
        })
        return;
      }
      if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(info.email))) {
        setDialog({
          ...dialog, open: true, type: TYPE_DIALOG.ERROR, message: 'Email isn\'t valid'
        })
        return;
      }
      await axiosInstance.post('/auth/create', info);
      setDialog({
        ...dialog, open: true, type: TYPE_DIALOG.SUCCESS, message: 'Account has been created successfully !!!'
      })
    } catch (e) {
      if (e && e.response.data.message) {
        setDialog({
          ...dialog,
          open: true,
          type: TYPE_DIALOG.ERROR,
          message: e.response.data.message
        })
      }
    }
  }
  const handleDialog = (val: boolean) => {
    if (dialog.type === TYPE_DIALOG.SUCCESS) {
      history.push('/login');
    }
    setDialog({
      ...dialog, open: val
    })
  }

  return (
    <div className="form">
      <Dialog isShow={dialog.open} message={dialog.message} type={dialog.type} onClose={(val) => handleDialog(val)} />
      <div className="header">
        <div className="logo-container">
          <img src="assets/images/logo.svg" alt="" />
        </div>
        <h5>Sign Up</h5>
      </div>
      <div className="content">
        <div className="input-group">
          <input type="text" className="form-control" name="username" onChange={(e) => handleOnchange(e)} placeholder="Enter Name" />
          <span className="input-group-addon">
            <i className="zmdi zmdi-account-circle" />
          </span>
        </div>
        <div className="input-group">
          <input type="text" className="form-control" name="email" onChange={(e) => handleOnchange(e)} placeholder="Enter Email" />
          <span className="input-group-addon">
            <i className="zmdi zmdi-email" />
          </span>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" name="password" onChange={(e) => handleOnchange(e)} className="form-control" />
          <span className="input-group-addon">
            <i className="zmdi zmdi-lock" />
          </span>
        </div>
      </div>
      <div className="checkbox">
        <input id="terms" type="checkbox" onChange={(e) => handleCheckbox(e)} />
        <label htmlFor="terms">
          I read and agree to the <span>terms of usage</span>
        </label>
      </div>
      <div className="footer text-center">
        <span onClick={signUp} className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
          SIGN UP
        </span>
        <h6 className="m-t-20">
          <NavLink to="/login" className="link" href="sign-in.html">You already have a membership?</NavLink>
        </h6>
      </div>
    </div>
  )
}