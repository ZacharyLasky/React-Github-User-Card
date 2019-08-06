import React from 'react';
import FollowerCard from './FollowerCard';

function FollowerData(props) {
    
  return (
    <div>
      <FollowerCard followerData={props.followerProps}/>
    </div>
  )
}


export default FollowerData;