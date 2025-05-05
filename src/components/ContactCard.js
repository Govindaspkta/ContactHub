import React from 'react';
import user from '../images/user.png';
const Contactcard = (props) => {
    const {id, name,email} = props.contact;
    <div className="item">
        <img className='ui avatar image' src={user} alt='user' />
    <div className='content'>
        <div className='header'> {name} </div>
        <div>{email}</div>
    </div>
    <i className="trash alternate outline icon"></i>
    style={{color:"red",marginTop:'10px'}}
    </div>

}
export default Contactcard;