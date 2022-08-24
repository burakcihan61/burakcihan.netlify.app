import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import codeSVG from "../assets/img/codePng.svg";
import instagramIcon from "../assets/img/instagram-icon.svg";
import linkedinIcon from "../assets/img/linkedin-icon.svg";
import githubIcon from "../assets/img/github-brands.svg";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={codeSVG} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/burakcihan61/">
                  <img src={linkedinIcon} alt="" />
                </a>
                <a href="https://www.instagram.com/burakcihan.61/">
                  <img src={instagramIcon} alt="" />
                </a>
                <a href="https://github.com/burakcihan61">
                  <img src={githubIcon} alt="" />
                </a>
              </div>
              <HashLink to="#connect"></HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};

export default NavBar;
