import React, { useEffect } from "react";
export enum TYPE_DIALOG {
  SUCCESS,
  ERROR
}
interface IProps {
  type?: TYPE_DIALOG,
  message?: String,
  isShow: Boolean,
  onClose?: (value: boolean) => void
}

export const Dialog: React.FC<IProps> = ({ type, message, isShow, onClose }) => {

  useEffect(() => {
    if (isShow)
      document.body.classList.add('open__popup')

    return () => {
      document.body.classList.remove('open__popup')
    }
  }, [isShow])
  return (
    // <div className={'parent ' + (isShow ? 'active' : '')}>
    <div className={'popup center' + (isShow ? ' active' : '')}>
      <div className={'icon ' + (type === TYPE_DIALOG.SUCCESS ? '' : 'error')}>
        <i className="fa fa-times"></i>
      </div>
      <div className="title">
        {type === TYPE_DIALOG.SUCCESS ? 'Success!!' : 'Error!!'}
      </div>
      <div className="description">
        {message}
      </div>
      <div className="dismiss-btn">
        <button className="btn" id="dismiss-popup-btn" onClick={() => onClose ? onClose(!isShow) : null}>
          Close
          </button>
      </div>
    </div>
    // </div>
  );
}

Dialog.defaultProps = {
  message: 'asdasdasd'
}