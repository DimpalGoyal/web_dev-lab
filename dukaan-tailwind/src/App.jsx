import { useState } from "react";
import "./App.css";
import { RevenueCard } from "./components/RevenueCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-3">
        <RevenueCard title={"next payout"} amount={"2,300"} order={43} />
        {/* <RevenueCard title={"amount pending"} amount={"92,300"} order={12} />
        <RevenueCard title={"amount processed"} amount={"32,92,300"} order={null} /> */}
      </div>
    </>
  );
}

export default App;
