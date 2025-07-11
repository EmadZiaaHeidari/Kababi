import React from 'react';
import Img from "../../assets/images/cheese.png";
import Img2 from "../../assets/images/image-2.png";
import Img3 from "../../assets/images/image-3.png";
import StarRatings from 'react-star-ratings'
const servicesData = [
    {
        id: 1,
        img: Img,
        name: "چیزبرگر",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنام",
    },
    {
        id: 1,
        img: Img2,
        name: "مرغ با برنج",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنام",
    },
    {
        id: 1,
        img: Img3,
        name: "مرغ",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنام",
    },
]


const Services = () => {
    return (
        <div
        
        className="py-10">
            <div className="container">
                <div className="text-center mb-20 max-w-[400px] mx-auto">

                    <h1 className="text-3xl font-bold">خدمات ما</h1>

                </div>
                <div 
                data-aos="zoom-in-down" data-aos-offset="200"
                data-aos-easing="ease-in-sine" data-aos-duration="600"
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 
          place-items-center">
                    {
                        servicesData.map((service) => (
                            <div className='rounded-2xl bg-gray-800 hover:bg-yellow-500 hover:text-white
                            relative shadow-xl duration-high group max-w-[300px]
                            ' >
                                <div className='h-[100px]' >
                                    <img src={service.img}
                                        className='max-w-[200px] block mx-auto transform 
                                    -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300
                                    '
                                    />
                                </div>
                                <div className='p-4 text-center' >
                                    <div className='w-full' >
                                        <StarRatings
                                            rating={4}
                                            starRatedColor="yellow"
                                            isSelectable={false}
                                            starHoverColor="yellow"
                                            // starSelectingHoverColor
                                            starDimension="20px"
                                            changeRating={() => { }}
                                            numberOfStars={5}
                                            name="rating"
                                        />
                                    </div>

                                    <h1 className='text-xl font-bold text-white py-4' >{service.name}</h1>
                                    <p className='text-gray-200 hover:text-white text-sm line-clamp-2' >{service.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
}

export default Services;
