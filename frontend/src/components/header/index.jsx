import React from 'react';
import { useSelector } from 'react-redux';

import './index.css';

function Header(props) {
  const { setIsEdit } = props;
  const currentUser = useSelector(state => state.user.user.currentUser);
  return (
    <>
      <header style={{
        backgroundColor: '#FF9051',
        backgroundImage: `linear-gradient(180deg, #FF9051 2%, #FF9051, 65%, #181818 100%)`,
      }}>
        <div className="info-container">
          <div className="info-edit" onClick={() => setIsEdit(true)}>
            Edit
          </div>
          <img src={currentUser?.profilePicture} alt="profile" className="info-ava" />
          <div className="info-username">{currentUser?.displayName}</div>
          <div className="info-age">{currentUser?.age} years old</div>
          <div className="info-about">{currentUser?.about}</div>
        </div>
      </header>
    </>
  )
}

export default Header;