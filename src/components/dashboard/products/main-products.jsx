import { useState } from "react";
import React from 'react'

import Header from '../Header'
import Products from './products'
import Sidebar from "../Sidebar";
import '../dash.css'

function AppProducts() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar} />
      <Products/>
    </div>
  )
}

export default AppProducts
