import React, { ChangeEvent, useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import axiosInstance from "../../config/axios";
import swal from 'sweetalert';
export const ChangePasswordPage: React.FC = () => {
  const history = useHistory()
  const [state, setState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [err, setErr] = useState({
    currentPassword: [false, 'The password not be empty'],
    newPassword: [false, 'The new password not be empty'],
    confirmPassword: [false, 'The new password not be empty']
  });
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState({
      ...state, [name]: value
    })
    setErr({
      currentPassword: [false, 'The password not be empty'],
      newPassword: [false, 'The new password not be empty'],
      confirmPassword: [false, 'The new password not be empty']
    })
  }
  const handleSubmit = async () => {
    if (state.currentPassword === '') {
      setErr({
        ...err, currentPassword: [true, 'The password not be empty']
      });
      return;
    }
    if (state.newPassword === '') {
      setErr({
        ...err, newPassword: [true, 'The new password not be empty']
      });
      return;
    }
    if (state.confirmPassword === '') {
      setErr({
        ...err, confirmPassword: [true, 'The confirm password not be empty']
      });
      return;
    }
    if (state.currentPassword === state.newPassword) {
      setErr({
        ...err, newPassword: [true, 'The current password and The new password must not be the same']
      });
      return;
    }
    if (state.confirmPassword !== state.newPassword) {
      setErr({
        ...err, confirmPassword: [true, 'The new password and The confirm password don\'t match']
      });
      return;
    }
    try {
      const payload = {
        currentPassword: state.currentPassword,
        newPassword: state.newPassword
      }
      await axiosInstance.post('/users/change-password', payload);
      swal({
        title: "Success",
        text: 'Updated sucessfully !',
        icon: "success",
        buttons: ["Close", false]
      }).then(() => {
        localStorage.removeItem('access_token');
        history.push('/login');
      });
    } catch (error) {
      if (error && error.response.data.message) {
        swal({
          title: "Error!",
          text: error.response.data.message,
          icon: "error",
          buttons: ["Close", false]
        });
      }
    }
  }
  return (
    <section className="content change_passowrd">
      <div className="block-header">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 div_breadcrumb">
            <h2>Chat
              <small className="text-muted">Welcome to App Chat</small>
            </h2>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <ul className="breadcrumb float-md-right">
              <li className="breadcrumb-item"><NavLink to="/" href="index-2.html"><i className="zmdi zmdi-home" /> Home</NavLink></li>
              <li className="breadcrumb-item"><NavLink to="/" >App</NavLink></li>
              <li className="breadcrumb-item active">Form</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        {/* Basic Validation */}
        <div className="row clearfix">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="card">
              <div className="header text-center">
                <h1>Change Password</h1>
              </div>
              <div className="body">
                <div id="form_validation">
                  <div className="form-group form-float">
                    <input type="text" className={'form-control ' + (err.currentPassword[0] ? 'border--red' : '')} value={state.currentPassword} placeholder="Password Current" onChange={(e) => handleOnchange(e)} name="currentPassword" />
                    {err.currentPassword[0] && <span className="color--red ml-3">{err.confirmPassword[1]}</span>}
                  </div>
                  <div className="form-group form-float">
                    <input type="text" className={'form-control ' + (err.newPassword[0] ? 'border--red' : '')} value={state.newPassword} placeholder="New Password" onChange={(e) => handleOnchange(e)} name="newPassword" />
                    {err.newPassword[0] && <span className="color--red ml-3">{err.newPassword[1]}</span>}
                  </div>
                  <div className="form-group form-float">
                    <input type="email" className={'form-control ' + (err.confirmPassword[0] ? 'border--red' : '')} value={state.confirmPassword} placeholder="Confirm Password" onChange={(e) => handleOnchange(e)} name="confirmPassword" />
                    {err.confirmPassword[0] && <span className="color--red ml-3">{err.confirmPassword[1]}</span>}
                  </div>
                  <div className="form-group">
                    <div>
                      <NavLink to='/profile'><i className="zmdi zmdi-long-arrow-right" />&nbsp; Profile ???</NavLink>
                    </div>
                  </div>
                  <button className="btn btn-raised btn-primary btn-round waves-effect" onClick={handleSubmit}>SUBMIT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}