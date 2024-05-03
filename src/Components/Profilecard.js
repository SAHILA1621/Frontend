// src/components/ProfileCard.js

import React from 'react';

const ProfileCard = ({ profile, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <img src={profile.photo} alt={profile.name} />
      <h2>{profile.name}</h2>
    </div>
  );
};

export default ProfileCard;
