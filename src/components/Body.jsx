import Button from "@material-ui/core/Button";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="body">
      {/* <div className="summary">
        <h4>Summary</h4>
        <div id="hr"></div>
        <p>
          I am a self-motivated Electronics & Computer engineering student ,
          tech enthusiast ,sports-freak. Knowledge in Web Development.Always
          believe teamwork is the key to success.
        </p>
      </div> */}
      <div className="details">
        <div className="left">
          <div className="education">
            <h4>Educational History</h4>
            <div id="hr"></div>
            <p>
              <div>Electronics and Computer Science</div>
              <ul>
                <li>KIIT DEEMED UNIVERSITY</li>
                <li>
                  CGPA - <b>9.04</b>
                </li>
              </ul>
            </p>
            <p>
              <div>Secondary & Intermediate</div>
              <ul>
                <li>Berhampore J.N.Academy</li>
                <li>
                  <b>93%</b> in Secondary & <b>92.4%</b> in Intermediate
                </li>
              </ul>
            </p>
          </div>
          <div className="experience">
            <h4>Work Experience</h4>
            <div id="hr"></div>
            <p>
              <div>Software Engineer Intern</div>
              <span>HighRadius | Apr 2021 - Present</span>
              <ul>
                <li>
                  Developing autonomous web agents and email agents to{" "}
                  <b>automate</b> navigation process and data extraction from
                  web pages and emails
                </li>
                <li>
                  Tech Stack used : <b>Java,Selenium,MySql</b>
                </li>
              </ul>
            </p>
            <p>
              <div>Full Stack developer Intern</div>
              <span>TechBairn | Mar 2021 - Jun 2021</span>
              <ul>
                <li>
                  Worked as a Full stack developer ,created{" "}
                  <b>payment gateway</b> with Instamojo, designed responsive
                  UI,processed all the student information.
                </li>
                <li>
                  Tech Stack used :{" "}
                  <b>Html, Css, JavaScript, Bootstrap, MongoDB</b>
                </li>
              </ul>
            </p>
            <p>
              <div>Winter Trainee</div>
              <span>HighRadius | Feb 2021 - April 2021</span>
              <ul>
                <li>
                  Joined as a tech-track trainee.Worked on a B2B invoice{" "}
                  <b>full stack application</b>.
                </li>
                <li>
                  Tech Stack used : <b>Java, React js, MySql, Material-UI</b>
                </li>
              </ul>
            </p>
            <p>
              <div>Full Stack developer Intern</div>
              <span>Avifa Infotech | Oct 2020 - Feb 2021</span>
              <ul>
                <li>
                  Worked on project GoDial a customized <b>CRM</b> for web and
                  android users.
                </li>
                <li>
                  Tech Stack used : <b>Html, Css, JavaScript, framework-7</b>
                </li>
              </ul>
            </p>
            {/* <p>
              <div>Web Development Trainee</div>
              <span>Techbairn | Dec 2020 - Jan 2020</span>
              <ul>
                <li>Training on Full Stack development with MERN stack.</li>
              </ul>
            </p> */}
          </div>
          <div className="skills">
            <h4>Skills</h4>
            <div id="hr"></div>
            <p>
              <Button size="small">Java</Button>
              <Button size="small">C++</Button>
              {/* <Button size="small">C</Button> */}
              <Button size="small">Data Structures & Algorithms</Button>
              <Button size="small">OOPS</Button>
              <Button size="small">React js</Button>
              <Button size="small">Redux</Button>
              <Button size="small">Html5 & Css3</Button>
              <Button size="small">Javascript</Button>
              <Button size="small">Node js</Button>
              <Button size="small">MongoDB</Button>
              <Button size="small">MySql</Button>
            </p>
          </div>
          {/* <div className="languages">
            <h4>Languages</h4>
            <div id="hr"></div>
            <div className="division">
              <div className="division__left">
                <div>
                  <span>
                    <b>English</b>
                  </span>
                  <span>Full Professional Proficiency</span>
                </div>
                <div>
                  <span>
                    <b>Hindi</b>
                  </span>
                  <span>Full Professional Proficiency</span>
                </div>
              </div>
              <div className="division__right">
                <span>
                  <b>Bengali</b>
                </span>
                <span>Native or Bilingual Proficiency</span>
              </div>
            </div>
          </div> */}
          {/* <div className="interest">
            <h4>Interests</h4>
            <div id="hr"></div>
            <p>
              <Button size="small" variant="outlined" color="primary">
                Cricket
              </Button>
              <Button size="small" variant="outlined" color="primary">
                Coding related stuffs
              </Button>
              <Button size="small" variant="outlined" color="primary">
                Sketching
              </Button>
              <Button size="small" variant="outlined" color="primary">
                Watching movies
              </Button>
              <Button size="small" variant="outlined" color="primary">
                Travelling
              </Button>
            </p>
          </div> */}
        </div>
        <div className="right">
          <div className="projects">
            <h4>Personal Projects</h4>
            <div id="hr"></div>
            {/* <p>
              <div className="project">
                SmartBot
                <span>
                  <a
                    href="https://github.com/pratimk999/MinorProject"
                    target="_blank"
                    rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                </span>
              </div>
              <span>Mar 2021 - Apr 2021</span>
              <ul>
                <li>
                  A chatbot powered by google dialogflow.Integrated in a website
                  with React js.
                </li>
              </ul>
            </p> */}
            <p>
              <div className="project">
                Spotify Music Player UI
                <span>
                  <a
                    href="https://github.com/pratimk999/Spotify-Music-Player-UI"
                    target="_blank"
                    rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                </span>
              </div>
              <span>Jan 2021</span>
              <ul>
                <li>
                  Music web application with <b>authentication</b> feature where
                  user can keep track of his/her original spotify account
                  information.
                </li>
                <li>
                  Tech Stack used : <b>Html, Css, React js, Material UI</b>
                </li>
              </ul>
            </p>
            <p>
              <div className="project">
                COVID-19 Tracker
                <span>
                  <a
                    href="https://github.com/pratimk999/Covid-19-Tracker"
                    target="_blank"
                    rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                </span>
              </div>
              <span>Jan 2021</span>
              <ul>
                <li>
                  Corona virus tracker to keep track all the live Covid-19 data
                  across the world with the help of <b>disease.sh API</b>.
                </li>
                <li>
                  Tech Stack used :{" "}
                  <b>
                    Html, Css, React js, Material UI, react-leaflet,
                    react-chart-js-2
                  </b>
                </li>
              </ul>
            </p>
            <p>
              <div className="project">
                Ecommerce Web application
                <span>
                  <a
                    href="https://github.com/pratimk999/Flipkart_Shop"
                    target="_blank"
                    rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                </span>
              </div>
              <span>Dec 2020 - Jan 2020</span>
              <ul>
                <li>
                  Ecommerce application with user authentication and admin
                  panel.
                </li>
                <li>
                  Tech Stack used :{" "}
                  <b>Html, Css, React js, Material UI, Node js, MongoDB, JWT</b>
                </li>
              </ul>
            </p>
            {/* <p>
              <div>Weather app</div>
              <span>Dec 2020 - Dec 2020</span>
              <ul>
                <li>
                  A weather application with flutter to fetch weather details of
                  any place with openWeatherMap API
                </li>
              </ul>
            </p> */}
            <p>
              <div className="project">
                YelpCamp web application
                <span>
                  <a
                    href="https://github.com/pratimk999/YelpCamp"
                    target="_blank"
                    rel="noopener noreferrer">
                    <OpenInNewIcon />
                  </a>
                </span>
              </div>
              <span>Jul 2020 - Aug 2020</span>
              <ul>
                <li>
                  A social platform with user <b>authentication</b> and all the{" "}
                  <b>CRUD</b> operations and a personal profile of user.
                </li>
                <li>
                  Tech Stack used :{" "}
                  <b>Html, Css, express js, Node js, MongoDB, Passport Js</b>
                </li>
              </ul>
            </p>
          </div>

          <div className="courses">
            <h4>Certificates & Courses</h4>
            <ul>
              <li>
                Hackerrank Java
                <a
                  href="https://drive.google.com/file/d/1ClI-EnvdTUDhbgCguIg4RHgYQliMHDem/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li>
              <li>
                Hackerrank Problem Solving(Basic)
                <a
                  href="https://drive.google.com/file/d/1I0AJCsvcFtLY6SWkYVr39aoBoDA6q3oI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li>
              <li>
                Hackerrank React
                <a
                  href="https://drive.google.com/file/d/1Fl5qNUXEgKFC9EWczRwFRslX8SEdRNDF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li>
              <li>
                Hackerrank JavaScript
                <a
                  href="https://drive.google.com/file/d/1he09jS6OnHVsD3vHu3bX_6x5DHc-Q6Eu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li>
              <li>
                MongoDB Basics (MongoDB University)
                <a
                  href="https://drive.google.com/file/d/1rMRLBDcHT0il38_xg88UjzgO9iAblUfG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li>
              <li>
                Uber Technologies online coding challenge
                <a
                  href="https://drive.google.com/file/d/1i9KPcV1WSI5ziSxrnJ4cEUsKe94tcRk9/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li>
              {/* <li>
                Webmonk (Training on MERN stack) (10/2020 - 01/2021)
                <a
                  href="https://github.com/pratimk999/Covid-19-Tracker"
                  target="_blank"
                  rel="noopener noreferrer">
                  <OpenInNewIcon />
                </a>
              </li> */}
              {/* <li>App Development with Flutter (09/2020 - 11/2020)</li>
              <li>Advance Java (Aug 2020 - Sep 2020) (08/2020 - 09/2020)</li>
              <li>
                Full Stack development with Node js and MongoDb (05/2020 -
                05/2020)
              </li> */}
            </ul>
          </div>

          <div className="achievements">
            <h4>Achievements</h4>
            <li>
              <span>
                <b>5⭐</b> on{" "}
                <a
                  href="https://www.hackerrank.com/pratimkundu15"
                  target="_blank"
                  rel="noreferrer">
                  HackerRank
                </a>
              </span>
            </li>
            <li>
              <span>
                <b>2.5⭐</b> on{" "}
                <a
                  href="https://leetcode.com/Pratim26/"
                  target="_blank"
                  rel="noreferrer">
                  Leetcode
                </a>
              </span>
            </li>
            <li>
              <span>
                <b>
                  2⭐ <span style={{ fontSize: 15 }}>(Highest rating 3⭐)</span>
                </b>{" "}
                on{" "}
                <a
                  href="https://www.codechef.com/users/pratim26"
                  target="_blank"
                  rel="noreferrer">
                  Codechef
                </a>
              </span>
            </li>
            {/* <li>
              <span>Player at U-15 ,U-16 BENGAL squad (2013 - 2016)</span>
              <ul>
                <li>
                  I was selected in the 30 members squad of U-15Bengal for
                  Bangladesh tour
                </li>
              </ul>
            </li>
            <li>
              <span>
                Highest wicket taker in CAB (Cricket Association ofBengal)
                organised tournament(2015 - 2016)
              </span>
              <ul>
                <li>
                  Awarded by former Indian skipper Krishnamachari Srikanth
                </li>
              </ul>
            </li>
            <li>
              <span>State champions in School games(Cricket) (2016)</span>
            </li> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
