import React from "react";
import { NavLink } from "react-router-dom";

export const ChatPage: React.FC = () => {
  return (
    <section className="content">
      <div className="block-header">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h2>Chat
                <small className="text-muted">Welcome to Compass</small>
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
                    <ul className="chat-list list-unstyled m-b-0">
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar1.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Vincent Porter</div>
                          <div className="status"> <i className="zmdi zmdi-circle offline" /> anh nhớ em .. </div>
                        </div>
                      </li>
                      <li className="clearfix active">
                        <img src="assets/images/xs/avatar2.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Aiden Chavez</div>
                          <div className="status"> <i className="zmdi zmdi-circle online" /> online </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar3.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Mike Thomas</div>
                          <div className="status"> <i className="zmdi zmdi-circle online" /> online </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar4.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Erica Hughes</div>
                          <div className="status"> <i className="zmdi zmdi-circle online" /> online </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar5.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Ginger Johnston</div>
                          <div className="status"> <i className="zmdi zmdi-circle online" /> online </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar6.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Tracy Carpenter</div>
                          <div className="status"> <i className="zmdi zmdi-circle offline" /> left 30 mins ago </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar7.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Christian Kelly</div>
                          <div className="status"> <i className="zmdi zmdi-circle offline" /> left 10 hours ago </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar8.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Monica Ward</div>
                          <div className="status"> <i className="zmdi zmdi-circle online" /> online </div>
                        </div>
                      </li>
                      <li className="clearfix">
                        <img src="assets/images/xs/avatar9.jpg" alt="avatar" />
                        <div className="about">
                          <div className="name">Dean Henry</div>
                          <div className="status"> <i className="zmdi zmdi-circle offline" /> offline since Oct 28 </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chat">
                <div className="chat-header clearfix">
                  <img src="assets/images/xs/avatar2.jpg" alt="avatar" />
                  <div className="chat-about">
                    <div className="chat-with">Aiden Chavez</div>
                    <div className="chat-num-messages">already 8 messages</div>
                  </div>
                  <a className="list_btn btn btn-primary btn-round float-md-right"><i className="zmdi zmdi-comments" /></a>
                </div>
                <div className="chat-history">
                  <ul>
                    <li className="clearfix">
                      <div className="message-data text-right"> <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp; <span className="message-data-name">Michael</span> <i className="zmdi zmdi-circle me" /> </div>
                      <div className="message other-message float-right"> Hi Aiden, </div>
                    </li>
                    <li>
                      <div className="message-data">
                        <span className="message-data-name"><i className="zmdi zmdi-circle online" /> Aiden</span> <span className="message-data-time">10:12 AM, Today</span>
                      </div>
                      <div className="message my-message">
                        <p>Are we meeting today? Project has been already finished and I have results to show you.</p>
                        <div className="row">
                          <div className="col-sm-6 col-lg-4 m-t-10"><NavLink to="/" ><img src="assets/images/image2.jpg" alt="" className="img-fluid img-thumbnail" /></NavLink> </div>
                          <div className="col-sm-6 col-lg-4 m-t-10"><NavLink to="/" > <img src="assets/images/image3.jpg" alt="" className="img-fluid img-thumbnail" /></NavLink> </div>
                          <div className="col-sm-6 col-lg-4 m-t-10"><NavLink to="/" > <img src="assets/images/image4.jpg" alt="" className="img-fluid img-thumbnail" /> </NavLink> </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="message-data">
                        <span className="message-data-name"><i className="zmdi zmdi-circle online" /> Aiden</span> <span className="message-data-time">10:12 AM, Today</span>
                      </div>
                      <div className="message my-message">
                        <div className="row">
                          <div className="col-sm-12 col-lg-12 "><NavLink to="/" > <img src="assets/images/image4.jpg" width={300} height={200} alt="" className="img-fluid img-thumbnail" /> </NavLink> </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="message-data"> <span className="message-data-name"><i className="zmdi zmdi-circle online" /> Aiden</span> <span className="message-data-time">10:31 AM, Today</span> </div>
                      <i className="zmdi zmdi-circle online" /> <i className="zmdi zmdi-circle online" style={{ color: '#AED2A6' }} /> <i className="zmdi zmdi-circle online" style={{ color: '#DAE9DA' }} />
                    </li>
                  </ul>
                </div>
                <div className="chat-message clearfix">
                  <div className="input-group p-t-15">
                    <input type="text" className="form-control" placeholder="Enter text here..." />
                    <span className="input-group-addon">
                      <i className="zmdi zmdi-mail-send" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}