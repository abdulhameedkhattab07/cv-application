import React from 'react';

const PersonalInfo = ({ personalInfo, handleChange }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={personalInfo.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Bio:
        <textarea
          type="text"
          name="bio"
          value={personalInfo.bio}
          onChange={handleChange}
        ></textarea>
      </label>
    </div>
  );
};

export default PersonalInfo;
