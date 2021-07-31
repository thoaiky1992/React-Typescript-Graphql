import moment from "moment"
import React from "react"
import { useSelector } from "react-redux"
import { MessageEntity } from "../../entity/message.entity"
import { RootState } from "../../store/root.reducer"
import iconLoading from '../../assets/icons/loading.gif';
interface IChatHistoryProps {
  messages?: MessageEntity[]
  loadMore?: boolean
}
export const ChatHistory: React.FC<IChatHistoryProps> = ({ messages, loadMore }) => {
  const currentUser = useSelector((state: RootState) => state.auth.user)
  return (
    <ul>
      {
        loadMore && <li style={{ textAlign: 'center', marginBottom: '0px' }}>
          <img src={iconLoading} width="30" height="30" alt="" />
        </li>
      }
      {
        messages?.map((message, index) => (
          <li key={index} className="clearfix">
            <div className={'message-data ' + (currentUser?._id === message.fromId._id ? 'text-right' : '')}>

            </div>
            <div className="message-info right">
              <div className="message-info__image">
                {currentUser?._id !== message.fromId._id ? <img src={message.fromId.avatar} width="30" height="30" alt="" /> : <div></div>}
              </div>
              <div className={'message-info__message ' + (currentUser?._id === message.fromId._id ? 'right' : '')}>
                <div className={'message ' + (currentUser?._id === message.fromId._id ? 'other-message right' : 'my-message')}>
                  {message.content}
                </div>
                <div className="time">
                  <span className="message-data-time">{moment(message.created_at).locale('en').format('LLLL')}</span>
                </div>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  )
}