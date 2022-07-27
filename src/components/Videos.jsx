import React from 'react';
import "./videos.css";
import  VideoFirst from "./VideoFirst.jsx";
import VideoSecond from "./VideoSecond.jsx";

const Videos = () => {
  return (
    <div className="videos">
        <hr />
       <VideoFirst />
       <hr />
       <VideoSecond />
    </div>
  )
}

export default Videos