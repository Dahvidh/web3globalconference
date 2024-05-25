import React from "react";
import Background from "./Background";
import arrow_btn from "../img/arrow_btn.png";
import play_icon from "../img/play_icon.png";
import pause_icon from "../img/pause_icon.png";

const styles = {
  hero: {
    margin: "0 120px",
    marginTop: "100px",
    height: "100vh",
  },
  heroText: {
    color: "#fff",
    fontSize: "100px",
    fontWeight: "500",
    lineHeight: "100px",
  },

  marqueeContainer: {
    width: "100%",
    overflow: "hidden",
  },
  marqueeText: {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "marquee 20s linear infinite",
    width: "1004%",
    color: "#fff",
    fontSize: "28px",
  },
  heroAgenda: {
    display: "flex",
    alignItems: "center",
    gap: "50px",
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
    gap: "23px",
    listStyle: "none",
    marginLeft: "45%",
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
};

const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <>
      <section>
        <Background />
        <div style={styles.hero}>
          <div style={styles.heroText}>
            <p style={styles.heroText}>{heroData.text1}</p>
            <p style={styles.heroText}>{heroData.text2}</p>
          </div>
          <div style={styles.marqueeContainer}>
            <span style={styles.marqueeText}>
              Date: Saturday, 26th October, 2024 | Time: 9:00 - 16:00 WAT
            </span>
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
    </>
  );
};

export default Hero;
