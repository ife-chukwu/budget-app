import React, { useContext, useState } from "react";
import { contextAPI } from "../MyContextApi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Modal = () => {
  const {
    addYourBill,
    closeAddBill,
    handleBillsChange,
    preventDefault,
    receiver,
    type,
    date,
    amount,
    addYourGoal,
    addYourAccount,
    handleSubmit3,
    handleInput3,
    stateError,
    state3,
    username3,
    email3,
    password3,
    income,
  } = useContext(contextAPI);

  const [revealPassword, setRevealPassword] = useState(false);

  const showPassword = () => {
    setRevealPassword((prev) => !prev);
  };

  return (
    <div className="w-full">
      {addYourBill || addYourGoal || addYourAccount ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="flex justify-center w-full h-full bg-black/70 backdrop-blur-sm">
            <div
              className={`bg-[#f7f1f1] mt-40 w-[50%] ${
                addYourAccount ? "h-[70%] " : "h-[50%]"
              } opacity-100 -z-40 flex justify-center items-center rounded-xl shadow-black/50 shadow-lg`}
            >
              <div
                className="absolute -mt-[30%] z-40 ml-[90%] cursor-pointer"
                onClick={closeAddBill}
              >
                <HiOutlineXMark className="text-2xl text-white hover:scale-150 transition duration-500 hover:text-[#7474e6]" />
              </div>
              {addYourBill ? (
                <form
                  onSubmit={preventDefault}
                  className="grid grid-cols-2 gap-x-10 gap-y-5 w-full mx-10 font-extralight"
                >
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs">Budget Receiver</label>
                    <input
                      type="text"
                      name="receiver"
                      placeholder="Shoprite"
                      onChange={handleBillsChange}
                      className=" px-2 rounded-md outline-none text-black/60 
                    shadow-black/20 shadow-sm py-3"
                      value={receiver}
                    />
                  </div>
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs">Budget Type</label>
                    <input
                      type="text"
                      name="type"
                      placeholder="Shopping / food / sport / gift"
                      onChange={handleBillsChange}
                      className="px-2 rounded-md outline-none text-black/60 shadow-black/20 shadow-sm py-3"
                      value={type}
                    />
                  </div>{" "}
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs">Budget Date</label>
                    <input
                      type="date"
                      name="date"
                      placeholder="5/4/2023"
                      onChange={handleBillsChange}
                      className="px-2 rounded-md outline-none text-black/60 shadow-black/20 shadow-sm py-3"
                      value={date}
                    />
                  </div>
                  <div className="gap-1 text-black/50  flex flex-col">
                    <label className="pl-1 text-xs"> Budget Amount</label>
                    <input
                      type="number"
                      name="amount"
                      placeholder="4,000"
                      onChange={handleBillsChange}
                      className="px-2 rounded-md outline-none text-black/60 
                    shadow-black/20 shadow-sm py-3"
                      value={amount}
                    />
                  </div>
                  <button className="w-3/4 bg-[#8686fd] flex justify-center ml-[75%] mt-5 py-2 rounded-lg text-white font-semibold hover:bg-[#6d6dfc] transition-all duration-300">
                    Add Bill
                  </button>
                </form>
              ) : (
                ""
              )}

              {addYourGoal ? (
                <form className="bg-white py-10 px-20">
                  <h1>Your mama </h1>
                </form>
              ) : (
                ""
              )}
              {addYourAccount ? (
                <div className="w-full h-full">
                  <h1 className="w-full flex justify-center font-semibold py-5 text-black/50 text-xl">
                    Add Account Here
                  </h1>
                  <div className="flex justify-center w-full">
                    <form
                      className="flex flex-col gap-5 text-black w-3/5"
                      onSubmit={handleSubmit3}
                    >
                      <input
                        type="text"
                        placeholder="Username"
                        name="username3"
                        onChange={handleInput3}
                        value={username3}
                        className="border border-black/20  py-3 rounded-md px-2 outline-none"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email3"
                        onChange={handleInput3}
                        value={email3}
                        className="border border-black/20  py-3 rounded-md px-2 outline-none"
                      />
                      <div className="border bg-white flex border-black/20 py-3 rounded-md pl-2 outline-none">
                        <input
                          type={revealPassword ? "text" : "password"}
                          placeholder="Password"
                          name="password3"
                          onChange={handleInput3}
                          value={password3}
                          className="w-4/5 outline-none"
                        />
                        <p
                          className="pl-[5%] text-black/60 cursor-pointer bg-transparent"
                          onClick={showPassword}
                        >
                          Show
                        </p>
                      </div>
                      <input
                        type="number"
                        placeholder="Monthly Income"
                        name="income"
                        value={income}
                        onChange={handleInput3}
                        className="border border-black/20  py-3 rounded-md px-2 outline-none"
                      />

                      <button
                        type="submit border"
                        className="border border-[#6666d3] font-bold text-xl text-[#6666d3] py-2 rounded-md px-5 outline-none"
                      >
                        Submit
                      </button>
                      <p className="text-[red]">{stateError}</p>
                    </form>
                  </div>
                </div>
              ) : (
                //   <div className="flex justify-center mt-2">
                //     <div className="w-2/5 flex gap-2">
                //       <p>Already have an account? </p>
                //       <Link to="/login">
                //         {" "}
                //         <button className="text-[blue]">Login</button>
                //       </Link>
                //     </div>
                //   </div>
                //   <p className="flex justify-center text-[red] pt-4">{errorMsg}</p>
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
