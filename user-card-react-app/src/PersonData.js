import React from 'react';
import PersonCard from './PersonCard';

function PersonData(props) {
    
  return (
    <div>
      <PersonCard personData={props.dataProps}/>
    </div>
  )
}


export default PersonData;