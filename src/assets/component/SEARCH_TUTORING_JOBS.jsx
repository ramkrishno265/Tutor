import teacher from "../image/teacher.png";
import Search from "../icon/magnifying-glass.png";
import Arrow from "../icon/right-arrow.png";

function SEARCH_TUTORING_JOBS() {
    return (
        <div className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-10 bg-gray-50">

            {/* Title */}
            <div className="text-center space-y-2 mb-10 md:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    SEARCH TUTORING JOBS
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-500">
                    Find your tuition jobs in your area
                </p>
            </div>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 max-w-6xl mx-auto">

                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="w-[220px] sm:w-[280px] md:w-[350px] lg:w-[400px] h-auto animate-float"
                        src={teacher}
                        alt="teacher"
                    />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">

                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 leading-snug">
                        Looking for interesting tuition jobs to excel your teaching experience?
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        If teaching jobs interest you, then you are on the right place.
                        tutorsheba.com often has 500+ open home tuition jobs that are genuine and 100% verified.
                        Whether you are starting your career as a tuition teacher or an expert in your field,
                        we can help you find your next big tuition job.
                    </p>

                    {/* Button */}
                    <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 sm:px-8 py-3 rounded-full cursor-pointer hover:scale-105 transition duration-300 mx-auto md:mx-0">

                        <img className="h-5 sm:h-6 w-auto" src={Search} alt="search" />

                        <span className="text-white text-sm sm:text-base md:text-lg font-bold">
                            SEARCH TUTORING
                        </span>

                        <img className="h-4 sm:h-5 w-auto" src={Arrow} alt="arrow" />

                    </button>

                </div>

            </div>

        </div>
    );
}

export default SEARCH_TUTORING_JOBS;