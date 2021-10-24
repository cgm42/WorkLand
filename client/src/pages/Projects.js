import react from 'react';
import '../components/styles/projects.css';

const Projects = () => {
  return (
    <div className='dashboard-layout'>
      <div className='welcome'>
        <h1>Projects</h1>
      </div>

      <section className='info-cards rpgui-content'>
        <div className='project-card rpgui-container framed float'>
          <img></img>
          <div className='description'>
            <header>Project name</header>
            <p>Progress is progress/10</p>
            <p>The team:</p>
            <p>. . . . .</p>
          </div>
        </div>
        <div className='project-card float'>
          <header>Project name</header>
          <ul>
            <li>Google: 9AM</li>
            <li>Facebook: 11AM</li>
            <li>Youtube: 4PM</li>
          </ul>
        </div>
        <div className='project-card float'>
          <header>Project name</header>
          <ul>
            <li>Google: 9AM</li>
            <li>Facebook: 11AM</li>
            <li>Youtube: 4PM</li>
          </ul>
        </div>
        <div className='project-card float'>
          <header>Project name</header>
          <ul>
            <li>Google: 9AM</li>
            <li>Facebook: 11AM</li>
            <li>Youtube: 4PM</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Projects;
