import { useState } from "react";
import { useNavigate } from "react-router-dom";
import iconList from "./assets/images/icon-list.svg";

/* eslint-disable react/prop-types */
const Main = ({ email, setEmail }) => {
  const [error, setError] = useState("hidden");

  const navigate = useNavigate();

  function isValidEmail(email) {
    // Regular expression pattern for validating email addresses
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email matches the pattern
    return emailPattern.test(email);
  }

  const emailHandler = async (e) => {
    const email = e.target.value;
    setEmail(email);
    if (isValidEmail(email)) setError("hidden");
    else setError("");
  };

  return (
    <>
      <div className="flex bg-[hsl(235,_18%,_26%)] justify-center min-[500px]:items-center min-h-screen">
        <div className="grid grid-cols-5 bg-white mx-auto w-full min-[500px]:w-[90%] min-[800px]:w-[700px]">
          <div className="left-side col-span-full min-[500px]:col-span-3 py-12 px-8 space-y-3 order-2 min-[500px]:order-1">
            <h1 className="text-3xl font-bold">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul className="flex flex-col space-y-3">
              <li className="flex space-x-2">
                <img src={iconList} className="object-cover w-5 h-5" alt="" />{" "}
                <p>Product discovery and building what matters</p>
              </li>
              <li className="flex space-x-2">
                <img src={iconList} className="object-cover w-5 h-5" alt="" />{" "}
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className="flex space-x-2">
                <img src={iconList} className="object-cover w-5 h-5" alt="" />{" "}
                <p>And much more!</p>
              </li>
            </ul>

            <div className="contact relative space-y-3 pt-2">
              <label htmlFor="email" className="block">
                Email address
              </label>
              <label
                htmlFor="email-error"
                className={`absolute ${error} right-0 top-0 text-sm text-red-500 font-medium`}>
                Valid email required
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={emailHandler}
                className="w-full border p-3 text-red-500 font-medium hover:cursor-pointer focus:border-gray-500 focus:border rounded-md outline-none"
                placeholder="email@company.com"
              />
              <button
                onClick={() => {
                  if (!email) {
                    setError("");
                  } else if (error === "hidden") {
                    navigate("/thankyou");
                  }
                }}
                className="border rounded-md w-full text-center p-3 bg-[hsl(234,_29%,_20%)] text-white hover:bg-[hsl(4,_100%,_67%)]">
                {" "}
                Subscribe to monthly newsletter{" "}
              </button>
            </div>
          </div>
          <div className="right col-span-full min-[500px]:col-span-2 min-h-[280px] bg-right bg-cover min-[500px]:m-5 rounded-bl-3xl rounded-br-3xl min-[500px]:rounded-xl bg-mobile min-[500px]:bg-desktop order-1 min-[500px]:order-2"></div>
        </div>
      </div>
    </>
  );
};

export default Main;
