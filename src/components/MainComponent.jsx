import React from 'react'

import CarouselImg1 from '../multimedia/Carousel_Img_1.jpg'
import CarouselImg2 from '../multimedia/Carousel_Img_2.jpg'


function MainComponent(){
    console.log("TESTING: MainComponent Render")
    return ( 
        <div id="carouselExampleCaptions" className="carousel slide mt-3" data-ride="carousel">
            <div className="carousel-inner" align="center">
                {/* <div className="jumbotron jumbotron-fluid carousel-item active bg-dark text-primary border border-success">
                    <h1 className="display-4">Release Calendar</h1>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div>
                <div className="jumbotron jumbotron-fluid carousel-item bg-dark text-primary border border-success">
                    <h1 className="display-4">Banned and Restricted List</h1>
                    <hr className="my-4"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                </div> */}

                <div className="carousel-item active">
                    <img src={CarouselImg1} className="d-block w-75" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div className="carousel-item" align="center">
                    <img src={CarouselImg2} className="d-block w-75" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default MainComponent