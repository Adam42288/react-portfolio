import React from "react";
import Resume from "../assets/qaresume.pdf";

const styles = {
  linkStyle: {
    fontSize: "1.2rem",
    textDecoration: "none",
  },
};

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <nav className="flex-container space-around">
      <div>
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-active" : "nav-inactive"}
        >
          About me
        </a>
      </div>
      <div>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-active" : "nav-inactive"
          }
        >
          Portfolio
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-active" : "nav-inactive"}
        >
          Contact Info
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href="#skills"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-active" : "nav-inactive"}
        >
          Skills
        </a>
      </div>
      <div>
        <a
          style={styles.linkStyle}
          href={Resume}
          download
          className="nav-inactive"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}
