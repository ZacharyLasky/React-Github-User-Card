import React from 'react';
import './FollowerCard.scss';

function FollowerCard(props) {

  return (
    <div className="followerCardContainer">
      {props.followerData.map(followers => {
        return (
          <div className="followerDiv">
            <img src={followers.avatar_url}></img>
            <h5>{followers.login}</h5>
            <h6>{followers.html_url}</h6>
          </div>
        )
      })}
    </div>
  )
}

export default FollowerCard;