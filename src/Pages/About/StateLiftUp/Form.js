import React, { useState } from "react";

const Form = ({ setData, phoneData }) => {
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...phoneData, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //     setData(details);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Phone:&emsp;</label>
        <input
          type="text"
          value={phoneData.phone}
          name="phone"
          onChange={handleInput}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
