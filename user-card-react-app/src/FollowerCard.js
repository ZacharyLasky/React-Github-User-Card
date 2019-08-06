import React from 'react';

function FollowerCard(props) {

  return (
    <div>
      {props.followerData.map(followers => {
        return (
          <div className="followerDiv">
            <img src={followers.avatar_url}></img>
            <h5>{followers.login}</h5>
            <h5>{followers.login}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default FollowerCard;