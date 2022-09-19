import { React, useState } from 'react';
import Posts from '../../data/data.json';
import noImage from '../../res/no-post-image.png';


function SideBarCompany() {
    const [company, setCompany] = useState(''); 
    const [error, setError] = useState(false);
    const select = (e) => {
        setCompany(e.target.id);
    }
    return (
        <div  className="sidebar-company">
            {/* there was not much information about company logo, or data so I made this assuming that logos are from account => image */}
            {Posts.posts_by_date["2021-07-01"].map((post) => {
                return ( 
                    <img 
                        onError={() => setError(true)} 
                        className={company===(post.account.image +post.created_at) ? "company-img-box-selected" : "company-img-box"} 
                        src={error? noImage :post.account.image} 
                        id={post.account.image + post.created_at} 
                        key={post.account.image + post.created_at} 
                        onClick={select}
                    />
                )
            })}
            {Posts.posts_by_date["2021-06-17"].map((post) => {
                return ( 
                    <img onError={() => setError(true)} 
                    className={company===(post.account.image +post.created_at) ? "company-img-box-selected" : "company-img-box"} 
                    src={error? noImage :post.account.image} 
                    id={post.account.image + post.created_at} 
                    key={post.account.image + post.created_at} 
                    onClick={select}
                />
                )
            })}
          
        </div>
    )
}

export default SideBarCompany