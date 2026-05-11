import teacher from "../image/teacher.png"
import Search from "../icon/magnifying-glass.png"
import Arrow from "../icon/right-arrow.png"

function SEARCH_TUTORING_JOBS() {
    return (
        <div className="py-16 px-10 bg-gray-50">

            {/* Title Section */}
            <div className="text-center space-y-2 mb-12">
                <h1 className="text-[38px] font-bold text-gray-800">
                    SEARCH TUTORING JOBS
                </h1>
                <p className="text-[18px] text-gray-500">
                    Find your tuition jobs in your area
                </p>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">

                {/* Image */}
                <div>
                    <img
                        className="h-[350px] w-auto animate-float"
                        src={teacher}
                        alt=""
                    />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-[500px] space-y-5">

                    <h1 className="text-[24px] font-semibold text-gray-800 leading-snug">
                        Looking for interesting tuition jobs to excel your teaching experience?
                    </h1>

                    <p className="text-gray-600 leading-relaxed">
                        If teaching jobs interest you, then you are on the right place.
                        tutorsheba.com often has 500+ open home tuition jobs that are genuine and 100% verified.
                        Whether you are starting your career as a tuition teacher or an expert in your field,
                        we can help you find your next big tuition job.
                    </p>

                    {/* Button */}
                    <div className="relative group flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 w-fit px-8 py-3 rounded-full cursor-pointer overflow-hidden hover:scale-105 transition">

                        <img className="h-7 w-auto relative z-10" src={Search} alt="" />

                        <h3 className="text-[18px] text-white font-bold relative z-10">
                            FIND A TUTOR
                        </h3>

                        <img className="h-5 w-auto relative z-10" src={Arrow} alt="" />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default SEARCH_TUTORING_JOBS;