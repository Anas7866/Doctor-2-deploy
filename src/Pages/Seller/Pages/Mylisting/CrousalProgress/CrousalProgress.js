import React from 'react'
import "./CrousalProgress.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CrousalProgress() {
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
        <div className="progress progress_style" >
        <div className="progress-bar progress_color" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
                <div className='col-sm-12 p-4'>
                <div className='row'>
                    <div className='col-sm-6'>
                   <span className='icon_calender'> <i class="fas fa-calendar-week"></i></span>
                    </div>
                    <div className='col-sm-6 m-auto text-right'>
                        <badge className="badge badge-light px-2 py-1 badge_color">To do</badge>
                    </div>
                </div>
                <div className='row pt-3'>
                    <div className='col-sm-8'>
                  <p className='font_card mb-0'><b>Your listing is <span className='color_percentage'>15%</span> complete</b></p>
                  <p className='para_color'><b>Please complete all profile and startup details so we can review and then list your startup</b></p>
                    </div>
                    <div className='col-sm-4 text-right'>
                        <button className="btn btn-primary button_style_listing py-3">Complete your listing <span className='right_icon'><i class="fas fa-arrow-right"></i></span></button>
                    </div>
                </div>
                </div>
            </div>


            <div className='col-sm-12 background_image p-0'>
               
                <div className='col-sm-12 p-4'>
                <div className='row  pt-1 '>
                    <div className='col-sm-6'>
                   <span className='icon_calender'> <i class="fas fa-chart-pie"></i></span>
                    </div>
                    <div className='col-sm-6 m-auto text-right'>
                        <badge className="badge badge-light px-2 py-1 badge_color">To do</badge>
                    </div>
                </div>
                <div className='row pt-3'>
                    <div className='col-sm-8'>
                  <p className='font_card mb-0'><b>Want to attract more buyers?</b></p>
                  <p className='para_color'><b>Give buyers confidence in your numbers with the Metrics connected badge.</b></p>
                    </div>
                    <div className='col-sm-4 text-right'>
                        <button className="btn btn-primary button_style_listing py-3">Learn more <span className='right_icon'><i class="fas fa-arrow-right"></i></span></button>
                    </div>
                </div>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default CrousalProgress