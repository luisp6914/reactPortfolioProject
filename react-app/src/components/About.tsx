import Skills from "./Skills";
//PascalCasing for components
function About() {
  return (
    <div className="about-me rounded">

      <div className="profileAndParagraph">
          <div className="profile">
            <img src="../src/images/me.jpg" className="bd-placeholder-img img-thumbnail rounded" alt="Image of me" width={150} height={150} style={{border: 'none'}}></img>
          
            <div>
                <p><b>Name:</b> Luis Perez</p>
                <p><b>Role:</b> Software Engineer</p>
                <p><b>Major:</b> Computer Science</p>
            </div>
          </div>
          <div className="paragraph">
            <h3>About Me</h3>
            <div>
                <p>
                  I am a progress-focused person who enjoys learning about the tech
                  industry. Throughout my educational career, I have developed my
                  abilities and am ready to take the necessary steps to enter this
                  industry.
                </p>
                <p>
                  Moreover, while working at Santa Barbara Public Defenders, I gained
                  experience in team collaboration and utilizing various technologies to
                  develop an application. This involved integrating the Azure
                  VideoIndexer API and Box.com API using AWS lambda function. The entire
                  project was managed through a code version control system such as
                  GitHub.
                </p>
                <p>
                  Furthermore, I also took on personal projects where I honed my skills
                  in HTML, CSS, and JDBC to create an online system for streamlining
                  COVID vaccination operations at a hypothetical local hospital.
                </p>
            </div>
          </div>
      </div>
      
      <Skills></Skills>
    </div>
  );
}

export default About;
