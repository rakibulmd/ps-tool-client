import { NavLink, Outlet, useNavigate } from "react-router-dom";

const PSBook = () => {
  const navigate = useNavigate();
  const pageLinks = [
    "Jobs",
    "Customers",
    "Inventory",
    "Delivery",
    "Billing",
    "Manufacturing",
    "Employees",
    "Reports",
  ];
  return (
    <div className="flex">
      {/* Left Panel */}
      <div className="bg-gray-200 0 h-screen w-1/4 max-w-[300px] pt-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Lorem Ipsum</h2>
        {pageLinks.map((pageLink, index) => (
          <NavLink
            to={`/psbook/${pageLink.toLowerCase()}`}
            key={index}
            className={({ isActive }) => {
              return isActive
                ? "block w-full text-left bg-blue-300 text-black text-center py-5 mb-2 border-r-4 border-indigo-500"
                : "block w-full text-left bg-white text-black text-center py-5 mb-2 border-r-4 border-indigo-500";
            }}
          >
            {pageLink.toUpperCase()}
          </NavLink>
        ))}
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
