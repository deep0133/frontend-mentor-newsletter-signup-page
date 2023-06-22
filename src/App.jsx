import { useState } from "react";
import Main from "./components/Main";
import ThankYou from "./components/ThankYou";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* eslint-disable react/prop-types */
function App() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Main email={email} setEmail={setEmail} />}
          />
          <Route
            path="/thankyou"
            element={<ThankYou email={email} setEmail={setEmail} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
