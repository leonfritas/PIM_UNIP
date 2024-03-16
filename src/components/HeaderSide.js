import { useState } from "react";
import "./dashboard/dash.css";
import Header from "./dashboard/Header";
import Sidebar from "./dashboard/Sidebar";


function HeaderSide() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />

    </div>
  );
}

export default HeaderSide;
