import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../../App.css';
import { useState } from "react";


function SideBar({item}) {
  const [showContent, setShowContent] = useState(false);
  if(item.children){
    return (
        <div className={showContent ? "sidebar-item open" : "sidebar-item"}>
            <div className={window.location.pathname == item.link ? "sidebar-title active" : "sidebar-title"}>
                <div id="icon">
                    { item.icon }
                </div>
                <div id="title">
                    {item.title}
                </div>  
                <div className="toggleBtn" onClick={(e) => {
                    setShowContent(!showContent)
                    }}>
                    {showContent ? <RemoveIcon/> : <AddIcon/>}
                  </div>        
            </div>
            <div className="sidebar-content">
                { item.children.map((child, index) => <SideBar key={index} item={child} />) }
            </div>
        </div>
    )
}else{
    return (
        <div  className={window.location.pathname == item.link ? "sidebar-item plain active": "sidebar-item plain"} onClick={(e)=> {
          if(!item.children){
            window.location.pathname = item.link;
          }
        }}>
            <div className="sidebar-title">
                <div id="icon">
                    { item.icon }
                </div>
                <div id="title">
                    {item.title}
                </div>
                {item.title === 'NOTIFICATIONS'&&
                <div className="notficiations">
                    <p>29</p>
                </div>
                }  
            </div>
        </div>
    )
}
}
export default SideBar;
