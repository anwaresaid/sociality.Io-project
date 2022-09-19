import { React, useState } from 'react';
import Huawei from '../res/huawei.png'

function SideBarCompany() {
    const [company, setCompany] = useState(''); 
    const select = (e) => {
        setCompany(e.target.id);
    }
    return (
        <div  className="sidebar-company">
            <img className={company==='0' ? "company-img-box-selected" : "company-img-box"} src={Huawei} id='0' onClick={select}/>
            <img className={company==='1' ? "company-img-box-selected" : "company-img-box"} src={Huawei} id='1' onClick={select}/>
            <img className={company==='2' ? "company-img-box-selected" : "company-img-box"} src={Huawei} id='2' onClick={select}/>
            <img className={company==='3' ? "company-img-box-selected" : "company-img-box"} src={Huawei} id='3' onClick={select}/>
        </div>
    )
}

export default SideBarCompany