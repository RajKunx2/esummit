"use client"
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import HyperText from '../../components/magicui/hyper-text'

export default function page() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jk8jh3o', 'template_5l6fezz', form.current, 'v0txexV6zNsPVbDmP')
            .then((result) => {
                alert("Your Message has been Sent!");
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='mb-12'>
            <HyperText
                className="text-7xl mt-32 md:mt-24 font-bold text-black dark:text-white"
                text="CONTACT US"
            />
            <div className="h-auto md:flex md:h-[90vh] -mt-32 md:-mt-40">
                <div className="relative overflow-hidden md:flex w-1/2 justify-around items-center hidden mt-24">
                    <div>
                        <h1 className="text-black/80 text-6xl font-oswald font-Poppins uppercase">E-CELL DTU</h1>
                        <p className="text-black my-4 font-Montserrat">For any other query contact raj@ecelldtu.in</p>
                    </div>
                </div>
                <div className="flex md:w-1/2 justify-center py-10 items-center bg-white-80">
                    <form ref={form} onSubmit={sendEmail} className="bg-white-80 mt-32">
                        <InputField name="user_name" icon="user" placeholder="Full name" />
                        <InputField name="user_email" icon="email" placeholder="Email Address" />
                        <InputField name="message" icon="lock" placeholder="Query" />
                        <button onClick={sendEmail} className="w-full text-center py-2 mx-auto md:mx-0 my-4 text-white relative inline-flex items-center px-12 overflow-hidden text-lg font-medium border-2 border-blue-600 bg-blue-600 rounded-xl hover:text-black hover hover:border-black group hover:bg-gray-50">
                            <span className="absolute left-0 block w-full h-0 transition-all bg-white text-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="mx-auto relative font-OpenSans font-semibold">Submit</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const SvgIcon = ({ name }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        {/* Icon paths here */}
    </svg>
);

const InputField = ({ name, icon, placeholder, type = 'text' }) => (
    <div className="input-container mb-4">
        <SvgIcon name={icon} />
        <input
            className="input bg-white rounded-xl border-2 w-full border-slate-800 text-slate-10 py-2 pl-4 pr-24 font-Montserrat"
            type={type}
            placeholder={placeholder}
            name={name}
        />
    </div>
);