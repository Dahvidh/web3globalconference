import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Homepage() {
  return (
    <>
  <section>
  <div id="global-styles" className="global-styles w-embed">
    <style
      dangerouslySetInnerHTML={{
        __html:
          '\n\n/* Focus state style for keyboard navigation for the focusable elements */\n*[tabindex]:focus-visible,\n  input[type="file"]:focus-visible {\n   outline: 0.125rem solid #4d65ff;\n   outline-offset: 0.125rem;\n}\n\n/* Get rid of top margin on first element in any rich text element */\n.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n\n/* Get rid of bottom margin on last element in any rich text element */\n.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n\n/* Prevent all click and hover interaction with an element */\n.pointer-events-off {\n\tpointer-events: none;\n}\n\n/* Enables all click and hover interaction with an element */\n.pointer-events-on {\n  pointer-events: auto;\n}\n\n/* Create a class of .div-square which maintains a 1:1 dimension of a div */\n.div-square::after {\n\tcontent: "";\n\tdisplay: block;\n\tpadding-bottom: 100%;\n}\n\n/* Make sure containers never lose their center alignment */\n.container-medium,.container-small, .container-large {\n\tmargin-right: auto !important;\n  margin-left: auto !important;\n}\n\n\n\n/* Apply "..." after 3 lines of text */\n.text-style-3lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n\n/* Apply "..." after 2 lines of text */\n.text-style-2lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n\n/* Adds inline flex display */\n.display-inlineflex {\n  display: inline-flex;\n}\n\n/* These classes are never overwritten */\n.hide {\n  display: none !important;\n}\n\n@media screen and (max-width: 991px) {\n    .hide, .hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .hide-mobile{\n      display: none !important;\n    }\n}\n\n\n.margin-0 {\n  margin: 0rem !important;\n}\n\n.padding-0 {\n  padding: 0rem !important;\n}\n\n.spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n\n.margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n\n.margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n\n.margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n\n.margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n\n.padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n\n.margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n\n.padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n\n.margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n\n.padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n\n/* Apply "..." at 100% width */\n.truncate-width {\n\t\twidth: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n/* Removes native scrollbar */\n.no-scrollbar {\n    -ms-overflow-style: none;\n    overflow: -moz-scrollbars-none;\n}\n\n.no-scrollbar::-webkit-scrollbar {\n    display: none;\n}\n\n.secondary-button {\n\tdisplay: inline-flex;\n}\n\na {\n\tcolor:currentColor;\n\t}\n\n  html { font-size: calc(0.625rem + 0.41666666666666663vw); }\n  @media screen and (max-width:1920px) { html { font-size: calc(0.625rem + 0.41666666666666674vw); } }\n  @media screen and (max-width:1440px) { html { font-size: calc(0.8126951092611863rem + 0.20811654526534862vw); } }\n  @media screen and (max-width:479px) { html { font-size: calc(0.7494769874476988rem + 0.8368200836820083vw); } }\n\n\n'
      }}
    />
  </div>
  <div
  data-animation="over-right"
  className="banner-nav_wrapper w-nav"
  data-easing2="ease"
  data-easing="ease"
  data-collapse="medium"
  role="banner"
  data-no-scroll={1}
  data-duration={400}
  id="Nav-Bar"
>
  <div className="navigation_component">
    <a
      href="#"
      aria-current="page"
      className="navbar_logo-linkblock w-nav-brand w--current"
      aria-label="home"
    >
      <img
        src="Web 3 Global Conference Logo Transparent 2.svg"
        loading="lazy"
        alt="John doe"
        className="logo_navbar"
      />
    </a>
    <div className="links-container">
      <nav role="navigation" className="nav-menu w-nav-menu">
        <div className="ticket-and-close-icon">
          <a href="#" className="w-inline-block">
            <img
              src="645edd8f8709e3387ae97c49_close.svg"
              loading="lazy"
              alt="Close menu"
              className="close-icon"
            />
          </a>
        </div>
        <div className="menu">
          <a href="Speakers.html" className="nav-link w-nav-link" ></a> 
          <a href="#" className="nav-link w-nav-link" ></a>
          <a href="#" className="nav-link w-nav-link" ></a> 
          <a href="#" className="nav-link w-nav-link" ></a> 
        </div>
      </nav>
    </div>
    <div
      className="menu-button w-nav-button"
      style={{ WebkitUserSelect: "text" }}
      aria-label="menu"
      role="button"
      tabIndex={0}
      aria-controls="w-nav-overlay-1"
      aria-haspopup="menu"
      aria-expanded="false"
    >
      <img
        src="645edd8f8709e3387ae97c63_ticket.png"
        loading="lazy"
        width={50}
        height="Auto"
        alt="Menu button"
        className="menu-icon"
      />
    </div>
  </div>
  <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-1" />
</div>
<div className="main-wrapper">
  <div
    id="W3GC"
    className="section_hero home wf-section animate__animated animate__bounce animate__delay-2s"
  >
    <div className="padding-global">
      <div className="padding-section-large hero-home">
        <div className="container-large">
          <div className="w-layout-grid hero_component">
            <div
              id="w-node-_947af637-b344-5890-a7f1-1eb372cf6fde-eaf3a2fe"
              className="hero-left hero_home"
            >
               <div className="content">
                <div className="title-1">
                  <h1 className="heading-xxl">WEB3 GLOBAL CONFERENCE</h1>
                </div>
                <div className="hero-subtext">
                  <p className="text-size-xlarge">
                 The Future is Decentralized
                  </p>
                </div>
                <div className="conference-details align-left">
                  <img
                    src="645edd8f8709e3387ae97c2b_calendar.svg"
                    loading="lazy"
                    width={18}
                    alt="Calendar Icon"
                    className="calendar-icon landing-page"
                  />
                  <div className="conference-dates">
                       <div className="text-weight-bold">
                     Saturday, October 26
                      <br />
                      9:00 - 16:00 WAT
                    </div>
                  </div>
                </div>
<a
                  href="https://app.moongate.id/e/web3-global-conference-2024"
                  className="secondary-button w-button"
                >
                  BOOK A TICKET
                </a>
                     &nbsp;  &nbsp;
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeOCFyt6izfrUbp0JCyvoP9TGRKAnK5LERjmbD35WMsTIl-Jg/viewform"
                  className="secondary-button outline w-button"
                >
                  BE A SPEAKER
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>

</div>
</section>                
</>

  )
}

export default Homepage;
