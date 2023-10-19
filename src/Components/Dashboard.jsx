import { useContext } from "react";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotificationsOff } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { contextAPI } from "./MyContextApi";
import { MdDashboardCustomize } from "react-icons/md";
import { MdInsights } from "react-icons/md";
import { AiTwotoneSetting, AiOutlineTransaction } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Home } from "./Pages/Home";

export const Dashboard = () => {
  const { userAccount } = useContext(contextAPI);
  return (
    <div className="w-full h-auto">
      <div className="flex justify-between items-center fixed w-full z-40 px-10 py-5 text-white bg-[#6666d3]">
        <h1 className="font-bold text-2xl">SavvySaver</h1>
        <form className="w-full flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-2/5 rounded-xl pl-4 py-1 outline-none text-black/60"
          />
          <button className="ml-[-3%] text-black">
            <CiSearch />
          </button>
        </form>
        <ul className="flex w-[15%] gap-3 text-lg">
          <li>
            <AiFillMessage />
          </li>
          <li>
            <IoMdNotificationsOff />
          </li>
          <li>
            <FaUserCircle />
          </li>
          <li className="text-white text-xs ">
            {userAccount.map((item, index) => (
              <p key={index}>{item.username3}</p>
            ))}
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between">
        <div className="h-full w-[17%]  fixed bg-[#ebf6fa] flex justify-center">
          <div className="flex flex-col">
            <ul className="flex flex-col h-2/4 pt-[100px] font-semibold text-gray-500 text-md gap-10">
              <Link to="/dashboard">
                <li className="flex items-center gap-3">
                  <MdDashboardCustomize className="text-xl" /> Dashboard
                </li>
              </Link>
              <Link to="/dashboard/transaction">
                {" "}
                <li className="flex items-center gap-3">
                  <AiOutlineTransaction className="text-xl text-gray-500" />
                  Transactions
                </li>
              </Link>
              <Link to="/dashboard/insight">
                {" "}
                <li className="flex items-center gap-3">
                  <MdInsights className="text-xl" />
                  Insights
                </li>
              </Link>
              <Link to="/dashboard/settings">
                <li className="flex items-center gap-3">
                  <AiTwotoneSetting className="text-xl" />
                  Settings
                </li>
              </Link>
              <Link to="/dashboard/contact">
                <li className="flex items-center gap-3">
                  <BsFillTelephoneFill />
                  Contact Us
                </li>
              </Link>
            </ul>
            <button className="mt-[200px] border-[#7878df] border rounded-md py-1 text-[#7878df] font-semibold">
              Log Out
            </button>
          </div>
        </div>
        <div className="w-[83%] ml-auto">
          <Home />
        </div>
      </div>
    </div>
  );
};
