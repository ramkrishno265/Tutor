import logo from "../image/logo.png";
import shop from "../icon/store.png";
import menu from "../icon/list.png";

function Header() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-purple-500 to-purple-900 w-full overflow-x-hidden">

      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-1 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4 ">
          <div className="bg-white p-2 rounded rounded-full">
            <img
              className="w-24 sm:w-28 md:w-14 h-auto"
              src={logo}
              alt="logo"
            />

          </div>
          <h1 className="text-2xl font-bold text-white">STUDY DHAR</h1>
        </div>


        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">

          {/* Menu Items */}
          <ul className="flex gap-8 text-white font-medium items-center text-[15px] xl:text-[16px]">

            <li className="relative group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              TUITION JOB

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              PREMIUM TUTORS

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <li className="relative group hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              TUTOR REQUEST

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </li>

            <div className="flex items-center gap-2 hover:cursor-pointer hover:-translate-y-1 transition-all duration-300">
              <img
                className="h-6 xl:h-8 w-auto"
                src={shop}
                alt="shop"
              />

              <li>SHOP</li>
            </div>

          </ul>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="border border-white text-white px-4 py-2 rounded-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white hover:text-purple-700">
              Register
            </button>

            <button className="border border-white text-white px-4 py-2 rounded-lg hover:-translate-y-1 transition-all duration-300 hover:bg-white hover:text-purple-700">
              Login
            </button>

          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <img
            className="w-8 h-8 cursor-pointer"
            src={menu}
            alt="menu"
          />
        </div>

      </div>
    </div>
  );
}

export default Header;