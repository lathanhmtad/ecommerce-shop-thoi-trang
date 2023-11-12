import React from 'react'
import MainCarousel from '../../components/home_carousel/MainCarousel'
import HomeSectionCarousel from '../../components/home_section_carousel/HomeSectionCarousel'

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className='space-y-20 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={""} sectionName={"Đồng phục công ty"}/>
                <HomeSectionCarousel data={""} sectionName={"Thời trang nam nữ"}/>
                <HomeSectionCarousel data={""} sectionName={"Thời trang đồ Đông Hoodie & Sweetshirt"}/>
                <HomeSectionCarousel data={""} sectionName={"Thời trang nam nữ"}/>
                <HomeSectionCarousel data={""} sectionName={"Đồ bộ đẹp"}/>
            </div>
        </div>
    )
}

export default HomePage