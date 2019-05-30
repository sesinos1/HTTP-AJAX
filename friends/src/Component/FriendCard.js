import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = (props) => {



  return(
    <div className="row">
    {props.homiePassIn.map(friend => (
    <div key={friend.id} className="col-4 mb-3">
      <div>
        <div>
          <div>Name: {friend.name}</div>
          <div>Age: {friend.age}</div>
          <div>Email: {friend.email}</div>
          <div>bestfriend: {friend.bestfriend}</div>
          <Link to="/edit">
            <button onClick={() => props.handleAllUpdates(friend)} className="m-2">Update</button>
          </Link>
          <button onClick={() => props.handleScrap(friend.id)} className="m-2">Delete</button>

        </div>
      </div>
    </div>
    ))}   

    </div>
  )
}

export default FriendCard;
