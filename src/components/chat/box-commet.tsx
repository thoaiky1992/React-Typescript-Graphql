import React, { FC, useState } from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axiosInstance from "../../config/axios";
import { RootState } from "../../store/root.reducer";
import gifLoading from '../../assets/icons/loading_black.gif';
export const BoxComment: FC = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const currentUser = useSelector((state: RootState) => state.auth.user)
  const params = useParams<{ id: string }>();
  const handleCreateMessage = async () => {
    const payload = {
      fromId: currentUser?._id,
      toId: params.id,
      content
    }
    await axiosInstance.post('/messages', payload);
    setContent('');
  }
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCreateMessage()
    }
  }

  return (
    <div className="input-group p-t-15">
      <input
        type="text"
        className="form-control"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e)}
        placeholder="Enter text here..."
      />
      <span className="input-group-addon" style={{ cursor: 'pointer' }} onClick={handleCreateMessage}>
        {loading ? <img src={gifLoading} width="22 " height="22" alt="" /> : <i className="zmdi zmdi-mail-send" />}
      </span>
    </div>
  )
}