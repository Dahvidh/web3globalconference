import React from "react";
import { Link } from "react-router-dom";
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

function Speakerlist() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          //dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="padding-section-large">
      <div className="container-large">
        <div className="investors_wrapper">
          <h2 className="heading-l text-align-center">Official Partners</h2>
          //<Slider {...settings}>
            <div className="logo-card">
              <img
                src="/imgg/Tokenizer-removebg-preview.png"
                loading="lazy"
                alt="The Hub "
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/-Stacked-MoonGate logo_green_white-1.svg"
                loading="lazy"
                alt="Moongate"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/reality+.png"
                loading="lazy"
                alt="Fomoweekly"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="imgg/web3nifty.png"
                loading="lazy"
                alt="Reality+"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/BlockX-removebg-preview.png"
                loading="lazy"
                alt="Hordanso LLC"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/20231026_140002-removebg-preview.png"
                loading="lazy"
                alt="Pitchtalk"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/20231026_140106-removebg-preview.png"
                loading="lazy"
                alt="FABC"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/20231026_143028-removebg-preview.png"
                loading="lazy"
                alt="Tokenizer"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/Blockchain_University_Gusau-removebg-preview.png"
                loading="lazy"
                alt="Ghana Block"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/BlockX-removebg-preview.png"
                loading="lazy"
                alt="Blockchain University"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/centauri_consortium-removebg-preview.png"
                loading="lazy"
                alt="Africa Blockchain center"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/FABC-removebg-preview.png"
                loading="lazy"
                alt="FABC"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/Ghana_Block-removebg-preview.png"
                loading="lazy"
                alt="Ghana Block"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/THE HUB LOGO.svg"
                loading="lazy"
                alt="NerdwareX"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/wib_africa 1@3x.png"
                loading="lazy"
                alt="Africa Blockchain Center"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/Untitled20_20220815120058-removebg-preview.png"
                loading="lazy"
                alt="NGG"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/BCH-removebg-preview.png"
                loading="lazy"
                alt="BCH Club"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/Hammer-removebg-preview.png"
                loading="lazy"
                alt="Hammer"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/Hordanso-removebg-preview.png"
                loading="lazy"
                alt="Hordanso"
                className="logo_image"
              />
            </div>
            <div className="logo-card">
              <img
                src="/imgg/Fomo-removebg-preview.png"
                loading="lazy"
                alt="Fomo"
                className="logo_image"
              />
            </div>
          //</Slider>
          <div className="text-align-center">
            <div className="heading-m"></div>
          </div>
          <div className="button-group is-center">
            <div className="waitlist-modal_btn">
              {/*  <a href="public/Insights.html" className="button is-alternate w-button">
              Join the 2024 Waitlist
              </a>*/}
            </div>
            <div
              id="w-node-e6716282-0155-f796-c274-93233fe90899-3c6bddfa"
              className="sponsor-modal_btn"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakerlist;
