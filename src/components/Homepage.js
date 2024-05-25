// Background.js
import styled from "styled-components";
import { useEffect, useState } from "react";
import Background from "./Background";
import Hero from "./Hero";
import Navbar from "./Navbar";

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Homepage = () => {
  let heroData = [
    { text1: "Web3 Global", text2: "Conference" },
    { text1: "The Future is", text2: "Decentralized" },
    { text1: "Join Us ", text2: "Insights & Networking" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 5000);
  }, []);

  return (
    <BackgroundWrapper>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <br />
      <br />
    </BackgroundWrapper>
  );
};

export default Homepage;
