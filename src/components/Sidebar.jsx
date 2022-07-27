import React from 'react';

import "./sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import FlagOutlinedIcon from '@material-ui/icons/FlagOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';


const Sidebar = () => {

 
  
 
  return (
    <div className='sidebar'>
      <div className="sidebar__all">

      <div className="sidebar__a">
        <div className="sidebar__a__same mydefault">
          <HomeIcon className="myIcon" />
          <h3 className="myText">Home</h3>
        </div>
        <div className="sidebar__a__same">
          <ExploreOutlinedIcon className="myIcon" />
          <h3 className="myText">Explore</h3>
        </div>
        <div className="sidebar__a__same">
          <PlayArrowOutlinedIcon className="myIcon" />
          <h3 className="myText">Shorts</h3>
        </div>
        <div className="sidebar__a__same">
          <SubscriptionsOutlinedIcon className="myIcon" />
          <h3 className="myText">Subscriptions</h3>
        </div>
        </div>

       
      </div>
      
      <hr />

      <div className="sidebar__b">
      <div className="sidebar__a__same">
          <VideoLibraryOutlinedIcon className="myIcon" />
          <h3 className="myText">Library</h3>
        </div>

        <div className="sidebar__a__same">
          <HistoryOutlinedIcon className="myIcon" />
          <h3 className="myText">History</h3>
        </div>

        <div className="sidebar__a__same">
          <OndemandVideoOutlinedIcon className="myIcon" />
          <h3 className="myText">Your Videos</h3>
        </div>

        <div className="sidebar__a__same">
          <WatchLaterOutlinedIcon className="myIcon" />
          <h3 className="myText">Watch Later</h3>
        </div>
        <div className="sidebar__a__same">
          <ThumbUpOutlinedIcon className="myIcon" />
          <h3 className="myText">Liked Videos</h3>
        </div>
      </div>
      <hr />

      <div className="sidebar__c">
        <div className="sidebar__a__same">
          <SettingsOutlinedIcon className="myIcon" />
          <h3 className="myText">Settings</h3>
        </div>
        <div className="sidebar__a__same">
          <FlagOutlinedIcon className="myIcon" />
          <h3 className="myText">Report History</h3>
        </div>
        <div className="sidebar__a__same">
          <HelpOutlineOutlinedIcon className="myIcon" />
          <h3 className="myText">Help</h3>
        </div>

        <div className="sidebar__a__same">
          <FeedbackOutlinedIcon className="myIcon" />
          <h3 className="myText">Send Feedback</h3>
        </div>
      </div>
      <hr />

      <div className="sidebar__last">
          <div className="sidebar__last__a">
            <p>
              <pre>About  Press   Copyright</pre>
            </p>
            <p>
              <pre>Contact us
              Creator
              Advertise </pre>
            </p>
            <p>
            <pre>Developers</pre>
            </p>
            
          </div>

          <div className="sidebar__last__b">
            <p>
             <pre>Terms Privacy Policy & Safety</pre>
            </p>
            <p>
             <pre>How YoutTube works</pre>
            </p>
            <p>
              <pre>Test new features</pre>
            
            </p>
          </div>
          <div className="sidebar__last__c">
            <p>@ 2022 Google LLC</p>
          </div>
      </div>
    </div>
  )
}

export default Sidebar