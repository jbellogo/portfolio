import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <strong className="logo--container">⟨ JUAN BELLO ⟩</strong>
      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="heroSection" className="navbar--content">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="AboutMe" className="navbar--content">
              About Me
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} activeClass="navbar--active-content" spy={true} smooth={true} offset={-70} duration={500} to="Portfolio" className="navbar--content">
              Portfolio
            </Link>
          </li>
          <li>
            <a href="https://jbellogo.github.io/Notes/" target="_blank" rel="noopener noreferrer" className="navbar--content" onClick={closeMenu}>
              Notes
            </a>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="navbar--content" onClick={closeMenu}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
