import React from "react";

function About() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",
  };

  const reasonBoxStyle = {
    width: "calc(100.33% - 20px)",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "rgb(219 219 219)",
  };

  const labelDivStyle = {
    marginBottom: "10px",
  };

  const headingXsStyle = {
    fontSize: "18px",
    alignContent: "center",
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
      width: calc{124.33%% - 20px);
    }
  }
`;

  return (
    <div id="About" className="section_what-is-pot wf-section">
      <div className="padding-global">
        <div className="padding-section-large">
          <div className="container-large">
            <div className="w-layout-grid _0-75-1_grid">
              <div
                id="w-node-_36b21808-79f0-df05-6b1e-754aa2d38de4-a2d38ddf"
                className="content"
              >
                <h2 className="heading-l">What is W3GC?</h2>
                <div className="content">
                  <p className="paragraph-text">
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
                  <p className="paragraph-text">
                    The conference is a power-packed one-day event that will
                    bring together a diverse audience of over{" "}
                    <strong>
                      1,000+ attendees featuring 50+ esteemed speakers
                      representing various industries.
                    </strong>
                    <br />
                  </p>
                  <br />
                  <p>We extend a warm invitation to </p>
                  <h6 className="heading-xs">
                    Web3 startups, Entrepreneurs, Developers, Industry leaders,
                    Creators, Web3 communities
                  </h6>

                  <div
                    id="About"
                    className="section_reasons-to-attend-home wf-section"
                    style={{
                      backgroundColor: "#834ce8",
                    }}
                  >
                    <div className="section_reasons-to-attend-home wf-section">
                      <div className="padding-global">
                        <div className="padding-section-small">
                          <div className="container-large">
                            <div className="w-layout-flex _0-75-1_flex">
                              <div className="content">
                                <h2 className="heading-l">Reasons to Attend</h2>
                                <div className="content" style={containerStyle}>
                                  <div
                                    className="w-layout-grid grid--text"
                                    style={{
                                      display: "contents",
                                    }}
                                  >
                                    {/* Box 1 */}
                                    <div style={reasonBoxStyle}>
                                      <div style={labelDivStyle}>
                                        <h3 style={headingXsStyle}>
                                          Unrivaled Speaker Lineup
                                        </h3>
                                      </div>
                                      <p>
                                        Join 50+ esteemed industry experts
                                        representing diverse sectors in the web3
                                        ecosystem for an unparalleled
                                        knowledge-sharing experience.
                                      </p>
                                    </div>
                                    {/* Box 2 */}
                                    <div style={reasonBoxStyle}>
                                      <div style={labelDivStyle}>
                                        <h3 style={headingXsStyle}>
                                          Elite Audience
                                        </h3>
                                      </div>
                                      <p>
                                        Engage with a distinguished gathering of
                                        web3 decision makers and industry
                                        experts, with 90% of attendees
                                        comprising influential leaders in the
                                        field.
                                      </p>
                                    </div>
                                    {/* Box 3 */}
                                    <div style={reasonBoxStyle}>
                                      <div style={labelDivStyle}>
                                        <h3 style={headingXsStyle}>
                                          Exclusively Curated Networking
                                        </h3>
                                      </div>
                                      <p>
                                        Immerse yourself in an intimate and
                                        highly selective networking environment,
                                        limited to 500 participants, ensuring
                                        unparalleled opportunities for quality
                                        connections.
                                      </p>
                                    </div>
                                    {/* Box 4 */}
                                    <div style={reasonBoxStyle}>
                                      <div style={labelDivStyle}>
                                        <h3 style={headingXsStyle}>
                                          Empower the Future of the Industry
                                        </h3>
                                      </div>
                                      <p>
                                        Take a proactive stance in reshaping the
                                        future of web3, driving innovation,
                                        fostering trust, and facilitating the
                                        seamless onboarding of companies and
                                        users into the web3 ecosystem.
                                      </p>
                                    </div>
                                    {/* Box 5 */}
                                    <div style={reasonBoxStyle}>
                                      <div style={labelDivStyle}>
                                        <h3 style={headingXsStyle}>
                                          Strategic Matchmaking at its Finest
                                        </h3>
                                      </div>
                                      <p>
                                        Experience an exceptional matchmaking
                                        day tailored for esteemed venture
                                        capitalists, meticulously selected
                                        startups, and outstanding individuals,
                                        fostering valuable connections and
                                        investment opportunities.
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
                  </div>
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
