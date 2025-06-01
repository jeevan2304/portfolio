import { Container } from "./styles";
import Uttam from "../../assets/VinayakSingh.png";
import wordpress from "../../assets/wordpress.svg";
import shopify from "../../assets/shopify.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import java from "../../assets/Java.png";
import mysqlIcon from "../../assets/mysql-icon.svg";
import Jeevan from "../../assets/Jeevan.png";
import dart from "../../assets/dart.png";
import flutter from "../../assets/flutter.png";
import kotlin from "../../assets/kotlin.png";
import firebase from "../../assets/firebase.png";
import postgracesql from "../../assets/postgracesql.png";
import jupyter from "../../assets/jupyter.png";
import python from "../../assets/python.png";
import androidstudio from "../../assets/androidstudio.png";
import intelliJ from "../../assets/intellij.png";
import vscode from "../../assets/vscode.png";
import postman from "../../assets/postman.png";
import spring from "../../assets/spring.png";


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About Me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hello! I'm Jeevan, a passionate and detail-oriented software developer focused on building impactful web and mobile applications.
            With a background in Computer Science and hands-on experience in full-stack development, I strive to deliver scalable and user-friendly solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I have experience working on Android development, backend systems, and REST APIs, and I enjoy exploring new technologies.
            Whether it's working with databases, UI components, or debugging BLE connectivity, I’m always ready to dive deep and learn.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p>
            I'm actively looking for opportunities to collaborate and contribute to meaningful tech projects.
            Let’s connect and build something great together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={100}>
              <img src={java} alt="java" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={120}>
              <img src={dart} alt="dart" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={130}>
              <img src={flutter} alt="flutter" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={140}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={150}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={160}>
              <img src={postgracesql} alt="postgracesql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={170}>
              <img src={androidstudio} alt="androidstudio" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={180}>
              <img src={vscode} alt="vscode" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={jupyter} alt="jupyter" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={reactIcon} alt="react" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={firebase} alt="firebase" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={190}>
              <img src={kotlin} alt="kotlin" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={200}>
          <img src={Jeevan} alt="Jeevan's Profile" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
