import location from "../icon/pin.png"
import Search from "../icon/magnifying-glass.png"
import Arrow from "../icon/right-arrow.png"
import HeroImage from "../image/Hero.png"
import backgroundImage from "../image/backgroundimage.jpg"

function Hero() {
    return (
        <div className="flex justify-between items-center bg-red-200 py-8 px-[265px] bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >

            {/* LEFT SIDE */}
            <div className="space-y-6">

                <h1 className="text-[50px] text-purple-700 leading-tight font-bold">
                    Best <span className="text-blue-500">Tutoring Platform</span> <br />
                    for Home & Online Tuitions
                </h1>

                <div className="flex items-center gap-2 ">
                    <img className="h-8 w-auto" src={location} alt="" />
                    <h3 className="text-[25px] text-gray-500">
                        Find the Right Tutor in Your Area
                    </h3>
                </div>




                <div className="relative group flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 w-fit px-8 py-3 rounded-full cursor-pointer overflow-hidden">

                    <img className="h-8 w-auto relative z-10" src={Search} alt="" />

                    <h3 className="text-[20px] text-white font-bold relative z-10">
                        FIND A TUTOR
                    </h3>

                    <img className="h-6 w-auto relative z-10" src={Arrow} alt="" />

                </div>

                <div className="mt-10 space-y-2">
                    <h3 className="font-semibold text-gray-500">Divisional Tutors:</h3>
                    <div className="flex gap-4 text-gray-500">
                        <div className="bg-white w-[200px] h-[30px] flex items-center justify-center rounded-full">
                            Dhaka
                        </div>

                        <div className="bg-white w-[200px] h-[30px] flex items-center justify-center rounded-full">
                            Dhaka
                        </div>

                        <div className="bg-white w-[200px] h-[30px] flex items-center justify-center rounded-full">
                            Dhaka
                        </div>
                    </div>
                </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div>
                <img
                    className="h-[320px] w-auto animate-float"
                    src={HeroImage}
                    alt=""
                />
            </div>

        </div>
    )
}

export default Hero;