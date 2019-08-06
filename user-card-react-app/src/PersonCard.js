import React from 'react';
import './PersonCard.scss'

function PersonCard(props) {

  return (
    <div className="PersonCardContainer">
      <img src={props.personData.avatar_url}></img>
      <h1>{props.personData.name}</h1>
      <h5>{props.personData.bio}</h5>
      <h5>Following: {props.personData.following}</h5>
      <h5> Followers: {props.personData.followers} (listed below)</h5>
    </div>
  )
}

export default PersonCard;