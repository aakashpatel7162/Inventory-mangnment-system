import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';  
import styles from './layout.module.css';
import { paths } from '../allRoutes/paths';
import { FaBell } from 'react-icons/fa';
import HomeIcon from '@mui/icons-material/Home';
import IMAGES from '../assets/Image';
const Header = () => {
  const [selectedShop, setSelectedShop] = useState("Shop 1"); 

  const shops = ["Nanny's shop 1", "Nanny's shop 2", "Nanny's Shop 3"];
  const location = useLocation(); 

  const breadcrumbItems = [
    { name: "Home", path: "/", icon:  <HomeIcon/>}, 
    { name: "Inventory", path: "/inventory", icon:  <HomeIcon/> }, 
  ];

  if (location.pathname.includes(paths.new_inventory)) {
    breadcrumbItems.push({ name: "New Inventory", path: "/inventory/shop", icon: "" });
  } else if (location.pathname.includes(paths.view_inventory)) {
    breadcrumbItems.push({ name: "View Inventory", path: "/inventory/products", icon: "" });
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.leftSection}>
          <h6>Inventory</h6>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.shopSelector}>
            <select
              value={selectedShop}
              onChange={(e) => setSelectedShop(e.target.value)}
              className={styles.shopDropdown}
            >
              {shops.map((shop, index) => (
                <option key={index} value={shop}>
                  {shop}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.notificationIcon}>
          <FaBell className="bell-icon"  style={{ fontSize: '18px', color: '#5570F1', cursor: 'pointer' }}/>

          </div>
          
          <div className={styles.profileIcon}>
            <img
              src={IMAGES.profile}
              alt="Profile"
              className={styles.profilePhoto}
            />
          </div>
        </div>
      </header>

      <div className={styles.breadcrumbs}>
      <HomeIcon style={{size:"10px", color:"#0056b3"}}/>{breadcrumbItems.map((item, index) => (
          <span key={index} className={`${styles.breadcrumbItem} ${location.pathname === item.path ? styles.active : ''}`}>
            <Link to={item.path} className={styles.breadcrumbLink}>
              {item.icon && <i className={item.icon}></i>} 
              {item.name}
            </Link>
            {index < breadcrumbItems.length - 1 &&  " / "}
          </span>
        ))}
      </div>
    </>
  );
};

export default Header;
