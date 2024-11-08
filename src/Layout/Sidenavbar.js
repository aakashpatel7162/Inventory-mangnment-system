import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import styles from './layout.module.css';
import IMAGES from '../assets/Image';
import HeadsetIcon from '@mui/icons-material/Headset';  
import FolderIcon from '@mui/icons-material/Folder';  
import ChatIcon from '@mui/icons-material/Chat';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from 'react-router-dom';
import { paths } from '../allRoutes/paths';
const Sidenavbar = () => {

const navigate=useNavigate()
  const backtoHome=()=>{
    navigate(paths.home)
  }
  return (
    <div className={styles.sidenav}>
      <div className={styles.logo} onClick={backtoHome}>
        <img src={IMAGES.weblogo} alt="weblogo"/>
      </div>

      <div className={styles.navSections}>
        <div className={styles.navItem} style={{color: "white",backgroundColor: "#5570F1"}}><HomeIcon /></div>
        <div className={styles.navItem} style={{marginTop:"5px"}}><ShoppingBagIcon /></div>

        <div className={styles.navItem}><GroupIcon  /></div>

        <div className={styles.navItem}><FolderIcon /></div>
        <div className={styles.navItem}> <ChatIcon/></div>

        
        <div className={styles.navItem}><SettingsIcon /></div>
      </div>

      <div className={styles.bottomOptions}>
      <div className={styles.navItem} style={{  backgroundColor:"#5E63661A"}}><HeadsetIcon /></div>
      <div className={styles.navItem} style={{ backgroundColor:"#FFCC9133"  }}><CardGiftcardIcon /></div>
       

        <div className={styles.navItem} style={{color:"#CC5F5F"}}><ExitToAppIcon /></div>
      </div>
    </div>
  );
};

export default Sidenavbar;
