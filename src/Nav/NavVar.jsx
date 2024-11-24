import { NavLink } from "react-router-dom";
import "../Style_CSS/Style.css";
import { BiSolidBuildingHouse } from "react-icons/bi";

const NavVar = () => {
  return (
    <div className="nav-container w-[200px] h-[400px] shadow_box p-3 bg-transparent flex flex-col gap-3 nvaRes">
      <div className="text-center mb-2 inSide_box flex flex-row items-center justify-between sm:flex-col sm:items-center sm:gap-1 dark:bg-orange-300">
        <h2 className="text-yellow-50 text-[19px] font-bold relative sm:text-[16px]">Project White House</h2>
        <BiSolidBuildingHouse className="home mt-[37px] text-white absolute sm:ml-0 sm:mt-0 sm:text-[24px] sm:relative sm:mr-[8px]" />
      </div>
      <hr className="w-full bg-slate-200" />
      <div className="navDiv flex flex-col gap-3 inSide_box p-2 sm:p-1 sm:gap-2 dark:bg-orange-300">
        <NavLink to="/dashboard" className="text-white hover:text-yellow-500 sm:text-[14px]">
          Dashboard
        </NavLink>
        <NavLink to="/coustomer" className="text-white hover:text-yellow-500 sm:text-[14px]">
          Add Properties
        </NavLink>
        <NavLink to="/staistic" className="text-white hover:text-yellow-500 sm:text-[14px]">
          Statistic
        </NavLink>
        <NavLink to="/allpropaties" className="text-white hover:text-yellow-500 sm:text-[14px]">
          All Properties
        </NavLink>
      </div>
      <div className="inSide_box mt-12 p-2 text-white sm:mt-8 sm:p-1 dark:bg-orange-300">
        <h1 className="sm:text-[14px]">Authentication</h1>
        <button className="sm:text-[14px]">Logout</button>
      </div>
    </div>
  );
};

export default NavVar;
