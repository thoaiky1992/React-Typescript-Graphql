import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axiosInstance from "../../config/axios"
import { UserEntity } from "../../entity/user.entity"

interface IHeaderInfoUserProps {
  count: number
}
export const HeaderInfoUser: React.FC<IHeaderInfoUserProps> = ({ count }) => {
  const params = useParams<{ id: string }>()
  const [user, setUser] = useState<UserEntity | undefined>(undefined)
  useEffect(() => {
    async function fetchSuer() {
      const result = await axiosInstance.get('/users/' + params.id);
      setUser(result.data);
    }
    fetchSuer();
  }, [])

  if (!user) return <div>loading...</div>
  return (
    <div className="chat-header clearfix">
      <img src={user?.avatar} alt="avatar" width="45" height="45" />
      <div className="chat-about">
        <div className="chat-with">{user?.username || ''}</div>
        <div className="chat-num-messages">Already {count || 0} messages</div>
      </div>
      <span className="list_btn btn btn-primary btn-round float-md-right"><i className="zmdi zmdi-comments" /></span>
    </div>
  )
}