import React from "react";
//import 'animate.css';

function About() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: "20px",
    alignContent: "center",
    flexDirection: "row",
    placeContent: "center",
    flexFlow: "wrap",
  };

  const reasonBoxStyle = {
    width: "calc(21.33% - 100px)",
    border: "1px solid #ccc",
    borderRadius: "100px",
    backgroundColor: "rgb(219 219 219)",
    paddingTop: "2%",
  };

  const labelDivStyle = {
    marginBottom: "10px",
  };

  const headingXsStyle = {
    fontSize: "25px",
    textAlign: "center",
  };

  const mobileStyles = `
    @media screen and (max-width: 768px) {
      .content {
        flex-direction: row;
        align-items: center;
      }
      .reason-box {
        width: calc(124.33% - 20px);
      }
    }
    @media screen and (max-width: 480px) {
      .content {
        flex-direction: row;
        align-items: center;
      }
      .reason-box {
        width: calc(124.33% - 20px);
      }
    }
  `;

  return (
    <div id="About" className="section_what-is-pot wf-section">
      <div
        className="padding-global"
        style={{
          backgroundColor: "#000",
        }}
      >
        <div
          className="padding-section-large"
          style={{
            backgroundColor: "#000",
          }}
        >
          <div
            className="container-large"
            style={{
              backgroundColor: "#834ce8",
            }}
          >
            <div
              className="w-layout-grid _0-75-1_grid"
              style={{
                backgroundColor: "#000",
              }}
            >
              <div
                id="w-node-_36b21808-79f0-df05-6b1e-754aa2d38de4-a2d38ddf"
                className="content"
              >
                <h2
                  className="heading-l"
                  style={{
                    color: "#fff",
                  }}
                >
                  What is W3GC?
                </h2>
                <div className="content">
                  <p
                    className="paragraph-text"
                    style={{
                      color: "#fff",
                    }}
                  >
                    The Web3 Global Conference is an unparalleled event that
                    unites leading experts from diverse industries on a global
                    scale. With a core emphasis on the future of web3, this
                    conference serves as a pivotal platform for insightful
                    discussions surrounding regulations, challenges, and
                    invaluable guidance for companies venturing into the web3
                    ecosystem. Esteemed leaders representing government bodies,
                    private sectors, regulatory authorities, renowned experts,
                    and the vibrant web3 community will converge at this
                    extraordinary gathering.
                  </p>
                  <br />

                  <div
                    style={containerStyle} // Added containerStyle
                  >
                    <div
                      className="animate__animated animate__backInLeft"
                      style={{
                        width: "calc(21.33% - 15px)",
                        border: "1px solid #ccc",
                        borderRadius: "100px",
                        backgroundColor: "rgb(219 219 219)",
                        paddingTop: "5%",
                      }}
                    >
                      <div>
                        <h3
                          style={{
                            top: "-20px",
                            position: "relative",
                            fontSize: "25px",
                            textAlign: "center",
                          }}
                        >
                          <bold> 1,000+ </bold>
                          <br />
                          Attendees
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "calc(21.33% - 15px)",
                        border: "1px solid #ccc",
                        borderRadius: "107px",
                        backgroundColor: "rgb(219 219 219)",
                        paddingTop: "5%",
                      }}
                      className="animate__animated animate__backInLeft"
                    >
                      <div>
                        <h3
                          style={{
                            top: "-20px",
                            position: "relative",
                            fontSize: "25px",
                            textAlign: "center",
                          }}
                        >
                          <bold>50+</bold> <br /> Esteemed speakers
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "calc(21.33% - 15px)",
                        border: "1px solid #ccc",
                        borderRadius: "100px",
                        backgroundColor: "rgb(219 219 219)",
                        paddingTop: "2%",
                      }}
                      className="animate__animated animate__backInLeft"
                    >
                      <div style={labelDivStyle}>
                        <h3 style={headingXsStyle}>
                          <bold>50+ </bold> <br /> Web3 entrepreneurs.
                        </h3>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            <strong className="bold-text-7"></strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
