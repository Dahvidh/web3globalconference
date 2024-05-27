import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    nav: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "20px",
      color: "#fff",
      backgroundColor: "transparent",
    },
    navLogo: {
      fontFamily: "Outfit",
      fontSize: "25px",
      fontWeight: 600,
      color: "#fff",
    },
    navMenu: {
      display: "flex",
      alignItems: "center",
      listStyle: "none",
      fontSize: "20px",
      gap: "30px",
    },
    navLink: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "24px",
    },
    navContactLink: {
      backgroundColor: "#834ce8",
      color: "white",
      padding: "12px 22px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      borderRadius: "50px",
    },
    navContactLinkHover: {
      backgroundColor: "#36068f",
    },
    hamburger: {
      display: "none",
      fontSize: "30px",
      cursor: "pointer",
      color: "white",
    },
    // Responsive styles
    navResponsive: {
      flexDirection: "column",
      margin: "10px",
    },
    navLogoResponsive: {
      fontSize: "22px",
    },
    navMenuResponsive: {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "15px",
      display: "none",
    },
    navMenuResponsiveOpen: {
      display: "flex",
    },
    navLinkResponsive: {
      fontSize: "20px",
    },
    navContactLinkResponsive: {
      padding: "10px 20px",
    },
  };

  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      className="nav"
      style={
        isSmallScreen ? { ...styles.nav, ...styles.navResponsive } : styles.nav
      }
    >
      <div
        className="nav-logo"
        style={
          isSmallScreen
            ? { ...styles.navLogo, ...styles.navLogoResponsive }
            : styles.navLogo
        }
      >
        Web3GlobalConference
      </div>
      <GiHamburgerMenu
        name="menu"
        style={
          isSmallScreen
            ? { ...styles.hamburger, display: "block" }
            : styles.hamburger
        }
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <ul
        className="nav-menu"
        style={
          isSmallScreen
            ? {
                ...styles.navMenu,
                ...styles.navMenuResponsive,
                ...(isMenuOpen && styles.navMenuResponsiveOpen),
              }
            : styles.navMenu
        }
      >
        <li className="nav-speaker">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeOCFyt6izfrUbp0JCyvoP9TGRKAnK5LERjmbD35WMsTIl-Jg/viewform"
            style={{ ...styles.navContactLink, ...styles.navContactLinkHover }}
          >
            BE A SPEAKER
          </a>
        </li>
        <li>
          <a
            href="#agenda"
            style={
              isSmallScreen
                ? { ...styles.navLink, ...styles.navLinkResponsive }
                : styles.navLink
            }
          >
            Agenda
          </a>
        </li>
        <li>
          <a
            href="#speakers"
            style={
              isSmallScreen
                ? { ...styles.navLink, ...styles.navLinkResponsive }
                : styles.navLink
            }
          >
            Speakers
          </a>
        </li>
        <li className="nav-contact">
          <a
            href="https://app.moongate.id/e/web3-global-conference-2024"
            style={{ ...styles.navContactLink, ...styles.navContactLinkHover }}
          >
            BOOK A TICKET
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
