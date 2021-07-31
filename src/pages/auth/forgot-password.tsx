import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, TYPE_DIALOG } from "../../components/common/Dialog";
import axiosInstance from "../../config/axios";

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    message: '',
    type: TYPE_DIALOG.ERROR
  });
  const hanleSubmit = async () => {
    try {
      setLoading(true);
      await axiosInstance.post('/auth/forgot-password', { email })
      setDialog({
        ...dialog,
        open: true,
        message: 'A secrete password has been sent to your mail, let\'s check and change the new password to be access to the app, if you have any issues, please contact me',
        type: TYPE_DIALOG.SUCCESS
      });
      setEmail('');
    } catch (e) {
      if (e && e?.response?.data?.message) {
        setDialog({
          ...dialog,
          open: true,
          type: TYPE_DIALOG.ERROR,
          message: e?.response?.data?.message
        });
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="form">
      <Dialog isShow={dialog.open} message={dialog.message} type={dialog.type} onClose={(val) => setDialog({ ...dialog, open: val })} />
      <div className="header">
        <div className="logo-container">
          <img src="assets/images/logo.svg" alt="" />
        </div>
        <h5>Forgot Password?</h5>
        <span>Enter your e-mail address below to reset your password.</span>
      </div>
      <div className="content">
        <div className="input-group input-lg">
          <input
            type="text"
            className="form-control"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Enter Email"
          />
          <span className="input-group-addon">
            <i className="zmdi zmdi-email" />
          </span>
        </div>
      </div>
      <div className="footer text-center">
        <button disabled={loading} onClick={hanleSubmit} className="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">
          {loading ? 'LOADING...' : 'SUBMIT'}
        </button>
        <h6 className="m-t-20">
          <NavLink to="/login" className="link" style={{ textDecoration: 'underline' }}>
            Back to Login?
          </NavLink>
        </h6>
      </div>
    </div>
  )
}