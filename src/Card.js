import React from 'react';

const Card = ({name, email, id}) => {

  return (
    <div className="card">
       <img alt="robot-profile" src={`https://robohash.org/${id}?200x200`} />
       <h1 className="card-heading">{name}</h1>
       <p className="card-paragraph">{email}</p>
    </div>
  )
}

export default Card;
