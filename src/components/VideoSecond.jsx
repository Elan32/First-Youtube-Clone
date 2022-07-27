import React from 'react';
import "./videoSecond.css";
import VideoCard from "./VideoCard";
import Data from "./data";



const VideoSecond = () => {

  
  return (
    <div className="videoSecond">
            <div className="frow">
              {
                Data.map((value) => {
                  return (
                    <div className="eachVideo">
                      <VideoCard
                     imgurl={value.imgurl}
                     interval={value.interval}
                     title=   {value.title}
                     name=    {value.name} 
                     views=   {value.views}
                     time=    {value.time}
                     />
                    </div>
                  
                  )
                })
              }         
             
            </div> 
     </div>
  )
}

export default VideoSecond