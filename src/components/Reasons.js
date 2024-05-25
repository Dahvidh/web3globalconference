import React from "react";
import "animate.css";

function Reasons() {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  };

  const reasonBoxStyle = {
    width: "calc(40.33% - 10px)",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "rgb(219, 219, 219)",
    paddingTop: "2%",
  };

  const labelDivStyle = {
    marginBottom: "10px",
  };

  const headingXsStyle = {
    fontSize: "20px",
    textAlign: "center",
  };

  const mobileStyles = `
    @media screen and (max-width: 768px) {
      .content-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      .reason-box {
        width: calc(45% - 10px);
      }
     .heading-Xs = {
        fontSize: "20px";
        textAlign: "center";
        line-height: 3.5vw;
      };
    }
  
    @media screen and (max-width: 480px) {
      .content-1 {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 10px;
      }
      .reason-box {
        width: calc(100% - 10px);
      }
    }
  `;

  return (
    <section>
      <style>{mobileStyles}</style>
      <div
        id="About"
        className="section_reasons-to-attend-home wf-section"
        style={{
          backgroundColor: "#834ce8",
        }}
      >
        <div className="padding-global">
          <div className="padding-section-small">
            <div className="container-large">
              <div className="w-layout-flex _0-75-1_flex">
                <div
                  className="Reasons"
                  style={{
                    backgroundColor: "#834ce8",
                  }}
                >
                  <h2 className="heading-l">Reasons to Attend</h2>
                  <div className="content-1" style={containerStyle}>
                    <div
                      className="w-layout-grid grid--text"
                      style={{
                        display: "contents",
                        backgroundColor: "#834ce8",
                      }}
                    >
                      {/* Box 1 */}
                      <div
                        style={reasonBoxStyle}
                        className="animate__animated animate__backInLeft reason-box"
                      >
                        <div style={labelDivStyle}>
                          <b>
                            <h3 style={headingXsStyle}>
                              Unrivaled Speaker Lineup
                            </h3>
                          </b>
                        </div>
                        <p
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            padding: "5%",
                          }}
                        >
                          Join 50+ esteemed industry experts representing
                          diverse sectors in the web3 ecosystem for an
                          unparalleled knowledge-sharing experience.
                        </p>
                      </div>
                      {/* Box 2 */}
                      <div
                        style={reasonBoxStyle}
                        className="animate__animated animate__backInLeft reason-box"
                      >
                        <div style={labelDivStyle}>
                          <b>
                            <h3 style={headingXsStyle}>Elite Audience</h3>
                          </b>
                        </div>
                        <p
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            padding: "5%",
                          }}
                        >
                          Engage with a distinguished gathering of web3 decision
                          makers and industry experts, with 90% of attendees
                          comprising influential leaders in the field.
                        </p>
                      </div>
                      {/* Box 3 */}
                      <div
                        style={reasonBoxStyle}
                        className="animate__animated animate__backInLeft reason-box"
                      >
                        <div style={labelDivStyle}>
                          <b>
                            <h3 style={headingXsStyle}>
                              Exclusively Curated Networking
                            </h3>
                          </b>
                        </div>
                        <p
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            padding: "5%",
                          }}
                        >
                          Immerse yourself in an intimate and highly selective
                          networking environment, limited to 500 participants,
                          ensuring unparalleled opportunities for quality
                          connections.
                        </p>
                      </div>
                      {/* Box 4 */}
                      <div
                        style={reasonBoxStyle}
                        className="animate__animated animate__backInLeft reason-box"
                      >
                        <div style={labelDivStyle}>
                          <h3 style={headingXsStyle}>
                            Empower the Future of the Industry
                          </h3>
                        </div>
                        <p
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            padding: "5%",
                          }}
                        >
                          Take a proactive stance in reshaping the future of
                          web3, driving innovation, fostering trust, and
                          facilitating the seamless onboarding of companies and
                          users into the web3 ecosystem.
                        </p>
                      </div>

                      {/* Box 5 */}
                      <div
                        style={reasonBoxStyle}
                        className="animate__animated animate__backInLeft reason-box"
                      >
                        <div style={labelDivStyle}>
                          <b>
                            <h3 style={headingXsStyle}>
                              Strategic Matchmaking at its Finest
                            </h3>
                          </b>
                        </div>
                        <p
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            padding: "5%",
                          }}
                        >
                          Experience an exceptional matchmaking day tailored for
                          esteemed venture capitalists, meticulously selected
                          startups, and outstanding individuals, fostering
                          valuable connections and investment opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "50px" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
