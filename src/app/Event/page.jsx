"use client";
import React from "react";
import { PinContainer } from "../../components/ui/3d-pin";

const cardsData = [
    {
        title: "Aceternity UI",
        href: "https://www.ecelldtu.in/",
        description: "Customizable Tailwind CSS and Framer Motion Components.",
        urlname: "www.ecelldtu.in"
    },
    {
        title: "Card 2",
        href: "https://www.ecelldtu.in/",
        description: "Description for Card 2.",
        urlname: "www.ecelldtu.in"
    },
    {
        title: "Card 3",
        href: "https://www.ecelldtu.in/",
        description: "Description for Card 3.",
        urlname: "www.ecelldtu.in"
    },
    {
        title: "Card 4",
        href: "https://www.ecelldtu.in/",
        description: "Description for Card 4.",
        urlname: "www.ecelldtu.in"
    },
];

export default function AnimatedPinDemo() {
    return (
        <div className="h-auto w-full flex flex-col items-center justify-center">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl mt-12 md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                Events
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
                {cardsData.map((card, index) => (
                    <PinContainer
                        key={index}
                        title={card.urlname}
                        href={card.href}
                    >
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                                {card.title}
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    {card.description}
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                ))}
            </div>
        </div>
    );
}
