import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import { auth } from "../../firebaseAuth";
import pslogo from "../../assets/pslogo.png";
import { AvatarWithUserDropdown } from "./AvatarWithDropDown";

const PSBook = () => {
  const [user] = useAuthState(auth);
  const pageLinks = [
    "Jobs",
    "Inventory",
    "Delivery",
    "Billing",
    "Manufacturing",
    "Machine-List",
    "Customers",
    "Employees",
    "Reports",
  ];

  return (
    <div className="flex">
      {/* Left Panel */}
      <div className="bg-gray-200 0 h-screen w-1/4 max-w-[300px] pt-6 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">PS BOOK</h2>
          {pageLinks.map((pageLink, index) => (
            <NavLink
              to={`/psbook/${pageLink.toLowerCase()}`}
              key={index}
              className={({ isActive }) => {
                return isActive
                  ? "block tracking-wider w-full text-md bg-blue-300 text-black text-center py-4 mb-2 border-r-4 border-indigo-500 transition-all duration-500"
                  : "block tracking-wider w-full text-md bg-white text-black text-center py-4 mb-2 border-r-4 border-indigo-500 transition-all duration-500";
              }}
            >
              {pageLink.toUpperCase()}
            </NavLink>
          ))}
        </div>
        {user && (
          <div className="flex flex-col items-center">
            <AvatarWithUserDropdown
              userPhotoURL={user.photoURL}
              userName={user.displayName}
            ></AvatarWithUserDropdown>
            <img className="max-w-[180px]" src={pslogo}></img>
          </div>
        )}
      </div>
      {/* Right Outlet */}
      <div className="flex-1 p-8">
        <div className="bg-white p-4 shadow-md rounded-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PSBook;
