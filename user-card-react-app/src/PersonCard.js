import React from 'react';

function PersonCard(props) {

  return (
    <div>
      <h1>{props.personData.login}</h1>
      <h5>{props.personData.bio}</h5>
      <h5> Followers {props.personData.followers}</h5>
      <h5>Following {props.personData.following}</h5>
    </div>
  )
}

export default PersonCard;