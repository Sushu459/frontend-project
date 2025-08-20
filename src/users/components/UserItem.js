import React from 'react';
import { Link } from 'react-router-dom';
import './UserItem.css';
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card'

const UserItem = props => {
  return (
    <li className="user-item">
      <div className="user-item__content">
        <card>
        <Link to={`/${props.id}`}>
          <div className="user-item__image">
            {/* You can use Avatar instead of img */}
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}
            </h3>
          </div>
        </Link>
        </card>
      </div>
    </li>
  );
};

export default UserItem;
