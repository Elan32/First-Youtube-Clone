import React from "react";
import "./videofirst.css";
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';


const buttonData = [
  "Anuj",
  "Arbin",
  "Bishal",
  "Chajan",
  "Elan",
  "Milan",
  "Nagace",
  "Shakti",
  "Surya",
  "Test Only",
  "Test",
  "Test Only",
  "Test"
];

const VideoFirst = () => {
  return (
    <>
   
   <div className="videoFirst">
    
      <div className="myleft">
        <KeyboardArrowLeftRoundedIcon className="lefticon" />
      </div>

      <div className="allbuttons">
      <div className="videoFirst__easy">
            <button className="default">All</button>
      

        {buttonData.map((val) => {
          return (
            <>
              <div className="videoFirst__easy">
                <button>{val}</button>
              </div>

            </>
          );
        })}
      </div>
      </div>

     <div className="myright">
     <KeyboardArrowRightRoundedIcon />
     </div> 


     
   </div>
       
 

    </>
  );
};

export default VideoFirst;
