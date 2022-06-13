import React from 'react';
import './Testimonials.css';

// import Swiper core and required modules
import { Pagination ,Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const reviewData=[
    {
        id:1,
        name:"Responsive Web Design ",
        img:'./img/certificate1.jpg',
        review:'FreeCodeCamp.org'
    },
    {
        id:2,
        name:"JS Data Structure and Algorithm",
        img:'./img/certificate2.jpg',
        review:'FreeCodeCamp.org'
    },
    {
        id:3,
        name:"Responsive Web Design",
        img:'./img/certificate3.jpg',
        review:'Sololearn.com'
    },
    {
        id:4,
        name:"JavaScript",
        img:'./img/certificate4.png',
        review:'Sololearn.com'
    },
    {
        id:5,
        name:"React + Redux Course",
        img:'./img/certificate5.jpg',
        review:'Sololearn.com'
    },
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Courses I've complete</h5>
            <h2>Certificates</h2>
            <div className="container testimonials-container">
            <Swiper
                modules={[Pagination,Scrollbar]} 
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                Scrollbar={{ draggable: true }}
            >
                {
                    reviewData.map(({id,name,img,review})=>(
                        <SwiperSlide>
                            <article className="testimonial" key={id}>
                                <div className="client-avatar">
                                    <img src={img} alt="avatar img" />
                                </div>
                                    <h4 className='client-name'>{name}</h4>
                                    <small className='client-review'>{review} </small>
                            </article>
                        </SwiperSlide>
                    ))
                }
                
            </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;