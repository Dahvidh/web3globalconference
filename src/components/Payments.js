import React from 'react'

function payments() {
  return (
    <>
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
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n    body {\n      font-family: Arial, sans-serif;\n      text-align: center;\n    }\n    \n    .container {\n      margin-top: 50px;\n    }\n    \n    h1 {\n      color: #333;\n    }\n    \n    #wallet-address {\n      margin-top: 20px;\n      font-size: 20px;\n      color: #ffff;\n    }\n    \n    #qr-code {\n      margin-top: 30px;\n    }\n  "
      }}
    />
    <div className="container">
      <h1>Make Your Payment</h1>
      <div id="wallet-address">
        USDT (TRC20) <span id="address">[Wallet address]</span>
      </div>
      <div id="qr-code" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <p>
      ENSURE TO SEND PROOF OF PAYMENT TO:{" "}
      <a
        href="mailto:info.web3globalconference@gmail.com"
        className="footer-link"
      >
        info.web3globalconference@gmail.com
      </a>
    </p>
  </div>
  <meta charSet="UTF-8" />
  <title img="" src="Web 3 Global Conference Logo Transparent1.png">
    W3GC | Payments and Subscription
  </title>
  <link rel="stylesheet" href="./style.css" />
  <link
    rel="stylesheet"
    href="karls-superb-site-b5d298-49ec6745d5a9d9.webflow.f06a384f4.css"
  />
  <link
    data-default-icon="Web 3 Global Conference Logo Transparent1.png"
    rel="icon"
    sizes="192x192"
    href="Web 3 Global Conference Logo Transparent1.png"></link>
  </>
  )
}

export default payments;