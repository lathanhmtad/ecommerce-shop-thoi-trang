import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../home_section_card/HomeSectionCard'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

const HomeSectionCarousel = ({data, sectionName}) => {
    const carouselRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    }

    const slideNext = () => carouselRef.current.slideNext()
    const slidePrev = () => carouselRef.current.slidePrev()

    const syncActiveIndex = ({ item }) => setActiveIndex(item)

    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <HomeSectionCard index={item} />)
    return (
        <div
            className='border border-black'
        >
            <h2 className='text-2xl font-extrabold text-gray-800 py-5 text-center'>{sectionName}</h2>
            <div
                className='relative p-5 border'
            >
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                />

                {activeIndex !== items.length - 5 &&
                    <Button variant='contained'
                        onClick={slideNext}
                        className='z-50 bg-white' sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: "translateX(50%) rotate(90deg)", bgcolor: 'white' }}
                        color='primary'
                        aria-label='next'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
                    </Button>
                }

                {activeIndex !== 0 &&
                    <Button variant='contained'
                        onClick={slidePrev}
                        className='z-50 bg-white' sx={{ position: 'absolute', top: '8rem', left: '-4rem', transform: "translateX(50%) rotate(-90deg)", bgcolor: 'white' }}
                        color='primary'
                        aria-label='prev'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: 'black' }} />
                    </Button>
                }
            </div>
        </div>
    )
}

export default HomeSectionCarousel