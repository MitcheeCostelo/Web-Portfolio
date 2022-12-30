import "./experience.scss";
import Chat from "../../static/chat.gif";
import File from "../../static/filemanager.gif";
import Bot from "../../static/bot.gif";
import Weswee from "../../static/weswee.png";

export default function Experience() {

  return (
    <div className="experience" id="experience">
      <div className="container">
        <h2 className="title">
          <span>02. </span>Some Things I've Built
          <div className="title-line" />
        </h2>

        <section>
          <div className="notThisCord">
            <img src={Chat} className="ntc-left" alt="" />
            <div className="ntc-right">
              <h2>NotThisCord</h2>

              <div className="ntc-description">
                <p>
                  A multi-client group communication app created using Java. The
                  app connects users to a server where they can create various
                  sized chat rooms to message one another. The chat uses binary
                  search trees and vectors to sort user base sizes.
                </p>
              </div>

              <div className="ntc-tags">
                <ul>
                  <li>Java</li>
                  <li>Communication App</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fileManager">
            <div className="fm-left">
              <h2>File Ghost</h2>

              <div className="fm-description">
                <p>
                  A file management program engineered from Python. The program
                  connects a client system to a server system using socket
                  connections. Once connected, the server has access to manage,
                  edit, and delete any files in the client.
                </p>
              </div>

              <div className="fm-tags">
                <ul>
                  <li>Python</li>
                  <li>Socket Server</li>
                </ul>
              </div>
            </div>

            <img src={File} className="fm-right" alt="" />
          </div>

          <div className="steloBot">
            <img src={Bot} className="sb-left" alt="" />

            <div className="sb-right">
              <h2>SteloBot</h2>
              <div className="sb-description">
                <p>
                  A Discord Bot constructed using C++. The bot fetches an API
                  from the site <a href="https://www.fflogs.com/">fflogs.com</a>{" "}
                  every five minutes. The bot then notifies users with a discord
                  message whenever their profile is updated with an instanced
                  report.
                </p>
              </div>

              <div className="sb-tags">
                <ul>
                  <li>C++</li>
                  <li>Discord</li>
                  <li>API</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="art">
            <div className="art-left">
              <h2>Lesley Garlan Art Website Concept</h2>
              <div className="art-description">
                <p>
                  Developed an interactive website for artist and content
                  creator Lesley Garlan. The website was created using React and
                  Javascript. The site uses dependencies like Framer Motion and
                  React Intersection Observer to allow a clean viewing
                  experience.
                </p>
              </div>
              <div className="art-tags">
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Framer Motion</li>
                  <li>React Intersection Observer</li>
                </ul>
              </div>
            </div>

            <img src={Weswee} className="art-right" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
