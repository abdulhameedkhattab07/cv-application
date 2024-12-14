import React, { useState } from 'react';
import PersonalInfo from './Personalinfo.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Preview from './Preview.jsx';

const CVForm = () => {
  const [personalInfo, setPersonalInfo] = useState({ name: '', email: '', phone: '', bio: '' });
  const [experience, setExperience] = useState([{ jobTitle: '', company: '', tasks: '', startDate: '', endDate: '' }]);
  const [education, setEducation] = useState([{ school: '', degree: '', startDate: '', endDate: '' }]);

  const handleChange = (e, index, section) => {
    const { name, value } = e.target;
    if (section === 'personalInfo') {
      setPersonalInfo({ ...personalInfo, [name]: value });
    } else if (section === 'experience') {
      const updatedExperience = [...experience];
      updatedExperience[index][name] = value;
      setExperience(updatedExperience);
    } else if (section === 'education') {
      const updatedEducation = [...education];
      updatedEducation[index][name] = value;
      setEducation(updatedEducation);
    }
  };

  const addExperience = () => setExperience([...experience, { jobTitle: '', company: '', tasks: '', startDate: '', endDate: '' }]);
  const removeExperience = (index) => setExperience(experience.filter((_, i) => i !== index));

  const addEducation = () => setEducation([...education, { school: '', degree: '', startDate: '', endDate: '' }]);
  const removeEducation = (index) => setEducation(education.filter((_, i) => i !== index));

  return (
    <div className="cv-container">
      <div className="form-section">
        <PersonalInfo personalInfo={personalInfo} handleChange={(e) => handleChange(e, null, 'personalInfo')} />
        <Experience
          experience={experience}
          addExperience={addExperience}
          removeExperience={removeExperience}
          handleChange={handleChange}
        />
        <Education
          education={education}
          addEducation={addEducation}
          removeEducation={removeEducation}
          handleChange={handleChange}
        />
      </div>
      <div className="preview-section">
        <Preview personalInfo={personalInfo} experience={experience} education={education} />
      </div>
    </div>
  );
};

export default CVForm;
