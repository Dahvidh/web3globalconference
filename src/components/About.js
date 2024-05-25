import React from "react";
import "animate.css";

function About() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const reasonBoxStyle = {
    width: "calc(33.33% - 15.5px)",
    border: "1px solid #ccc",
    borderRadius: "35px",
    backgroundColor: "rgb(219, 219, 219)",
    paddingTop: "10px",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "18px",
  };

  const attendeesStyle = {
    fontSize: "14px",
    top: "-5%",
    position: "relative",
  };

  /*const mobileStyles = `
    @media screen and (max-width: 768px) {
      
      .reason-box {
        width: calc(33.33% - 15px);
        paddingTop: "2%";
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "20px",
        alignContent: "center",
        flexDirection: "row",
        placeContent: "center",
        flexFlow: "wrap",
      }
      
      .heading-xs {
        font-size: 15px;
      }
      .strong-mobile {
        font-size: 10px;
      }
    }
    @media screen and (max-width: 480px) {
      .reason-box {
        width: calc(50% - 15px);
      }

      .heading-xs {
        font-size: 15px;
      }
      .strong-mobile {
        font-size: 10px;
      }
    }

    }
  `;*/

  return (
    <section>
      <div id="About" className="section_what-is-pot wf-section">
        <div className="padding-global" style={{ backgroundColor: "#000" }}>
          <div
            className="padding-section-large"
            style={{ backgroundColor: "#000" }}
          >
            <div
              className="container-large"
              style={{ backgroundColor: "#834ce8" }}
            >
              <div
                className="w-layout-grid _0-75-1_grid"
                style={{ backgroundColor: "#000" }}
              >
                <div
                  id="w-node-_36b21808-79f0-df05-6b1e-754aa2d38de4-a2d38ddf"
                  className="content"
                >
                  <h2 className="heading-l" style={{ color: "#fff" }}>
                    What is W3GC?
                  </h2>
                  <div className="content">
                    <p className="paragraph-text" style={{ color: "#fff" }}>
                      The Web3 Global Conference is an unparalleled event that
                      unites leading experts from diverse industries on a global
                      scale. With a core emphasis on the future of web3, this
                      conference serves as a pivotal platform for insightful
                      discussions surrounding regulations, challenges, and
                      invaluable guidance for companies venturing into the web3
                      ecosystem. Esteemed leaders representing government
                      bodies, private sectors, regulatory authorities, renowned
                      experts, and the vibrant web3 community will converge at
                      this extraordinary gathering.
                    </p>
                    <br />
                    <div style={containerStyle}>
                      <div
                        className="animate__animated animate__backInLeft"
                        style={reasonBoxStyle}
                      >
                        <strong style={headingStyle}>1,000+</strong>
                        <p style={attendeesStyle}>Attendees</p>
                      </div>
                      <div
                        className="animate__animated animate__backInLeft"
                        style={reasonBoxStyle}
                      >
                        <strong style={headingStyle}>50+</strong>
                        <p style={attendeesStyle}>Esteemed Speakers</p>
                      </div>
                      <div
                        className="animate__animated animate__backInLeft"
                        style={reasonBoxStyle}
                      >
                        <strong style={headingStyle}>50+</strong>
                        <p style={attendeesStyle}>Web3 Entrepreneurs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <strong className="bold-text-7"></strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
