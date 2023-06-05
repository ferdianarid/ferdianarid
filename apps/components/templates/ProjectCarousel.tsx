import { Fragment } from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation } from "swiper"
import { SlideBreakpoint } from "apps/animations/SlideBreakpoint"
import { AllProject } from "@data/recentProject"
import ProjectCard from "@components/organism/Cards/ProjectCard"
import "swiper/css"
import "swiper/css/navigation"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const ProjectCarousel = () => {
    const swiper = useSwiper()
    return (
        <Fragment>
            <Swiper
                spaceBetween={15}
                grabCursor={true}
                breakpoints={SlideBreakpoint}
                modules={[Navigation]}
                className="mySwiper"
                autoplay={{ delay: 2000 }}
                loop={true}
                navigation={{
                    nextEl: ".next-button",
                    prevEl: ".prev-button"
                }}
            >
                <button onClick={() => swiper?.slidePrev()} className="absolute border-none top-1/2 z-50 left-0 flex items-center justify-center -mt-10 phone:-mt-20 w-12 h-12 bg-neutral-20 rounded-full prev-button">
                    <FaChevronLeft size={20} />
                </button>
                {AllProject.map((item: any) => (
                    <SwiperSlide key={item.id}>
                        <ProjectCard id={item.id} fileImage={item.fileImage} title={item.title} description={item.description} />
                    </SwiperSlide>
                ))}
                <button onClick={() => swiper?.slideNext()} className="absolute border-none top-1/2 z-50 right-0 flex items-center justify-center -mt-10 phone:-mt-20 w-12 h-12 bg-neutral-20 rounded-full next-button">
                    <FaChevronRight size={20} />
                </button>
            </Swiper>
        </Fragment>
    )
}

export default ProjectCarousel