import React from "react";
import Background from "./Background";
import arrow_btn from "../img/arrow_btn.png";
import play_icon from "../img/play_icon.png";
import pause_icon from "../img/pause_icon.png";

const styles = {
  hero: {
    margin: "0 30px",
    marginTop: "30px",
    height: "100vh",
  },
  heroText: {
    color: "#fff",
    fontSize: "60px",
    fontWeight: "900",
    lineHeight: "100px",
  },
  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
  },
  marqueeText: {
    display: "inline-block",
    whiteSpace: "wrap",
    animation: "marquee 20s linear infinite",
    width: "1100%",
    color: "#fff",
    fontSize: "28px",
  },
  heroAgenda: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "fit-content",
    marginTop: "50px",
    padding: "3px 8px",
    paddingLeft: "20px",
    borderRadius: "60px",
    backgroundColor: "white",
    cursor: "pointer",
  },
  heroAgendaText: {
    color: "#292929",
    fontSize: "18px",
    fontWeight: "500",
  },
  heroAgendaLink: {
    textDecoration: "none",
    paddingTop: "4px",
    transition: "all 0.35s",
  },
  heroAgendaImg: {
    width: "50px",
    height: "50px",
    objectFit: "fill",
  },
  heroDotPlay: {
    marginTop: "120px",
    display: "flex",
    justifyContent: "space-between",
  },
  heroDots: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    listStyle: "none",
    marginLeft: "38%",
    position: "relative",
    bottom: "150px",
  },
  heroDot: {
    width: "15px",
    height: "15px",
    backgroundColor: "#fff",
    borderRadius: "7.5px",
    cursor: "pointer",
  },
  orangeDot: {
    backgroundColor: "orangered",
  },
  heroPlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "25px",
    position: "relative",
  },
  heroPlayImg: {
    width: "50px",
    height: "50px",
    objectFit: "cover",
    position: "absolute",
    right: "130px",
    bottom: "150px",
  },
  heroPlayText: {
    color: "#fff",
    fontSize: "18px",
    position: "absolute",
    right: "0px",
    bottom: "160px",
  },
  "@keyframes marquee": {
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
  },
  "@media (max-width: 768px) and (min-width: 479px)": {
    hero: {
      margin: "0 30px",
      marginTop: "30px",
      height: "100vh",
    },
    heroText: {
      color: "#fff",
      fontSize: "60px",
      fontWeight: "500",
      lineHeight: "100px",
    },
    marqueeText: {
      fontSize: "15px",
      width: "1100%",
    },
    heroAgenda: {
      flexDirection: "column",
      gap: "20px",
      padding: "10px 15px",
      paddingLeft: "10px",
      borderRadius: "40px",
    },
    heroAgendaText: {
      fontSize: "16px",
    },
    heroAgendaImg: {
      width: "40px",
      height: "40px",
    },
    heroDots: {
      marginLeft: "40%",
      bottom: "120px",
    },
    heroDot: {
      width: "12px",
      height: "12px",
    },
    heroPlayImg: {
      width: "40px",
      height: "40px",
      right: "100px",
      bottom: "120px",
    },
    heroPlayText: {
      fontSize: "16px",
      bottom: "130px",
    },
  },
  "@media (max-width: 478px)": {
    hero: {
      margin: "0 20px",
      marginTop: "20px",
      height: "90vh",
    },
    heroText: {
      fontSize: "30px",
      lineHeight: "40px",
    },
    marqueeText: {
      fontSize: "20px",
    },
    heroAgenda: {
      flexDirection: "column",
      gap: "10px",
      padding: "8px 10px",
      paddingLeft: "5px",
      borderRadius: "30px",
    },
    heroAgendaText: {
      fontSize: "14px",
    },
    heroAgendaImg: {
      width: "30px",
      height: "30px",
    },
    heroDots: {
      marginLeft: "35%",
      bottom: "100px",
    },
    heroDot: {
      width: "10px",
      height: "10px",
    },
    heroPlayImg: {
      width: "30px",
      height: "30px",
      right: "80px",
      bottom: "100px",
    },
    heroPlayText: {
      fontSize: "14px",
      bottom: "110px",
    },
  },
};

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <section>
      <Background />
      <div style={styles.hero}>
        <div style={styles.heroText}>
          <p style={styles.heroText}>{heroData.text1}</p>
          <p style={styles.heroText}>{heroData.text2}</p>
        </div>
        <br />
        <br />
        <div style={styles.marqueeContainer}>
          <span style={styles.marqueeText}>Date: 26th October, 2024</span>
          <span style={styles.marqueeText}>Time: 9:00 - 16:00 WAT</span>
        </div>
        <div style={styles.heroAgenda}>
          <p style={styles.heroAgendaText}>Agenda</p>
          <a href="#" style={styles.heroAgendaLink}>
            <img src={arrow_btn} alt="" style={styles.heroAgendaImg} />
          </a>
        </div>
        <div style={styles.heroDotPlay}>
          <ul style={styles.heroDots}>
            <li
              onClick={() => setHeroCount(0)}
              style={
                heroCount === 0
                  ? { ...styles.heroDot, ...styles.orangeDot }
                  : styles.heroDot
              }
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              style={
                heroCount === 1
                  ? { ...styles.heroDot, ...styles.orangeDot }
                  : styles.heroDot
              }
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              style={
                heroCount === 2
                  ? { ...styles.heroDot, ...styles.orangeDot }
                  : styles.heroDot
              }
            ></li>
          </ul>
        </div>
        <br />
        <br />
        <div style={styles.heroPlay}>
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
            style={styles.heroPlayImg}
          />
          <p style={styles.heroPlayText}>Be with Us</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
