import { useNavigate } from "react-router-dom";
import iconList from "../images/icon-list.svg";
/* eslint-disable react/prop-types */
function ThankYou({ email, setEmail }) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex bg-white min-[500px]:bg-[hsl(235,_18%,_26%)] justify-center items-center min-h-screen`}>
      <div className="card bg-white w-full min-[501px]:max-w-md p-5 min-[500px]:p-10 space-y-4 rounded-3xl">
        <img src={iconList} alt="icon" className="w-[50px]" />
        <h1 className="text-3xl font-bold pt-2">Thanks for subscribing!</h1>
        <p className="text-[16px] py-1">
          A confirmation email has been sent to <strong> {email}</strong>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>

        <button
          onClick={() => {
            setEmail("");
            navigate("/");
          }}
          className="border rounded-md w-full text-center p-3 bg-[hsl(234,_29%,_20%)] text-white hover:bg-[hsl(4,_100%,_67%)]">
          {" "}
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
