import React, { useEffect } from "react";
import { LeftSide } from "../components/layouts/LeftSide";
import { NavBarLayoutDefault } from "../components/layouts/navbar";
import { Helmet } from "react-helmet";
import { socket } from "../App";
import { useDispatch } from "react-redux";
import { updateUserOnlineAction } from "../store/actions/authenticate/authenticate.action";

export const DefaultPaylout: React.FC = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    socket.emit('join_room');
    socket.on('get_users_online', (data) => {
      dispatch(updateUserOnlineAction(data))
    })

  }, [])
  return (
    <div className="main-default">

      <LeftSide />

      <div className="main-default__top">
        <NavBarLayoutDefault />
      </div>
      <div className="main-default__bottom">
        {children}
      </div>

      <Helmet>
        <link rel="stylesheet" href="/assets/css/chatapp.css" />
      </Helmet>

    </div>
  )
}