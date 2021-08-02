import React, { FC, RefObject, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { socket } from "../../App";
import axiosInstance from "../../config/axios";
import { UserEntity } from "../../entity/user.entity";
import { updateUserOnlineAction } from "../../store/actions/authenticate/authenticate.action";
import { UserItem } from "./user";

interface IListUserProps {
  ref?: RefObject<FC<{}>>;
}
export const ListUser: React.FC<IListUserProps> = () => {
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const socketRef = useRef(socket);
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const findIndexById = (array: Array<UserEntity>, id: string): number => {
    let index = -1;
    array.forEach((item, i) => {
      if (item._id === id) {
        index = i;
      }
    });
    return index;
  }
  const moveItemInArray = (array: Array<UserEntity>, from: number, to: number) => {
    if (to === from) return array;

    var target = array[from];
    var increment = to < from ? -1 : 1;

    for (let k = from; k !== to; k += increment) {
      array[k] = array[k + increment];
    }
    array[to] = target;
    return array;
  }
  useEffect(() => {
    socketRef.current.emit('join_room');
    async function fetchData() {
      const result = await axiosInstance.get('/users');
      setUsers([...result.data.rows]);
      setLoading(false);
    }
    fetchData();
  }, [])

  useEffect(() => {
    if (users.length) {
      socketRef.current.on('get_users_online', (listId: Array<string>) => {
        let usersTemp = [...users];
        users.forEach(user => {
          if (listId.includes(user._id)) {
            moveItemInArray(usersTemp, findIndexById(usersTemp, user._id), 0)
          }
        })
        setUsers(usersTemp);
      })
      return () => {
        socket.off('get_users_online');
      }
    }
  }, [users])

  if (loading) return <div>loading...</div>
  return (
    <ul className="chat-list list-unstyled m-b-0">
      {users.map((user) => <UserItem user={user} key={user._id} />)}
    </ul>
  )
}