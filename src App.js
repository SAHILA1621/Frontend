// src/App.js

import React, { useState } from 'react';
import profiles from './data/profiles';
import ProfileCard from './components/ProfileCard';
import SearchBar from './components/SearchBar';
import FilterDropdown from './components/FilterDropdown';
import ProfileDetails from './components/ProfileDetails';
import './App.css';

const App = () => {
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Function to handle search
  const handleSearch = (query) => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
    setSelectedProfile(null); // Reset selected profile when searching
  };

  // Function to handle location filter
  const handleLocationFilter = (location) => {
    setSelectedLocation(location);
    if (location === '') {
      setFilteredProfiles(profiles);
    } else {
      const filtered = profiles.filter((profile) => profile.location === location);
      setFilteredProfiles(filtered);
    }
    setSelectedProfile(null); // Reset selected profile when applying filter
  };

  // Function to handle profile card click
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <h1>Profile Mapper</h1>
      <SearchBar onSearch={handleSearch} />
      <FilterDropdown onChange={handleLocationFilter} />
      <div className="profiles-container">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
      {selectedProfile && <ProfileDetails profile={selectedProfile} />}
    </div>
  );
};

export default App;
