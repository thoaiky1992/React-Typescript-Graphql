import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { socket } from "../../App";
import { UserEntity } from "../../entity/user.entity";
import { updateUserOnlineAction } from "../../store/actions/authenticate/authenticate.action";
import { RootState } from "../../store/root.reducer";

interface IPropUserItem {
  user: UserEntity
}
interface IParamTypes {
  id: string
}

export const UserItem: React.FC<IPropUserItem> = ({ user }) => {
  const params = useParams<IParamTypes>();
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const userOnlines = useSelector((state: RootState) => state.auth.user_onlines)

  useEffect(() => {
    if (params.id && params.id === user._id) setIsSelected(true);
  }, [params])

  return (
    <NavLink to={'/chat/' + user._id}>
      <li key={user._id} className={'clearfix user-item ' + (isSelected ? 'active' : '')}>

        <img className={userOnlines.includes(String(user._id)) ? 'active' : ''} src={user.avatar} alt="avatar" width="45" height="45" />
        <div className="about">
          <div className="name">{user.username}</div>
          <div className={'status ' + (userOnlines.includes(String(user._id)) ? 'active' : '')} >
            <i className={'zmdi zmdi-circle offline ' + (userOnlines.includes(String(user._id)) ? 'active' : '')} />
            {userOnlines.includes(String(user._id)) ? 'online' : 'offline'}
          </div>
        </div>
      </li>
    </NavLink >
  )
}