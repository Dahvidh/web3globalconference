const Navbar = () => {
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
      color: "#fffff",
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
       color: "#000",
    },
  };

  return (
    <div className="nav" style={styles.nav}>
      <div className="nav-logo" style={styles.navLogo}>
        Web3GlobalConference
      </div>
      <ul className="nav-menu" style={styles.navMenu}>
        <li className="nav-speaker">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeOCFyt6izfrUbp0JCyvoP9TGRKAnK5LERjmbD35WMsTIl-Jg/viewform"
            style={{ ...styles.navContactLink, ...styles.navContactLinkHover }}
          >
            BE A SPEAKER
          </a>
        </li>
        <li>
          <a href="#agenda" style={styles.navLink}>
            Agenda
          </a>
        </li>
        <li>
          <a href="#speakers" style={styles.navLink}>
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
