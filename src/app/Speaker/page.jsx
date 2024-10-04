"use client"
import React from 'react'
import HyperText from '../../components/magicui/hyper-text'
import Image from "next/image"

export default function page() {

    const Dep = [
        { name: 'AMIT BHADANA', title: 'COMEDIAN AND WRITER', image: "/images/4.jpg" },
        { name: 'GAURAV KAPOOR', title: 'Stand Up Comedian', image: "/images/4.jpg" },
        { name: 'BARKHA SINGH', title: 'ACTRESS', image: "/images/4.jpg" },
        { name: 'AARUSH BHOLAS', title: 'YOUTUBER', image: "/images/4.jpg" },
        { name: 'AARUSH BHOLAS', title: 'YOUTUBER', image: "/images/4.jpg" },
        { name: 'AARUSH BHOLAS', title: 'YOUTUBER', image: "/images/4.jpg" },
    ];

    return (
        <div>
            <HyperText
                className="text-7xl my-24 font-bold text-black dark:text-white"
                text="PAST SPEAKERS"
            />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Dep.map((person, index) => (
                        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                            <div className="relative m-4">
                                <Image alt='' src={person.image} width={400} height={400} className='rounded-2xl mx-auto bg-black object-cover' />
                                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end">
                                    <h1 className='font-Queensides text-xl uppercase text-white font-extrabold mb-1 ml-4 z-[400]'>{person.name}</h1>
                                    <h2 className='font-Para uppercase font-extrabold text-xl text-violet-200 z-[400] ml-4 mb-2'>{person.title}</h2>
                                </div>
                                <style jsx>{`
                            .relative::after {
                              content: "";
                              position: absolute;
                              left: 0;
                              bottom: 0;
                              width: 100%;
                              height: 120px; /* Adjust the height of the shadow as needed */
                              background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
                            }
                          `}</style>
                            </div>
                        </div>

                    ))}
                </div>
            </div >
        </div>
    )
}
