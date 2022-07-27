import React, {useState} from 'react';
import "./navbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../Images/youtubelogo.png';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Avatar from '@material-ui/core/Avatar';
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp';
import man from "../Images/man.jpg";


const Navbar = () => {

const [show, setShow] = useState(false);
const [menuclick, setMenuClick] = useState(true);


const clicked = () => {
  setShow(true);
}


 const myfun =()=> {
  setMenuClick(!menuclick)
}

  return (
    <>
    <div className="nav">
      <div className="leftarrow">
    <KeyboardBackspaceSharpIcon className="myleftar" />
      </div>
        <div className="nav__a">
            <MenuIcon className="nav__a__icon" onClick={myfun}/>
          
            <img src={Logo} alt="mylogo" className="nav__a__img" />
        </div>
        <div className="nav__b">
                      
           {show ? <SearchIcon className="first" /> : null}            
            <input onClick={clicked} 
            className="nav__b__input" type="text" placeholder="Search Here" />
          
           
            
            <SearchIcon className="nav__b__search" />
            <MicIcon className="nav__b__mic"/>
        </div>
        <div className="nav__c">
            <VideoCallIcon className="nav__c__video"/>
            <NotificationsNoneIcon className="nav__c__notification" />
            <Avatar 
            src = {man}
            className="nav__c__avatar"
        
            />


        </div>
      
    </div>
 
    </>
  )

}

export default Navbar
