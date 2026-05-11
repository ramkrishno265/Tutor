import location from "../icon/pin.png";
import Search from "../icon/magnifying-glass.png";
import Arrow from "../icon/right-arrow.png";
import HeroImage from "../image/Hero.png";
import backgroundImage from "../image/backgroundimage.jpg";

function Hero() {
  return (
    <div
      className="w-full overflow-x-hidden bg-cover bg-center py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-12">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center lg:text-left">

          {/* Heading */}
          <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[60px] text-purple-700 leading-tight font-bold">

            Best <span className="text-blue-500">Tutoring Platform</span>
            <br />
            for Home & Online Tuitions

          </h1>

          {/* Location */}
          <div className="flex items-center justify-center lg:justify-start gap-2">

            <img
              className="h-6 sm:h-7 md:h-8 w-auto"
              src={location}
              alt="location"
            />

            <h3 className="text-[18px] sm:text-[22px] md:text-[26px] text-gray-500">
              Find the Right Tutor in Your Area
            </h3>

          </div>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">

            <div className="relative group flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 w-fit px-6 sm:px-8 py-3 rounded-full cursor-pointer overflow-hidden hover:scale-105 duration-300">

              <img
                className="h-6 sm:h-7 md:h-8 w-auto relative z-10"
                src={Search}
                alt="search"
              />

              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] text-white font-bold relative z-10">
                FIND A TUTOR
              </h3>

              <img
                className="h-5 sm:h-6 w-auto relative z-10"
                src={Arrow}
                alt="arrow"
              />

            </div>
          </div>

          {/* Divisional Tutors */}
          <div className="mt-8 space-y-4">

            <h3 className="font-semibold text-gray-500 text-[16px] sm:text-[18px] text-center lg:text-left">
              Divisional Tutors:
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">

              <div className="bg-white min-w-[120px] sm:min-w-[150px] h-[40px] px-6 flex items-center justify-center rounded-full shadow-sm text-gray-600">
                Dhaka
              </div>

              <div className="bg-white min-w-[120px] sm:min-w-[150px] h-[40px] px-6 flex items-center justify-center rounded-full shadow-sm text-gray-600">
                Chittagong
              </div>

              <div className="bg-white min-w-[120px] sm:min-w-[150px] h-[40px] px-6 flex items-center justify-center rounded-full shadow-sm text-gray-600">
                Sylhet
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center">

          <img
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-[500px] h-auto animate-float"
            src={HeroImage}
            alt="Hero"
          />

        </div>

      </div>
    </div>
  );
}

export default Hero;