import React from 'react';

function Footer() {
  return (
    <section className="footer-dark wf-section">
    <div className="email-subscribe-section">
        <div className="w-layout-grid subscribe-grid">
          <div className="subscribe-left">
            <div className="line-1">
              <h1 className="heading-l white">W3GC NEWSLETTER</h1>
            </div>
            <div className="line-2">
            <a
              href="#"
              target="_blank"
              className="heading-l orange"
            >Sign up for the latest updates</a>
            </div>
          </div>
        </div>
      
    </div>
  {/*<div className="footer-divider footer-1" />*/}
    <div className="padding-global">
      <div className="container-5">
        <div className="footer-wrapper">
          <div className="footer-social-block-three">
            <a
              href="https://www.linkedin.com/company/web3-global-conference/"
              target="_blank"
              className="footer-social-link-three w-inline-block"
            >
              <img
                src="645edd8f8709e3387ae97db4_linkedin.png"
                loading="lazy"
                width={30}
                alt=""
                className="image-200"
              />
            </a>
            <a
              href="https://twitter.com/web3globalconf?t=DO2bQ7yPiiKRswqQBH1jKQ&s=09"
              target="_blank"
              className="footer-social-link-three w-inline-block"
            >
              <img
                src="645edd8f8709e3387ae97dc0_twitter.png"
                loading="lazy"
                width={30}
                alt=""
                className="image-199 second"
              />
            </a>
            <a
              href="https://t.me/wgc2023"
              target="_blank"
              className="footer-social-link-three w-inline-block"
            >
              <img
                src="download.png"
                loading="lazy"
                width={30}
                alt=""
                className="image-200"
              />
            </a>
            <a
              href="#"
              className="footer-social-link-three w-inline-block"
            />
            <a
              href="#"
              className="footer-social-link-three w-inline-block"
            />
          </div>
          <div className="footer-content">
            <div
              id="w-node-_993be00b-7840-a68b-bde4-eb9f705b1e62-705b1e45"
              className="footer-block"
            >
              <a
                href="mailto:info.web3globalconference@gmail.com"
                className="footer-link"
              >
                info.web3globalconference@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

                   
              
    <div className="container-10" />
    <div className="container-11">
      <div className="footer-bottom-2">
        <div className="footer-copyright-2">
          © 2024 W3GC by Bathpage Consulting All rights reserved.
        </div>

                   <div className="footer-legal-block-2">
          <a
            href="Terms & Conditions.html"
            className="footer-legal-link-2"
          >
            Terms Of Use
          </a> </br>
          <a
            href="privacy.html"
            className="footer-legal-link-2"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Footer;
