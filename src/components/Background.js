import React from "react";
import video1 from "../img/video1.mp4";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";

const backgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  objectFit: "cover",
  zIndex: -1,
  animation: "fadeIn 2s ease-in-out forwards",
};

const fadeInKeyframes = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const responsiveStyles = `
  @media (max-width: 768px) {
    const backgroundStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      height: "50%",
      width: "50%",
      objectFit: "cover",
      zIndex: -1,
      animation: "fadeIn 2s ease-in-out forwards",

    video, img {
      object-fit: cover;
    }
  }
  @media (min-width: 379px) {
    const backgroundStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100%",
      width: "50%",
      objectFit: "cover",
      zIndex: -1,
      opacity: 0,
      animation: "fadeIn 2s ease-in-out forwards",

    video, img {
      object-fit: contain;
      height: 50%;
      width: 20%;
    }
  }
`;

// Function to inject styles into the document
const injectStyles = (css) => {
  const styleSheet = document.styleSheets[0];
  if (styleSheet) {
    const rules = css
      .split("}")
      .filter((rule) => rule.trim() !== "")
      .map((rule) => rule + "}");
    rules.forEach((rule) => {
      try {
        styleSheet.insertRule(rule, styleSheet.cssRules.length);
      } catch (e) {
        console.error("Error inserting rule:", e, rule);
      }
    });
  }
};

// Inject the keyframes and responsive styles into the document
injectStyles(fadeInKeyframes);
injectStyles(responsiveStyles);

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video style={backgroundStyle} autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} style={backgroundStyle} alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} style={backgroundStyle} alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} style={backgroundStyle} alt="" />;
  }
  return null;
};

export default Background;
