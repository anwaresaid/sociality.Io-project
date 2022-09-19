import {React, useState} from 'react'
import moment from 'moment';
import BlockIcon from '@mui/icons-material/Block';
import DeleteIcon from '@mui/icons-material/Delete';
import ListIcon from '@mui/icons-material/List';
import noImage from '../res/no-post-image.png';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import CheckIcon from '@mui/icons-material/Check';

function Card( post ) {
    const date = moment(post.post.published_at).format('DD MMMM YYYY HH:mm');
    const [error, setError] = useState(false);

    function changeToUrl(text) {
        var urlRegex = /(https?:\/\/[^\s]+)/g;
        
        return text.replace(urlRegex, function(url) {
            var hyperlink = url;
            if(!hyperlink.match('^https?:\/\/')){
                hyperlink = 'http://' + hyperlink;
            }
          return '<a className="blue" href="' + url + '" rel="noopener" noreferrer>' + url + '</a>'

        })        
      }
    const postStatus = () => {
        switch(post.post.status){
            case 0: 
                return 'social-media-approval';
            case 1: 
                return 'social-media-scheduled';
            case 2: 
                return 'social-media-publishing';
            case 3: 
                return 'social-media-published';
            case 4: 
                return 'social-media-error';
        }
    }
  return (
    <div className='card-container'>
        <div className={postStatus()}>
            {post.post.account.channel === 'facebook' 
                ?
                <FacebookIcon/>
                :
                post.post.account.channel === 'twitter'
                ?
                <TwitterIcon/>
                :
                <InstagramIcon/>    
            }
        </div>
        <div className='card-body-container'>
            <div className='card-title-bar'>
                <div className='card-date'>
                    {date}
                    <div className='card-edit-icons'>
                        <div className='icon'>
                        {post.post.status === 1 &&<BlockIcon/>}
                        </div>
                        <div className='icon'>
                        {post.post.status === 0 &&<CheckIcon/>}
                        </div>
                        <div className='icon'>
                        <DeleteIcon/>
                        </div>
                        <div className='icon'>
                        <ListIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-post-text'>
                <div dangerouslySetInnerHTML={{ __html: changeToUrl(post.post.entry.message) }} />
            </div>
            <div className='card-post-image'>
                <img onError={() => setError(true)} className='card-img'src={error ? noImage : post.post.entry.image}/>
            </div>
            <div className='card-post-interaction-icons'>
                { post.post.account.channel === 'twitter'?
                    <>
                        <div className='icon'>
                            <FavoriteBorderIcon/>
                            <p>124</p>
                        </div>
                        <div className='icon'>
                            <AutorenewIcon/>
                            <p>63</p>
                        </div>
                    </>
                    :
                    <>
                        <div className='icon'>
                            <ThumbUpOffAltIcon/>
                            <p>124</p>
                        </div>
                        <div className='icon'>
                            <ShareIcon/>
                            <p>4</p>
                        </div>
                    </>
                }
                <div className='icon'>
                    <ChatBubbleOutlineIcon/>
                    <p>4</p>
                </div>
                <div className='icon'>
                    <VisibilityIcon/>
                    <p>1426</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card