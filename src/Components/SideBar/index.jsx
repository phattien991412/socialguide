import React from "react";
import "./index.scss";

import { socialArr } from "../../services/api";

const SideBar = ( { handleSelectSocial, selectSocial } ) => {

  return (
    <div data-paint={selectSocial} className="sidebar">
      <div className="sidebar_logo"><i>47</i></div>
      <ul className="sidebar_icon">
        {socialArr.map((item) => (
          <li data-paint={selectSocial} key={item.social} onClick={(e) => handleSelectSocial(item.social)} >
            <span>{item.icon}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
