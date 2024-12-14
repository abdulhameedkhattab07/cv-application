import React from 'react';

const Education = ({ education, addEducation, removeEducation, handleChange }) => {
  return (
    <div>
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index}>
          <label>
            School:
            <input
              type="text"
              name="school"
              value={edu.school}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </label>
          <label>
            Degree:
            <input
              type="text"
              name="degree"
              value={edu.degree}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </label>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={edu.startDate}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={edu.endDate}
              onChange={(e) => handleChange(e, index, 'education')}
            />
          </label>
          <button type="button" onClick={() => removeEducation(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>
        Add Education
      </button>
    </div>
  );
};

export default Education;
