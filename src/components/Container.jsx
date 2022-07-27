import React from 'react';
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import "./container.css";

const Container = () => {
  return (
    <div className="container">
    <Sidebar />
    
    <Videos />
    </div>
  )
}

export default Container