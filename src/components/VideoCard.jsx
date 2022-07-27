import React from 'react';
import "./videoCard.css";
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';

const VideoCard = ({imgurl, interval,title, name, views, time }) => {
  return (
    <div className="videoCard">
        <div className="videoCard__image">
            <img src={imgurl} alt="imageshow"/>
            <span>{interval}</span>
        </div>
        <div className="videoCard__text">
              <div className="text1">
                  <Avatar src={imgurl}/>
                
              </div>
              <div className="text2">
                  <h2>{title}</h2>
                  <p>{name} <CheckCircleOutlineRoundedIcon className="verify" /></p>
                  <p className="lastpara">{views} views  &bull; {time}</p>
              </div>
        </div>
    </div>
  )
}

export default VideoCard