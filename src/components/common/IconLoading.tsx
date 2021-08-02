import React from "react"
import gifLoading from '../../assets/icons/loading.gif';
export const IconLoading: React.FC = () => {
  return (
    <div className="gif-loading">
      <img src={gifLoading} alt="" width="50" height="50" />
    </div>
  )
}
