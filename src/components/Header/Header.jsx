import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AdminLoginBtn from "./AdminLogin/AdminLoginBtn";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <header className="shadow z-50 top-0">
      {/* Top Section with Logo, School Name, and Admin Login */}
      <div className="flex flex-col gap-5 md:flex-row w-full bg-purple-700 p-4 pl-9 pr-9 shadow-lg">
        <div className="mx-auto md:my-auto">
          <Link to="/">
            <img
              src="src/Pictures/Logo.jpg"
              className="h-24 w-24 rounded-lg mt-5"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex-col text-center space-y-2">
          <h1 className="text-slate-200 text-base md:text-md lg:text-lg xl:text-2xl font-bold uppercase">
            Holy Name Senior Secondary School, Sivasagar
          </h1>
          <h2 className="text-slate-300 text-base lg:text-md font-bold">
            হলী নেম হাই চেকেণ্ডাৰী স্থূল, সিৱসাগৰ
          </h2>
          <p className="text-white text-sm md:text-lg">
            Cherekapar, Dist:- Sivasagar, Assam-785640
          </p>
          <p className="text-white text-sm md:text-lg">Ph-6901055733</p>
        </div>
        <div className="mx-auto md:my-auto mb-5">
          <AdminLoginBtn />
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="main-nav bg-slate-300 border-gray-200 px-4 lg:px-6 py-4 top-0 sticky">
        <div className="p-2 flex justify-between items-center mx-auto max-w-screen-xl">
          {/* <div className="hidden xl:block text-bold right-4 float-right pr-4 font-medium text-sm">
            <p>Phone: +91 8064356687, +91 6901055733</p>
          </div> */}
          <div
            className={`${
              showMediaIcons ? "block" : "hidden"
            } mx-auto w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/principal"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Principal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Admission
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faculty"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Faculty
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/notice"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Notice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/complaints"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Suggestions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block">
            <button
              onClick={() => setShowMediaIcons(!showMediaIcons)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
            >
              <GiHamburgerMenu size={24} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
