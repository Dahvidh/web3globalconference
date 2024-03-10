import React from 'react'

function Insights() {
  return (
    <>
    <section class="container mx-auto" style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
    <div class="p-8 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 gap-x-24 items-baseline" style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
          <div class="flex items-center space-x-12" style={{"display":"flex","marginLeft":"3rem","alignItems":"center"}}>
            <div>
            </div>

          </div>
       

          <div class="mt-6" style={{"marginTop":"1.5rem"}}>
          <h6 className="heading-l">Registration Breakdown</h6>
              <div className="content">
              <li> Total Registration: 300+</li>
              <li>Total Attendance: 100+</li>
            <li>10+ Countries Globally </li>
            <li>Over 4 Continents</li>
            <li>20+ Speakers</li>
            <li>23+ Partners</li>
              </div>
              </div>
              </div>
  </section>

  <section class="bg-hero mt-28 h-[650px] flex items-center justify-center" style={{"display":"flex","marginTop":"7rem","justifyContent":"center","alignItems":"center","height":"650px"}}>
  <div class="p-4" style={{"padding":"1rem"}}>
    <div class="mt-12 w-full max-w-4xl" style={{"marginTop":"3rem","width":"100%","maxWidth":"56rem"}}>
      <h3 class="text-center font-bold my-4 text-white text-3xl lg:text-4xl leading-10 lg:leading-12" style={{"marginTop":"1rem","marginBottom":"1rem","fontSize":"1.875rem","lineHeight":["2.25rem","2.5rem"],"fontWeight":700,"textAlign":"center","color":"#ffffff","@media (min-width: 1024px)":{"fontSize":"2.25rem","lineHeight":"2.5rem"}}}>
        Highlights from W3LC</h3>
<br/> 
         <h3>2023</h3>
      <div class="aspect-ratio-16-9">
        <div class="flex items-center justify-center" style={{"display":"flex","justifyContent":"center","alignItems":"center"}}>
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
  
  )
}

export default Insights


