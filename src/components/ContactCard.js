import React from 'react';
import { Link } from 'react-router-dom';
import user from '../images/user.png';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  console.log("ContactCard rendering contact:", props.contact);

  return (
    <div className="item">
      <img
        className="ui avatar image"
        src={user}
        alt="user"
        onError={(e) => (e.target.src = 'https://via.placeholder.com/50')}
      />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Link to={`/edit/${id}`}>
          <i
            className="edit alternate outline icon"
            style={{ color: "blue", marginRight: '10px', cursor: 'pointer' }}
          ></i>
        </Link>
        <i
          className="trash alternate outline icon"
          style={{ color: "red", cursor: 'pointer' }}
          onClick={() => props.clickHandler(id)}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;