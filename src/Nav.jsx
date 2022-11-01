import {
  faCode,
  faEnvelope,
  faFolderOpen,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

export default function Nav({ currentSection }) {
  return (
    <nav id="mainNav">
      <ul>
        <li>
          <Link to="landing" activeClass="active" spy>
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="skills" activeClass="active" spy>
            <FontAwesomeIcon icon={faCode} />
            <span>Skills</span>
          </Link>
        </li>
        <li>
          <Link to="projects" activeClass="active" spy>
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link to="contact" activeClass="active" spy>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
