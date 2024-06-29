import React, { useState } from "react";

const SalesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    January: "",
    February: "",
    March: "",
    April: "",
    May: "",
    June: "",
    July: "",
    August: "",
    September: "",
    October: "",
    November: "",
    December: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const salesData = Object.keys(formData).map((month) => ({
      month,
      sales: parseInt(formData[month], 10) || 0,
    }));
    onSubmit(salesData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((month) => (
        <div key={month}>
          <label>{month}: </label>
          <input
            type="number"
            name={month}
            value={formData[month]}
            onChange={handleChange}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SalesForm;
