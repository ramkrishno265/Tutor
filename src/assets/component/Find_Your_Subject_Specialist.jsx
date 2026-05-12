import { useEffect, useRef } from "react";

import math from "../icon/calculating.png";
import english from "../icon/calculating.png";
import science from "../icon/calculating.png";
import ict from "../icon/calculating.png";

function SEARCH_TUTORING_JOBS() {

    const sliderRef = useRef(null);

    const subjects = [
        { title: "MATHEMATIC", image: math, gradient: "from-red-100 to-red-200" },
        { title: "ENGLISH", image: english, gradient: "from-blue-100 to-cyan-200" },
        { title: "SCIENCE", image: science, gradient: "from-violet-100 to-fuchsia-200" },
        { title: "ICT", image: ict, gradient: "from-green-100 to-emerald-200" },
    ];

    // duplicate for seamless loop
    const loopSubjects = [...subjects, ...subjects];

    useEffect(() => {

        const slider = sliderRef.current;

        let position = 0;
        const speed = 0.5;

        const animate = () => {

            if (slider) {

                position -= speed;

                // ❌ no hard reset = no visible jump
                const totalWidth = slider.scrollWidth / 2;

                if (Math.abs(position) >= totalWidth) {
                    position += totalWidth; // smooth reset (not jump to 0)
                }

                slider.style.transform = `translateX(${position}px)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

    }, []);

    return (

        <div className="
            py-12
            bg-gray-50
            flex
            flex-col
            items-center
            overflow-hidden
        ">

            {/* TITLE */}
            <div className="text-center mb-10">

                <h1 className="text-4xl font-bold text-gray-800">
                    Find Your Subject Specialist
                </h1>

                <p className="text-gray-500 mt-2">
                    Find Our Specialist to reach your dream goal
                </p>

            </div>

            {/* 80% AREA */}
            <div className="w-[80%] overflow-hidden">

                <div
                    ref={sliderRef}
                    className="
                        flex
                        gap-6
                        w-max
                        will-change-transform
                    "
                >

                    {loopSubjects.map((subject, index) => (

                        <div
                            key={index}
                            className={`
                                min-w-[260px]
                                h-44
                                bg-gradient-to-r
                                ${subject.gradient}
                                rounded-3xl
                                flex
                                flex-col
                                justify-center
                                items-center
                                gap-4
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_12px_20px_-10px_rgba(0,0,0,0.25)]
                                flex-shrink-0
                            `}
                        >

                            <div className="
                                bg-white
                                rounded-full
                                p-5
                                shadow-md
                            ">
                                <img src={subject.image} className="w-8" />
                            </div>

                            <h1 className="text-lg font-bold text-gray-800">
                                {subject.title}
                            </h1>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default SEARCH_TUTORING_JOBS;