import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, Links } from "react-router-dom";
const Navbar = () => {
  const isCoursePageList = location.pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  console.log(user);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCoursePageList ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        src={assets.logo}
        alt="navbarImage"
        className="w-28 lg:w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        )}
      </div>
      {/* for phone screens  */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-2">
          {user && (
            <>
              <button className="px-3 py-2">Become Educator</button>
              <span>|</span>
              <Link to={"/my-enrollments"} className="px-4 py-2">
                My Enrollments
              </Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button onClick={() => openSignIn()} className="p-2">
              <img src={assets.user_icon} alt="User Icon" className="w-8 h-8" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
