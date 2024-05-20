import React from 'react'
import aboutImage from '../../assets/images/aboutImg.jpg'
import aboutCard from '../../assets/images/aboutImage.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="flex  justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/* about image */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                        <img className='w-[75%] rounded' src={aboutImage} alt="" />
                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[0%]">
                            <img className='rounded' src={aboutCard} alt="" />
                        </div>
                    </div>

                    {/* about content */}
                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className='heading'>Proud to be one of the nations best</h2>
                        <p className='text__para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit
                            beatae explicabo, officia rerum, perferendis.officia rerum, maxime modi nisi adipisci! </p>

                            <p className='text__para mt-[30px]'> Amet magnam incidunt nulla pariatur quidem in 
                            beatae explicabo, officia rerum, ipsam unde maxime modi nisi adipisci.</p>

                            <Link to="/">
                                <button className='btn'>Learn More</button>
                            </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About