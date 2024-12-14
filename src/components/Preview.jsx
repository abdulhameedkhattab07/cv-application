import React from 'react';

const Preview = ({ personalInfo, experience, education }) => {
  return (
    <div className="cv-preview">
      <h1>{personalInfo.name}</h1>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>
      <p>Bio: {personalInfo.bio}</p>

      <h2>Experience</h2>

      <div>
        <table>
          <thead>
            <th>Job Title</th>
            <th>Company</th>
            <th>Tasks</th>
            <th>Start Date</th>
            <th>End Date</th>
          </thead>
          <tbody>
            {experience.map((exp, index) => (
              <tr key={index}>
                <td>{exp.jobTitle}</td>
                <td>{exp.company}</td>
                <td>{exp.tasks}</td>
                <td>{exp.startDate}</td>
                <td>{exp.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Education</h2>
      <div>
        <table>
          <thead>
            <th>Degree</th>
            <th>School</th>
            <th>Start Date</th>
            <th>End Date</th>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr  key={index}>
                <td>{edu.degree}</td>
                <td>{edu.school}</td>
                <td>{edu.startDate}</td>
                <td>{edu.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Preview;
