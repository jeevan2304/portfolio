import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jeevan2304/healvia.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Healvia – Full-stack centralized healthcare platform</h3>
              <p>Developed a responsive web interface and real-time mobile app for AI-powered personalized diet and exercise recommendations based on health records. Key features: doctor suggestions, cross-hospital medication tracking, appointment scheduling, emergency alerts, health dashboards (heart rate, sleep), and secure patient-doctor messaging. </p>
            </div>
            <footer> <ul className="tech-list"> 
              <li>Dart(Flutter)</li> <li>Python(DRF)</li> <li>postgreSql</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/jeevan2304/projectmanager.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>Project Manager Android Studio Kotlin MVVM Architecture</h3>
              <p>
              Project Manager app Android Studio Projects android project Material Design Android Studio Modern dashboard screen UI Design app Tutorial Adobe XD to Android Studio XML material UI Project Manager app kotlin.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Kotlin</li>
                <li>XML</li>
      
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/jeevan2304/blogplatform.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Blog Platform</h3>
              <p>Developed a Blog Platform using React and Spring Boot, enabling users to create, edit, and manage blog posts. Implemented JWT-based authentication and a REST API for secure content management. Designed a responsive UI with Tailwind CSS for an optimized user experience</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Java(Springboot)</li>
                <li>PostgreSql</li>
                <li>Javascript(React)</li>
                
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      


      </div>
    </Container>
  );
}