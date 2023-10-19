import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Insight } from "./Components/Pages/Insight";
import { Transaction } from "./Components/Pages/Transaction";
import { Settings } from "./Components/Pages/Settings";
import { Contact } from "./Components/Pages/Contact";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/insight" element={<Insight />} />
          <Route path="/dashboard/transaction" element={<Transaction />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
