import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <div className="title-container">
        <h2 className="main-heading">
          <span className="upcoming">UPCOMING</span> <br />
          <span className="projects">PROJECTS.</span>
        </h2>
        <div className="paragraph-container">
          <p className="title-paragraph1">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br/> Just click “Edit Text” or double click me to add your own content and<br/> make changes to the font. Feel free to drag and drop me anywhere you like on your page.
          </p>
          <p className="title-paragraph2">
          This is a great space to write long text about your company and your<br/> services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.
          </p>
        </div>
      </div>

      <div className="projects-list">
        <div className="project-item">
          <h3 className="project-title">Entrepreneur<br/>Development <br/>Programme</h3>
          <div className="region-container">
            <small className="description-heading">Southeast<b/> Asia</small>
          </div>
          <p className="project-description">
            This program aims to foster entrepreneurial skills and encourage innovation among participants. Join us to unlock new opportunities.
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">ICDS <br/>Programme</h3>
         
          <div className="region-container">
            <small className="special-heading">Central America</small>
          </div>
          <p className="project-description">
            The ICDS Programme focuses on holistic child development and nutritional support. Learn more about our community-driven initiatives.
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">Sanitation <br/> Programme</h3>
          <div className="region-container">
            <small className="description-heading">North America</small>
          </div>
          <p className="project-description">
            Promoting sanitation and hygiene in local communities, this program addresses health and cleanliness through sustainable solutions.
          </p>
        </div>
        
        <div className="project-item">
          <h3 className="project-title">Pudhuvazvu Thittam / TNSRLM</h3>
          <div className="region-container">
            <small className="description-heading">Southeast Asia</small>
          </div>
          <p className="project-description">
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">
            <span className="split-title">Tailoring</span> <br />
            <span className="split-title">Training</span>
          </h3>
          <div className="region-container">
            <small className="description-heading">Central America</small>
          </div>
          <p className="project-description">
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>

        <div className="project-item">
          <h3 className="project-title">Disabled<br/> women and girls</h3>
          <div className="region-container">
            <small className="description-heading">North America</small>
          </div>
          <p className="project-description">
            I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.
          </p>
        </div>
        
      </div>
      </section>
  );
};

export default ProjectsSection;


