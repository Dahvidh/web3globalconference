import React from "react";

function Insights() {
  const boxStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    marginBottom: "5px",
    border: "1px solid #ccc",
  };

  return (
    <>
      <section
        className="container mx-auto"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#000",
        }}
      >
        <div
          className="p-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-x-24 items-baseline"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="flex items-center space-x-12"
            style={{
              display: "flex",
              marginLeft: "3rem",
              alignItems: "center",
            }}
          >
            <div></div>
          </div>

          <div className="mt-6" style={{ marginTop: "1.5rem" }}>
            <h6 className="heading-l">Registration Breakdown</h6>
            <div className="content">
              <div style={boxStyle}>
                <p>Total Registration: 300+</p>
              </div>
              <div style={boxStyle}>
                <p>Total Attendance: 100+</p>
              </div>
              <div style={boxStyle}>
                <p>10+ Countries Globally</p>
              </div>
              <div style={boxStyle}>
                <p>Over 4 Continents</p>
              </div>
              <div style={boxStyle}>
                <p>20+ Speakers</p>
              </div>
              <div style={boxStyle}>
                <p>23+ Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-hero mt-28 h-[650px] flex items-center justify-center"
        style={{
          display: "flex",
          marginTop: "7rem",
          justifyContent: "center",
          alignItems: "center",
          height: "650px",
        }}
      >
        <div className="p-4" style={{ padding: "1rem" }}>
          <div
            className="mt-12 w-full max-w-4xl"
            style={{ marginTop: "3rem", width: "100%", maxWidth: "56rem" }}
          >
            <h3
              className="text-center font-bold my-4 text-white text-3xl lg:text-4xl leading-10 lg:leading-12"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                fontSize: "1.875rem",
                lineHeight: ["2.25rem", "2.5rem"],
                fontWeight: 700,
                textAlign: "center",
                color: "#ffffff",
                "@media (min-width: 1024px)": {
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                },
              }}
            >
              Highlights from W3LC
            </h3>

            <h3
              className="text-center font-bold my-4 text-white text-3xl lg:text-4xl leading-10 lg:leading-12"
              style={{
                marginTop: "1rem",
                marginBottom: "1rem",
                fontSize: "1.875rem",
                lineHeight: ["2.25rem", "2.5rem"],
                fontWeight: 700,
                textAlign: "center",
                color: "#ffffff",
                "@media (min-width: 1024px)": {
                  fontSize: "2.25rem",
                  lineHeight: "2.5rem",
                },
              }}
            >
              2023{" "}
            </h3>
            <div className="aspect-ratio-16-9">
              <div
                className="flex items-center justify-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <iframe
                  allowFullScreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  title="Envisioning the future of web3 - Web3 Global Conference 2023"
                  width="100%"
                  height="350"
                  src="https://www.youtube.com/embed/iH9iY3_BBA4"
                  id="widget2"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Insights;
