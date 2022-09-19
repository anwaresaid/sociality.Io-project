import React from 'react'
import Posts from '../data/data.json';
import Card from './Card';
import ProfileImage from '../res/profileImage.webp';
import moment from 'moment';


function Feed() {
  const date1 = moment('2021-06-17').format('DD MMMM YYYY');
  const date2 = moment('2021-07-01').format('DD MMMM YYYY');

  return (
    <div className="feed-container">
      <div className="feed-header">
          <div className="feed-status-color">
            <div className="status">
              <div className="publish-color" style={{backgroundColor: '#acacac' }}/>
              <p>Published</p>
            </div>
            <div className="status">
              <div className="publish-color" style={{backgroundColor: '#3ac183' }}/>
              <p>Scheduled</p>
            </div>
            <div className="status">
              <div className="publish-color" style={{backgroundColor: '#f7bf38' }}/>
              <p>Need Approval</p>
            </div>
            <div className="status">
              <div className="publish-color" style={{backgroundColor: '#fb6450' }}/>
              <p>Error</p>
            </div>
            <div className="status">
              <div className="publish-color" style={{backgroundColor: '#9eccf4' }}/>
              <p>Notes</p>
            </div>
          </div>
          <div className="feed-avatar">
              <img className="avatar" src={ProfileImage}/>
          </div>
      </div>
      <div className="poster-date">
        {date2}
      </div>
      <div className="cards-container">
        {Posts.posts_by_date["2021-07-01"].map((post)=>  <Card key={post.created_at + post.account.username} post={post}/>)}
      </div>
      <div className="poster-date">
        {date1}
      </div>
      <div className="cards-container">
        {Posts.posts_by_date["2021-06-17"].map((post)=>  <Card key={post.created_at + post.account.username} post={post}/>)}
      </div>
    </div>
  )
}

export default Feed