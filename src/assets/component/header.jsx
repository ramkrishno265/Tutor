import logo from "../image/logo.png";
import shop from "../icon/store.png"

function Header() {
    return (
        <div className="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 ">
            <div className="flex justify-between items-center px-8 py-4 mx-[265px]">

                {/* Logo */}
                <div>
                    <img className="w-32 h-auto" src={logo} alt="logo" />
                </div>

                {/* Menu */}
                <div className="flex items-center gap-10">

                    <ul className="flex gap-8 text-white font-medium items-center">
                        <li className="relative group hover:-translate-y-1 translate-all duration-300 cursor-pointer">
                            TUITION JOB

                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group hover:-translate-y-1 translate-all duration-300 cursor-pointer">
                            PREMIUM TUTORS

                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <li className="relative group hover:-translate-y-1 translate-all duration-300 cursor-pointer">
                            TUTOR REQUEST

                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                        <div className="flex items-center gap-2 hover:cursor-pointer hover:-translate-y-1 translate-all duration-300">
                            <img 
                            className="h-8 w-auto"
                            src={shop} alt="" />
                            <li>SHOP</li>
                        </div>
                        
                        
                    </ul>

                    {/* Buttons */}
                    <div className="flex gap-4">
                        <button className="border text-white px-4 py-2 rounded-lg hover:-translate-y-1 translate-all duration-300 hover:cursor-pointer ">
                            Register
                        </button>
                        <button className="border text-white px-4 py-2 rounded-lg hover:-translate-y-1 translate-all duration-300 hover:cursor-pointer">
                            Login
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header;