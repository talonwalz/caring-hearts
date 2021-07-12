import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import one from '../../images/caregiverOne.jpeg'
import two from '../../images/caregiverTwo.jpeg'
import three from '../../images/caregiverThree.jpeg'
// import four from '../../images/caregiverFour.jpeg'
import four from '../../images/care.jpg'

// import five from '../../images/caregiverFive.jpeg'
import five from '../../images/care2.jpg'

import React, {Component} from 'react'
import Slider from 'react-slick'
import './Slider.scss'

const photos = [
    {
        name: `front of building`,
        url: one
    },
    {
        name: `gym picture`,
        url: two
    },
    {
        name: `tanner`,
        url: three
    },
    {
        name: `gym`,
        url: four
    },
    {
        name: `pool`,
        url: five
    }
]

class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides',
            autoplay: true,
            autoplaySpeed: 4000,
            adaptiveHeight: true,
            pauseOnHover: true

        }
        return (
            <main className="slider-container">
            <section className="slider">
                <Slider {...settings}>
                    {photos.map((photo, i) => {
                        return (
                            <div key={i} className="slide" >
                                <img width="100%" src={photo.url} alt={photo.name}/>
                            </div>
                        )
                    })}
                </Slider>
            </section>
            </main>
        )
    }
}

export default Carousel