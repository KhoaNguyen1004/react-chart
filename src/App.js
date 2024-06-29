import React, { useState } from "react";
import SalesForm from "./components/SaleForm";
import SalesChart from "./components/Chart";
import "./App.css";

const App = () => {
  const [salesData, setSalesData] = useState([]);

  const handleFormSubmit = (data) => {
    setSalesData(data);
  };

  return (
    <div className="container">
      <h1>Games Sold per Month</h1>
      <SalesForm onSubmit={handleFormSubmit} />
      {salesData.length > 0 && <SalesChart data={salesData} />}
    </div>
  );
};

export default App;
