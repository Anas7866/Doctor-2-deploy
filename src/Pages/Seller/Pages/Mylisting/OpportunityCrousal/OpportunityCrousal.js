import React from 'react'
import "./OpportunityCrousal.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function OpportunityCrousal() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div className='col-sm-12 p-0'>
    <Carousel
      responsive={responsive}>
    <div className='col-sm-12 background_image p-0'>
   
            <div className='col-sm-12 p-4'>
            <div className='row  pt-1 '>
                <div className='col-sm-6'>
               <span className='icon_calender'> <i class="fas fa-headset"></i></span>
                </div>
                <div className='col-sm-6 m-auto text-right'>
                    <badge className="badge badge-light px-2 py-1 badge_color">Opportunity</badge>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-sm-8'>
              <p className='font_card mb-0'><b>Need some inspiration?</b></p>
              <p className='para_color'><b>Check out 1,000s of other startup listings on the marketplace.</b></p>
                </div>
                <div className='col-sm-4 text-right pl-0'>
                    <button className="btn btn-primary button_style_listing1 py-3">Browse the marketplace <span className='right_icon'><i class="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
            </div>
        </div>


        <div className='col-sm-12 background_image p-0'>
           
            <div className='col-sm-12 p-4'>
            <div className='row  pt-1 '>
                <div className='col-sm-6'>
               <span className='icon_calender'> <i class="fas fa-handshake"></i></span>
                </div>
                <div className='col-sm-6 m-auto text-right'>
                    <badge className="badge badge-light px-2 py-1 badge_color">Opportunity</badge>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-sm-8'>
              <p className='font_card mb-0'><b>Need professional help selling your startup?</b></p>
              <p className='para_color'><b>Search from 100s of experienced advisors and hire one today</b></p>
                </div>
                <div className='col-sm-4 text-right'>
                    <button className="btn btn-primary button_style_listing1 py-3">Find an advisor <span className='right_icon'><i class="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
            </div>
        </div>

        <div className='col-sm-12 background_image p-0'>
           
            <div className='col-sm-12 p-4'>
            <div className='row  pt-1 '>
                <div className='col-sm-6'>
               <span className='icon_calender'> <i class="fas fa-dollar-sign"></i></span>
                </div>
                <div className='col-sm-6 m-auto text-right'>
                    <badge className="badge badge-light px-2 py-1 badge_color">Opportunity</badge>
                </div>
            </div>
            <div className='row pt-3'>
                <div className='col-sm-8'>
              <p className='font_card mb-0'><b>Give buyers financing options with Boopos</b></p>
              <p className='para_color'><b>Help buyers acquire you faster by offering fast, flexible, and non-dilutive acquisition financing from Boopos.</b></p>
                </div>
                <div className='col-sm-4 text-right'>
                    <button className="btn btn-primary button_style_listing1 py-3">Learn more <span className='right_icon'><i class="fas fa-arrow-right"></i></span></button>
                </div>
            </div>
            </div>
        </div>


    </Carousel>
</div>
  )
}

export default OpportunityCrousal