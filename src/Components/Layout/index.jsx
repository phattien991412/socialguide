import React, { useEffect, useState } from "react";
import "./index.scss";
import SideBar from "../SideBar";
import Main from "../Main";
import Aside from "../Aside";
import { socialArr } from "../../services/api";
import Loading from "../Loading";

const Layout = () => {
  const [selectSocial, setSeclectSocial] = useState("facebook");
  const [social, setSocial] = useState(socialArr[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2600);
  }, [])

  useEffect(() => {
    if (selectSocial === "facebook") {
      setSocial(socialArr[0]);
    } else if (selectSocial === "instagram") {
      setSocial(socialArr[1]);
    } else if (selectSocial === "linkedin") {
      setSocial(socialArr[2]);
    } else if (selectSocial === "twitter") {
      setSocial(socialArr[3]);
    }
  }, [selectSocial])

  const handleSelectSocial = (social) => {
    // setLoading(true)
    setSeclectSocial(social)
    if (social === "facebook") {
      setSocial(socialArr[0]);
    } else if (social === "instagram") {
      setSocial(socialArr[1]);
    } else if (social === "linkedin") {
      setSocial(socialArr[2]);
    } else if (social === "twitter") {
      setSocial(socialArr[3]);
    } else if (social === "youtube") {
      setSocial(socialArr[4]);
    }
    // setTimeout(() => {
    //   setLoading(false)
    // }, 1000);
  };

  return (
    <div className="layout">
      <Loading/>

      <div className="layout_sidebar">
        <SideBar handleSelectSocial={handleSelectSocial} selectSocial={selectSocial}  />
      </div>
      <div className="layout_main">
        <Main selectSocial={selectSocial} setSeclectSocial={setSeclectSocial} social={social} />
      </div>
      <div className="layout_aside">
        <Aside selectSocial={selectSocial} social={social} />
      </div>
    </div>
  );
};

export default Layout;
