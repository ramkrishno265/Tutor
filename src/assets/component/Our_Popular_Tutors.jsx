import { useEffect, useRef } from "react";
import teacher from "../image/teacher.png";

function Our_Popular_Tutors() {

  const tutors = Array(10).fill(0);

  const sliderRef = useRef(null);

  // Premium Auto Scroll
  useEffect(() => {

    const slider = sliderRef.current;

    let scrollAmount = 0;

    const autoSlide = setInterval(() => {

      if (!slider) return;

      const cardWidth = 370;

      scrollAmount += cardWidth;

      // Reset Smoothly
      if (
        scrollAmount >=
        slider.scrollWidth - slider.clientWidth
      ) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

    }, 2500);

    return () => clearInterval(autoSlide);

  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-[#f8faff] to-[#eef3ff] py-14 sm:py-16 lg:py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center px-4">

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Our Popular Tutors
        </h1>

        <p className="text-gray-500 mt-3 text-sm sm:text-base md:text-lg">
          Learn from our most trusted & verified teachers
        </p>

      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="
          mt-14
          flex
          gap-7
          overflow-x-auto
          scroll-smooth
          scrollbar-hide
          px-4
          sm:px-6
          lg:px-10
        "
      >

        {tutors.map((_, index) => (

          <div
            key={index}
            className="
              min-w-[320px]
              max-w-[340px]
              bg-white
              rounded-[28px]
              p-5
              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              border border-gray-100
              relative
              flex-shrink-0
              transition-all
              duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]
              overflow-hidden
            "
          >

            {/* Premium Ribbon */}
            <div className="
              absolute
              top-5
              left-[-42px]
              rotate-[-45deg]
              bg-gradient-to-r
              from-violet-700
              to-fuchsia-600
              text-white
              text-[11px]
              font-semibold
              px-12
              py-[6px]
              tracking-wide
              shadow-md
            ">
              PREMIUM
            </div>

            {/* Tutor Image */}
            <div className="flex justify-center mt-6">

              <div className="
                p-[5px]
                rounded-full
                bg-gradient-to-r
                from-violet-500
                to-pink-500
              ">

                <img
                  src={teacher}
                  alt="Tutor"
                  className="
                    w-36
                    h-36
                    md:w-40
                    md:h-40
                    rounded-full
                    object-cover
                    border-[5px]
                    border-white
                  "
                />

              </div>

            </div>

            {/* Tutor Info */}
            <div className="text-center mt-6">

              <h2 className="text-2xl font-bold text-[#13254C]">
                Hafsa Mehrin Mahi
              </h2>

              <p className="text-gray-500 mt-2 text-sm md:text-base">
                North South University (NSU)
              </p>

              <h3 className="text-[#13254C] text-lg font-semibold mt-2">
                BBA (Professional)
              </h3>

              {/* Location */}
              <div className="flex justify-center mt-5">

                <button className="
                  bg-[#f4f7ff]
                  border
                  border-blue-200
                  text-blue-700
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-medium
                  hover:bg-blue-50
                  transition
                ">
                  📍 Dhaka
                </button>

              </div>

              {/* Button */}
              <button className="
                w-full
                mt-6
                bg-gradient-to-r
                from-violet-700
                to-fuchsia-600
                text-white
                py-3
                rounded-xl
                font-semibold
                text-[16px]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-lg
              ">
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>
    </div>
  );
}

export default Our_Popular_Tutors;