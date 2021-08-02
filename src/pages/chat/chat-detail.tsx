import { useQuery, useSubscription } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { socket } from "../../App";
import { BoxComment } from "../../components/chat/box-commet";
import { ChatHistory } from "../../components/chat/chat-hsitory";
import { HeaderInfoUser } from "../../components/chat/header-info-user";
import { ListUser } from "../../components/chat/list-user";
import axiosInstance from "../../config/axios";
import { MessageEntity } from "../../entity/message.entity";
import { RootState } from "../../store/root.reducer";

export const ChatDetailPage: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const [messages, setMessages] = useState<MessageEntity[]>([]);
  const messageRef = useRef(socket);
  const listMessageRef = useRef<MessageEntity[]>([])
  const skipRef = useRef(0);
  const firstLoad = useRef(true);
  let endLoad = useRef<boolean>(false);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true)
  const [loadMore, setLoadMore] = useState(false);
  const divListMessageRef = useRef<HTMLDivElement>(null)
  const params = useParams<{ id: string }>();
  const handleOnScroll = async (e: React.UIEvent<HTMLDivElement>) => {
    const div = document.querySelector('.chat-history') as HTMLDivElement
    const scrollTop = Number(div.scrollTop);
    if (scrollTop === 0 && !loadMore && !endLoad.current) {
      setLoadMore(true);
      setTimeout(async () => {
        const result = await axiosInstance.get('/messages/message-by-id?id=' + params.id + '&skip=' + skipRef.current);
        if (result.data.rows.length && !endLoad.current) {
          const dataTemp = [...result.data.rows, ...listMessageRef.current];
          listMessageRef.current = dataTemp;
          console.log(listMessageRef.current.length);

          setMessages(listMessageRef.current);
          setCount(result.data.count);
          skipRef.current += 20;
          setLoadMore(false);
        } else {
          endLoad.current = true;
          setLoadMore(false)
        }
      }, 1000);
    }

  }
  useEffect(() => {
    async function fetchMessages() {
      const result = await axiosInstance.get('/messages/message-by-id?id=' + params.id);
      listMessageRef.current = result.data.rows;
      setMessages(listMessageRef.current)
      setCount(result.data.count);
      skipRef.current += 20;
      setLoading(false);
      firstLoad.current = false;
    }
    fetchMessages();

  }, [])

  useEffect(() => {
    if (messages.length) {
      messageRef.current.on('create_message', (message: MessageEntity) => {
        if ((currentUser?._id === message.fromId._id && params.id === message.toId._id) ||
          (currentUser?._id === message.toId._id && params.id === message.fromId._id)
        ) {
          setMessages([...messages, message])
          // divListMessageRef.current?.addEventListener('scroll', (e: any) => handleOnScroll(e))
          const div = document.querySelector('.chat-history') as HTMLDivElement;
          if (div) div.scrollTop = div.scrollHeight;
        }
      })
      if (firstLoad.current === true) {
        setTimeout(() => {
          divListMessageRef.current?.addEventListener('scroll', (e: any) => handleOnScroll(e))
          const div = document.querySelector('.chat-history') as HTMLDivElement;
          if (div) div.scrollTop = div.scrollHeight;
        }, 500);
      }
      return () => {
        socket.off('create_message');
      }
    }
  }, [messages])

  useEffect(() => {

  }, [])
  if (loading) return <div>loading....</div>
  return (
    <section className="content chat_detail">
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
              <li className="breadcrumb-item active">Chat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row clearfix">
          <div className="col-lg-12 col-xl-12">
            <div className="card chat-app">
              <div id="plist" className="people-list">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." />
                  <span className="input-group-addon">
                    <i className="zmdi zmdi-search" />
                  </span>
                </div>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane slideRight active" id="people">
                    <ListUser />
                  </div>
                </div>
              </div>
              <div className="chat">
                <HeaderInfoUser count={count} />
                <div className="chat-history" ref={divListMessageRef}>
                  <ChatHistory messages={messages} loadMore={loadMore} />
                </div>
                <div className="chat-message clearfix">
                  <BoxComment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}