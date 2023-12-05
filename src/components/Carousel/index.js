import React from 'react'
import { ReactComponent as RightArrow } from "./right-arrow.svg";
import { ReactComponent as LeftArrow } from "./left-arrow.svg";

import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import './carousel.css'

//swiper styling
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Card from '../Card';

const index = ({ data,navID, isAlbum,}) => {
    return (
        <div className='carousel-container'>
            <Swiper className='swiper-slide'
                modules={[Virtual, Navigation, Pagination]}
                // onSwiper={setSwiperRef}
                slidesPerView={8}
                // centeredSlides={true}
                spaceBetween={30}
                // pagination={{
                //   type: 'fraction',
                // }}
                navigation={{ nextEl: `#arrow-right-${navID}`, prevEl: `#arrow-left-${navID}` }}
                virtual
            >

                
                {isAlbum ? data.map((cardData) => (
                    <SwiperSlide
                        key={cardData.id}
                    >
                        <Card
                            imgSrc={cardData.image}
                            label={cardData.title}
                            followersCount={cardData.follows}
                            isAlbum={isAlbum}
                            songsCount={cardData.songs.length}
                        />
                    </SwiperSlide>

                )):

                data.map((cardData) => (
                    <SwiperSlide
                        key={cardData.id}
                    >
                        <Card
                            imgSrc={cardData.image}
                            label={cardData.title}
                            likesCount={cardData.likes}
                            

                        />
                    </SwiperSlide>

                ))
                
                }


            </Swiper>
            {/* <LeftArrow  className='arrow-left arrow'/>
      <RightArrow className='arrow-right arrow'/> */}

            {/* <div className='arrow-left arrow'> <img src='./left-arrow.png'></img>

      </div>
      <div className='arrow-right arrow'><img src='./right-arrow.png'></img>

      </div> */}

            <div id={`arrow-left-${navID}`} className='arrow-left arrow'> <LeftArrow />

            </div>
            <div id={`arrow-right-${navID}`} className='arrow-right arrow'> <RightArrow />

            </div>
        </div>

    )
}

export default index