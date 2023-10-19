import  { Fragment, useContext, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { contextAPI } from "../MyContextApi";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Home = () => {
  const {
    addBill,
    cart,
    addGoal,
    addAccount,
    userAccount,
    income,
    totalPrice,
    balance,
  } = useContext(contextAPI);

  const [accountProgress, setAccountProgress] = useState("50");
  const budgetScale = cart.map((item, index) => {
    let width = "90%";
    let backgroundColor = "";
    let percentage = "0";
    if (item.amount >= 1 && item.amount <= 5000) {
      width = "20%";
      backgroundColor = "gray";
      percentage = "20";
    } else if (item.amount > 5000 && item.amount <= 10000) {
      width = "30%";
      backgroundColor = "blue";
      percentage = "30";
    } else if (item.amount > 10000 && item.amount <= 50000) {
      width = "50%";
      backgroundColor = "#ff8a65";
      percentage = "50";
    } else if (item.amount > 50000 && item.amount <= 100000) {
      width = "70%";
      backgroundColor = "#4d4d4d";
      percentage = "70";
    } else if (item.amount > 100000 && item.amount <= 150000) {
      width = "80%";
      backgroundColor = "#ff2b41";
      percentage = "80";
    } else if (item.amount > 150000) {
      width = "90%";
      backgroundColor = "#9ccc5";
      percentage = "90";
    }

    return (
      <div key={index}>
        <div className="mt-4">
          <div
            className={`w-4/5 h-2  flex items-center gap-x-2 justify-between bg-black/20 rounded-full`}
          >
            <div
              style={{
                width,
                height: "100%",
                backgroundColor,
              }}
            ></div>
            <p className="text-lg font-bold text-black/50 pl-[18%] absolute">
              {percentage}%
            </p>
          </div>
          <p className="text-black/40 font-semibold text-sm">{item.type}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={`w-full pt-[5%] overflow-hidden`}>
      <Modal />
      <div>
        <div className="flex justify-start w-full">
          <div className="pl-5">
            <h1 className="text-3xl pt-10  font-semibold">Overview</h1>
            <p className="font-normal">
              Get a quick grasp of your account and finances
            </p>
          </div>
        </div>

        <div className="w-full flex  justify-center gap-5 mt-10">
          <div className="w-[60%] shadow-black/20 shadow-lg rounded-2xl ">
            <div className="w-full flex justify-between h-full gap-2 ">
              <div className="flex flex-col w-3/5 mx-5">
                <div className="flex items-center justify-between pt-5 py-5">
                  <h2 className="font-normal text-3xl text-black/60">
                    Accounts
                  </h2>
                  <IoMdAddCircle
                    onClick={addAccount}
                    className="text-3xl text-black/50 cursor-pointer"
                  />
                </div>
                <div className="w-full flex flex-col text-lg font-semibold text-black/40 border-black/5 border shadow-black/20 shadow-lg  py-5 px-5 rounded-xl">
                  <div className="flex justify-between ">
                    {userAccount.length <= 0 ? (
                      <p> Account Unknown</p>
                    ) : (
                      userAccount.map((item, index) => (
                        <h1 key={index}>{item.username3}</h1>
                      ))
                    )}
                    <div />
                    <div className="flex gap-2">
                      <p className="cursor-pointer">
                        <AiOutlineEdit onClick={addAccount} />
                      </p>
                      <p>
                        <Link to="/dashboard/settings">
                          <FiSettings />
                        </Link>
                      </p>
                    </div>
                  </div>
                  <p className="w-full flex justify-center mt-5 text-xl">
                    Balance
                  </p>
                  <p className="w-full flex justify-center font-bold text-3xl text-[#3bca3b]">
                    ₦{balance}
                  </p>
                </div>
                <div className="my-5 flex justify-center">
                  <div className="w-4/5 h-2 rounded-full  bg-black/10">
                    <div
                      style={{
                        width: `${accountProgress}%`,
                        height: "100%",
                        backgroundColor: "blue",
                      }}
                    ></div>
                  </div>
                </div>
                <div className="flex justify-between px-5 pb-5 ">
                  <p className="text-gray-400">Monthly budget limit</p>
                  <p className="text-black/70"> ₦50,000/₦100,000</p>
                </div>
              </div>
              <p className="border-r-2  border-black/30 rounded-full h-[80%]  mt-10"></p>
              <div className="w-[30%] flex justify-end text-end pr-10 mt-[8%]">
                <div>
                  <div className="mb-[15%]">
                    <p className="text-gray-400 text-sm">Current balance</p>
                    <p className="text-[#5a5afc] font-semibold text-2xl">
                      ₦{balance}
                    </p>
                  </div>
                  <div className="mb-[15%]">
                    <p className="text-gray-400 text-sm">Income</p>

                    <div className="text-[#3bca3b] text-lg font-semibold">
                      {income === "" ? (
                        <p className="text-[red] font-semibold text-lg"> ₦0</p>
                      ) : (
                        ""
                      )}
                      <div>
                        {userAccount.map((item, index) => (
                          <div key={index}>₦{item.income}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mb-[10%]">
                    <p className="text-gray-400 text-sm">Expenses</p>
                    {/* <p className="text-[red] font-semibold text-lg">
                      ₦{totalPrice}
                    </p> */}
                    {!totalPrice ? (
                      <p className="text-[red] font-semibold text-lg"> ₦0</p>
                    ) : (
                      <p className="text-[red] font-semibold text-lg">
                        ₦{totalPrice}
                      </p>
                    )}
                  </div>
                  <p className="font-semibold text-black/70">Deactivate</p>
                  <p className="text-gray-400">Account</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4">
            <div className="w-full h-[40%] pt-5 px-5 shadow-black/20 shadow-lg  rounded-2xl">
              <h2 className="font-semibold text-xl text-black/60">
                Upcoming Bills
              </h2>
              <div className="w-full flex justify-center">
                <button
                  onClick={addBill}
                  className=" mt-7 bg-[blue] w-2/5 rounded-lg py-1 text-white flex justify-center items-center text-sm gap-1"
                >
                  Add Bill
                </button>
              </div>
            </div>
            <div className="w-full h-[40%] mt-[26%] px-5 shadow-black/20 shadow-lg rounded-2xl">
              <h2 className="font-semibold text-xl text-black/60 pt-5">
                Goals
              </h2>
              <div className="w-full flex justify-center">
                <button
                  onClick={addGoal}
                  className="mt-7 bg-[blue] w-2/5 rounded-lg py-1 text-white flex justify-center items-center text-sm gap-1"
                >
                  Add Goals
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 mt-[7%] gap-5 flex justify-center" id="history">
          <div className="w-[60%] shadow-black/20 border border-black/5 shadow-lg ml-5 rounded-2xl">
            <h1 className="mt-5 pl-10 pb-3 text-xl font-semibold text-black/60">
              Recent Transaction History
            </h1>
            <div className="pb-7">
              <ul className="grid grid-cols-4 gap-10 text-center text-black/50 font-normal">
                <li>Receiver</li>
                <li>Type</li>
                <li>Date</li>
                <li>Amount</li>
              </ul>
              {cart.map((item, index) => {
                return (
                  <div key={index}>
                    <ul className="grid grid-cols-4 text-center gap-10 text-sm mt-3 text-black/50 font-semibold">
                      <li className="text-black">{item.receiver}</li>
                      <li className="font-normal">{item.type}</li>
                      <li className="font-normal">{item.date}</li>
                      <li className="text-black/70 font-bold">
                        ₦{item.amount}
                      </li>
                    </ul>
                  </div>
                );
              })}
              {cart.length <= 0 && (
                <h1 className="flex justify-center h-full mt-5  text-black/30 font-semibold">
                  History is empty
                </h1>
              )}
              {cart.length > 0 && (
                <div className="w-full flex gap-3 justify-center mt-10 items-center">
                  <p className="text-black/50">Total Budget Amount is: </p>
                  <p className="text-[blue] font-bold text-lg">
                    ₦{totalPrice.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-[27%]  border border-black/5 pl-2 pr-2 shadow-black/20 shadow-lg rounded-2xl">
            <h1 className="mt-5 font-bold text-lg text-black/60 ">Budget</h1>
            {budgetScale}
            {cart.length <= 0 && (
              <Fragment>
                <div className="flex justify-center h-full mt-5  text-black/30 font-semibold">
                  <h1 className=" text-center w-3/4 text-sm">
                    Budget is empty, Click Add Bill to Make a Budget
                  </h1>
                </div>{" "}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
