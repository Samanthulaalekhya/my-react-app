import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ url }) => {
  return <img className="profile-picture" src={url} alt="Profile" />;
};

export default ProfilePicture;