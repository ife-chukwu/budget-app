import React, { createContext, useEffect, useState } from "react";

const contextAPI = createContext();

const MyContextApi = ({ children }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");
  const [state, setState] = useState({
    userName: "",
    password: "",
    email: "",
  });
  useEffect(() => {
    const data = window.localStorage.getItem("firstState");
    setState(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("firstState", JSON.stringify(state));
  }, [state]);
  const [state3, setState3] = useState({
    username3: "",
    password3: "",
    email3: "",
    income: "",
  });

  const { userName, password, email } = state;
  const { username3, password3, email3, income } = state3;

  const [state2, setState2] = useState({
    password2: "",
    email2: "",
  });

  const handleInput = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInput2 = (e) => {
    setState2((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleInput3 = (e) => {
    const { name, value } = e.target;

    setState3((state) => ({
      ...state,
      [name]: value,
    }));

    setState3Error("");
  };

  const { password2, email2 } = state2;

  const [billInfo, setBillInfo] = useState({
    receiver: "",
    type: "",
    date: "",
    amount: "",
  });

  const handleBillsChange = (event) => {
    const { name, value } = event.target;
    setBillInfo((billInfo) => ({
      ...billInfo,
      [name]: value,
    }));
  };
  const { receiver, type, date, amount } = billInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      userName.trim() === "" ||
      password.trim() === "" ||
      email.trim() === ""
    ) {
      setErrorMsg("Not every input is filled");
    }
  };
  const [stateError, setState3Error] = useState("");
  const [userAccount, setUserAccount] = useState([]);
  const [cart, setCart] = useState([]);
  const [balance, setBalance] = useState("");

  const totalPrice = cart.reduce(
    (accumulator, item) => accumulator + Number(item.amount),
    0
  );
  const handleSubmit3 = (e) => {
    e.preventDefault();
    setUserAccount([state3]);
    setBalance(Number(income) - Number(amount));
    if (
      username3.length <= 0 ||
      email3.length <= 0 ||
      password3.length <= 0 ||
      income.length <= 0
    ) {
      setState3Error("Not every input is filled");
      return;
    } else {
      console.log(userAccount);
      setAddYourAccount(false);
      setState3Error("");
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (email2 !== state.email || password2 !== state.password) {
      setErrorMsg("The above account does not exist");
      return;
    }

    if (password2.trim() === "" || email2.trim() === "") {
      setErrorMsg("Not every input is filled");
    } else {
      setSuccess("Login successful");
    }

    // if (state2.password === "" && state2.email.trim() === "") {
    //   setSuccess("");
    // }
  };

  setTimeout(() => {
    setErrorMsg("");
  }, 5000);

  const [addYourBill, setAddYourBill] = useState(false);
  const addBill = () => {
    setAddYourBill(true);
  };
  const [addYourGoal, setAddYourGoal] = useState(false);

  const addGoal = () => {
    setAddYourGoal(true);
  };

  const closeAddBill = () => {
    setAddYourBill(false);
    setAddYourGoal(false);
    setAddYourAccount(false);
    setState3Error("");
  };

  const [progress, setProgress] = useState(0);

  const preventDefault = (e) => {
    e.preventDefault();
    setCart([...cart, billInfo]);
    setAddYourBill(false);
    setBillInfo("");
    setProgress(progress + 5);
  };
  const [addYourAccount, setAddYourAccount] = useState(false);
  const addAccount = () => {
    setAddYourAccount(true);
  };

  return (
    <div>
      <contextAPI.Provider
        value={{
          state,
          state2,
          handleInput,
          handleSubmit,
          handleSubmit2,
          handleInput2,
          handleSubmit3,
          handleInput3,
          errorMsg,
          success,
          // password,
          // email,
          // email2,
          // password2,
          userName,
          addBill,
          addYourBill,
          closeAddBill,
          handleBillsChange,
          preventDefault,
          receiver,
          type,
          date,
          amount,
          cart,
          addGoal,
          addYourGoal,
          progress,
          addYourAccount,
          addAccount,
          username3,
          email3,
          income,
          password3,
          stateError,
          userAccount,
          totalPrice,
          balance,
        }}
      >
        {" "}
        {children}
      </contextAPI.Provider>
    </div>
  );
};

export { MyContextApi, contextAPI };
