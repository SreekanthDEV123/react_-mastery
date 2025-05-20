import React, { useState, useEffect } from "react";
import "./NevinaAccordion.scss";
import { cityList, sportsList, sexList } from "../../Constants/userConstants";

const NevinaAccordion = ({ addDetails, selectedEntry, updateDetails }) => {
  console.log(selectedEntry, "finallycame");
  const [details, setDetails] = useState({
    firstname: "",
    sports: [],
    sex: "",
    city: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name === "sports") {
      const newSports = details.sports.includes(value)
        ? details.sports.filter((sport) => sport != value)
        : [...details.sports, value];
      setDetails({ ...details, sports: newSports });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.textContent == "Submit") {
      addDetails(details);
      setDetails({ firstname: "", sports: [], sex: "", city: "" });
    } else if (event.nativeEvent.submitter.textContent == "Update") {
      console.log(event.nativeEvent.submitter.textContent, "update");
      updateDetails(details);
      setDetails({ firstname: "", sports: [], sex: "", city: "" });
    }
  };
  useEffect(() => {
    Object.keys(selectedEntry).length > 0 && setDetails(selectedEntry);
  }, [selectedEntry]);
  return (
    <div className="BoxWrapper">
      <h4 className="Register"> Registration</h4>
      <form onSubmit={submitHandler}>
        <div className="InputField">
          <label>
            FirstName:&emsp;<span className="Required">* </span>
          </label>
          <input
            type="text"
            name="firstname"
            value={details.firstname}
            onChange={inputHandler}
            className="InputTextSize"
          />
        </div>
        <div className="InputField">
          <label>
            City:&emsp;<span className="Required">* </span>
          </label>

          <select
            name="city"
            value={details.city}
            onChange={inputHandler}
            className="InputSelectSize"
          >
            <option value="" disabled>
              ---Select City---
            </option>
            {cityList.map((ele, index) => (
              <option value={ele.value}>{ele.label}</option>
            ))}
          </select>
        </div>

        <div className="InputField">
          <label>
            Sports:&emsp;<span className="Required">*</span>
          </label>
          {sportsList.map((ele) => (
            <label className="InputCheckLabelSize" key={ele.value}>
              <input
                type="checkbox"
                name="sports"
                value={ele.value}
                onChange={inputHandler}
                className="InputCheckSize"
                checked={details.sports.includes(ele.value)}
              />
              {ele.label}
            </label>
          ))}
        </div>
        <div className="InputField">
          <label>
            Sex:&emsp;<span className="Required">*</span>
          </label>
          {sexList.map((ele) => (
            <label className="InputCheckLabelSize" key={ele.value}>
              <input
                type="radio"
                name="sex"
                value={ele.value}
                onChange={inputHandler}
                className="InputCheckSize"
                checked={details.sex == ele.value}
              />
              {ele.label}
            </label>
          ))}
        </div>
        <button type="submit" 
          className={`buttonSize ${Object.keys(selectedEntry).length === 0 ? "submit" : "update"}`}
        >
          {Object.keys(selectedEntry).length === 0 ? "Submit" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default NevinaAccordion;
