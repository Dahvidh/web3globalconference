import React from 'react';

function Homepage() {
  return (
    <>
      <style>
        {`
          /* Focus state style for keyboard navigation for the focusable elements */
          *[tabindex]:focus-visible,
          input[type="file"]:focus-visible {
            outline: 0.125rem solid #4d65ff;
            outline-offset: 0.125rem;
          }

          /* Get rid of top margin on first element in any rich text element */
          .w-richtext > :not(div):first-child,
          .w-richtext > div:first-child > :first-child {
            margin-top: 0 !important;
          }

          /* Get rid of bottom margin on last element in any rich text element */
          .w-richtext > :last-child,
          .w-richtext ol li:last-child,
          .w-richtext ul li:last-child {
            margin-bottom: 0 !important;
          }

          /* Prevent all click and hover interaction with an element */
          .pointer-events-off {
            pointer-events: none;
          }

          /* Enables all click and hover interaction with an element */
          .pointer-events-on {
            pointer-events: auto;
          }

          /* Create a class of .div-square which maintains a 1:1 dimension of a div */
          .div-square::after {
            content: "";
            display: block;
            padding-bottom: 100%;
          }

          /* Make sure containers never lose their center alignment */
          .container-medium, .container-small, .container-large {
            margin-right: auto !important;
            margin-left: auto !important;
          }

          /* Apply "..." after 3 lines of text */
          .text-style-3lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }

          /* Apply "..." after 2 lines of text */
          .text-style-2lines {
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          /* Adds inline flex display */
          .display-inlineflex {
            display: inline-flex;
          }

          /* These classes are never overwritten */
          .hide {
            display: none !important;
          }

          @media screen and (max-width: 991px) {
            .hide, .hide-tablet {
              display: none !important;
            }
          }

          @media screen and (max-width: 767px) {
            .hide-mobile-landscape {
              display: none !important;
            }
          }

          @media screen and (max-width: 479px) {
            .hide-mobile {
              display: none !important;
            }
          }

          .margin-0 {
            margin: 0rem !important;
          }

          .padding-0 {
            padding: 0rem !important;
          }

          .spacing-clean {
            padding: 0rem !important;
            margin: 0rem !important;
          }

          .margin-top, .padding-top, .margin-right, .padding-right,
          .margin-bottom, .padding-bottom, .margin-left, .padding-left,
          .margin-horizontal, .padding-horizontal, .margin-vertical,
          .padding-vertical {
            margin: 0rem !important;
            padding: 0rem !important;
          }

          /* Apply "..." at 100% width */
          .truncate-width {
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          /* Removes native scrollbar */
          .no-scrollbar {
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }

          .secondary-button {
            display: inline-flex;
          }

          a {
            color: currentColor;
          }

          html {
            font-size: calc(0.625rem + 0.41666666666666663vw);
          }

          @media screen and (max-width: 1920px) {
            html {
              font-size: calc(0.625rem + 0.41666666666666674vw);
            }
          }

          @media screen and (max-width: 1440px) {
            html {
              font-size: calc(0.8126951092611863rem + 0.20811654526534862vw);
            }
          }

          @media screen and (max-width: 479px) {
            html {
              font-size: calc(0.7494769874476988rem + 0.8368200836820083vw);
            }
          }
        `}
      </style>

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
        alt=""
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
          <a href="#" className="nav-link w-nav-link" />
          <a href="#" className="nav-link w-nav-link" />
          <a href="#" className="nav-link w-nav-link" />
          <a href="#" className="nav-link w-nav-link" />
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
                    Envisioning the Future of Web3.
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
                      9am, WAT.
                      <br />
                      October, Saturday 28th, 2023.
                    </div>
                  </div>
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdL5-BEA9rSvvTyv-h6usBwpCXj1D3S95YjL4L_Vyhf0bDrcg/viewform"
                  className="secondary-button w-button"
                >
                  BOOK A TICKET
                </a>
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
  </>
  );
}

export default Homepage;
