import React, { useState } from "react";
export enum TYPE_DIALOG {
  SUCCESS,
  ERROR
}
interface IProps {
  type?: TYPE_DIALOG,
  message?: String,
  isShow?: Boolean
}
export const Dialog: React.FC<IProps> = ({ type, message, isShow }) => {
  return (
    <div className={'parent' + (isShow ? ' active' : '')}>
      <div className={'popup center' + (isShow ? ' active' : '')}>
        <div className="icon">
          <i className="fa fa-times"></i>
        </div>
        <div className="title">
          {type === TYPE_DIALOG.SUCCESS ? 'Success!!' : 'Error!!'}
        </div>
        <div className="description">
          {message}
        </div>
        <div className="dismiss-btn">
          <button className="btn" id="dismiss-popup-btn" onClick={() => isShow}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}