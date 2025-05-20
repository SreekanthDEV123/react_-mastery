import React, { useEffect, useState } from "react";
import { roleList } from "../../../Constants/roleList";
import { skillsList } from "../../../Constants/userConstants";
import "./CustomerForm.scss";

const CustomerForm = ({ addCustomer, updatedCustomer }) => {
  const [show, setShow] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [details, setDetails] = useState({
    username: "",
    role: "",
    phonenumber: "",
    skill: [],
  });
  useEffect(() => {
    if (Object.keys(updatedCustomer).length > 0) {
      setDetails(updatedCustomer);
      setShowButton(false);
    }
  }, [updatedCustomer]);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name == "skill") {
      const newSkill = details.skill.includes(value)
        ? details.skill.filter((eachSkill) => eachSkill != value)
        : [...details.skill, value];
      setDetails({ ...details, skill: newSkill });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  const isPassed = () => {
    if (
      details.username &&
      details.role &&
      details.skill &&
      details.phonenumber
    ) {
      return true;
    } else {
      return false;
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isPassed()) {
      addCustomer(details, showButton ? "submit" : "update");
      setDetails({
        username: "",
        role: "",
        phonenumber: "",
        skill: [],
      });
      setShowButton(true);
      if (show) setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    console.log(show, "showakshda");
  }, [show]);
  return (
    <div className="customerFormStyle">
      <form onSubmit={submitHandler}>
        <h1 className="customerFormHeader">Registration </h1>
        <div className="customerFormField">
          <label className="customerFormLabel">
            User Name &nbsp;<span className="customerFormSpan">*</span>
          </label>
          <input
            type="text"
            name="username"
            value={details.username}
            onChange={inputHandler}
            className="form-control customerInput"
            placeholder="Enter a User Name"
          />
          {show && details.username.length == 0 && (
            <span className="customerRequired">User Name is Required</span>
          )}
        </div>
        <div className="customerFormField">
          <label className="customerFormLabel">
            Role &nbsp;<span className="customerFormSpan">*</span>
          </label>
          <select
            name="role"
            value={details.role}
            onChange={inputHandler}
            className="form-select customerInput"
          >
            <option value="" disabled>
              ---Selected---
            </option>
            {roleList.map((eachRole) => (
              <option key={eachRole.id} value={eachRole.value}>
                {eachRole.name}
              </option>
            ))}
          </select>
          {show && details.role.length == 0 && (
            <span className="customerRequired">Role is Required</span>
          )}
        </div>
        <div className="customerFormField">
          <label className="customerFormLabel">
            Phone Number &nbsp;<span className="customerFormSpan">*</span>
          </label>
          <input
            type="number"
            name="phonenumber"
            value={details.phonenumber}
            className="form-control customerInput"
            placeholder="Enter a Phone Number"
            onChange={inputHandler}
          ></input>
          {show && details.phonenumber.length == 0 && (
            <span className="customerRequired">Phone Number is Required</span>
          )}
        </div>
        <div className="customerFormField">
          <label className="customerFormLabel">
            Skill &nbsp;<span className="customerFormSpan">*</span>
          </label>
          <br />
          {skillsList.map((eachSkill, index) => (
            <div key={index} className="skillCheck">
              <input
                type="checkbox"
                name="skill"
                value={eachSkill.value}
                onChange={inputHandler}
                className="form-check-input skillCheckBox "
                checked={details.skill.includes(eachSkill.value)}
              />

              <label className="skillCheckLabel"> {eachSkill.label}</label>
            </div>
          ))}
          <hr />
          {show && details.skill.length == 0 && (
            <span className="customerRequired">Skill is Required</span>
          )}
        </div>
        <br />
        {showButton && (
          <div className="customerSubmitButton">
            <button
              type="submit"
              className="btn btn-primary btn-lg rounded-pill submitButton"
            >
              Submit
            </button>
          </div>
        )}
        {!showButton && (
          <div className="customerSubmitButton">
            <button
              type="update"
              className="btn btn-warning btn-lg rounded-pill submitButton"
            >
              update
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default CustomerForm;
