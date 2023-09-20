import React from 'react'

function Header() {
  return (
    <>
    <title>W3GC | Homepage</title>
    <meta content="" name="description" />
    <meta content="" property="og:title" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link
      href="karls-superb-site-b5d298-49ec6745d5a9d9.webflow.f06a384f4.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <link href="https://fonts.googleapis.com/" rel="preconnect" />
    <link
      href="https://fonts.gstatic.com/"
      rel="preconnect"
      crossOrigin="anonymous"
    />
    <link
      data-default-icon="Web 3 Global Conference Logo Transparent1.png"
      rel="icon"
      sizes="192x192"
      href="Web 3 Global Conference Logo Transparent1.png"
    />
    <link
      href="Web 3 Global Conference Logo Transparent1.png"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="Web 3 Global Conference Logo Transparent.png"
      rel="apple-touch-icon"
    />

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
  </>
  
  )
}

export default Header