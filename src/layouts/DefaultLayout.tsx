import React from "react";
import { LeftSide } from "../components/layouts/LeftSide";
import { NavBarLayoutDefault } from "../components/layouts/navbar";
import { Helmet } from "react-helmet";
export const DefaultPaylout: React.FC = ({ children }) => {
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
        <link rel="stylesheet" href="assets/css/chatapp.css" />
      </Helmet>

    </div>
  )
}