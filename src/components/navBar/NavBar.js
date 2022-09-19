import React from 'react';
import SideBar from './SideBar';
import {SideBarElements} from '../../data/SideBarElements';
import SideTitle from './SideTitle';
import SideBarCompany from './SideBarCompany';
import '../../App.css';


function NavBar() {
  return (
      <div className='side-bar'>
        <SideTitle/>
        <div className='sideBar-merge'>
          <SideBarCompany/>
          <ul className='sideBarList'>
            {SideBarElements.map((item,key) =>  <SideBar key={key} item={item}/>)}
          </ul>
        </div>
    </div>
  )
}

export default NavBar