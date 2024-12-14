import React from 'react';

const Experience = ({ experience, addExperience, removeExperience, handleChange }) => {
  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <label>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              value={exp.jobTitle}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </label>
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </label>
          <label>
            Tasks:
            <textarea
              name="tasks"
              value={exp.tasks}
              onChange={(e) => handleChange(e, index, 'experience')}
            ></textarea>
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={exp.endDate}
              onChange={(e) => handleChange(e, index, 'experience')}
            />
          </label>
          <button type="button" onClick={() => removeExperience(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  );
};

export default Experience;
