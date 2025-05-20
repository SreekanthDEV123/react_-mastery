import React, { useEffect, useState } from "react";
import "./UserForm.scss";
import { cityList, sexList, skillsList } from "../../Constants/userConstants";

const UserForm = ({ addUser, updatingRecord, currentId }) => {
  const [details, setDetails] = useState({
    name: "",
    adhar: "",
    city: "",
    sex: "",
    skills: [],
    description: "",
    phone: "",
  });

  const [show, setShow] = useState(false);
  const [showSubmit, setShowSubmit] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);
  const randomGenerator = () => {
    const randomNumber = Math.round(100 * Math.random());
    setRandomNumber(randomNumber);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    if (name == "skills") {
      const newSkills = details.skills.includes(value)
        ? details.skills.filter((skill) => skill !== value)
        : [...details.skills, value];
      setDetails({ ...details, skills: newSkills });
    } else if (name == "sex") {
      setDetails({ ...details, [name]: value });
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  const isDataValid = () => {
    if (
      details.name &&
      details.adhar &&
      details.city &&
      details.sex &&
      details.skills &&
      details.description
    ) {
      return true;
    }

    return false;
  };
  useEffect(() => {
    console.log(currentId);
  }, [currentId]);
  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
    setShowSubmit(true);

    if (isDataValid()) {
      let modifiedUserData = {
        ...details,
        randomNumber,
      };
      addUser(modifiedUserData, showSubmit ? "submit" : "update");
      setDetails({
        name: "",
        adhar: "",
        city: "",
        sex: "",
        skills: [],
        description: "",
        phone: "",
      });
      setShow(false);
    }
  };
  useEffect(() => {
    randomGenerator();
  }, [details.sex, details.adhar]);
  useEffect(() => {
    console.log(currentId);
  }, [currentId]);

  useEffect(() => {
    // console.log(updatingRecord, "updatingRecord");
    if (Object.keys(updatingRecord).length > 0) {
      setDetails(updatingRecord);
      setShowSubmit(false);
    }
  }, [updatingRecord]);

  return (
    <div>
      <h4 className="userFormHeader">User Form</h4>
      {/* <button onClick={() => get()}>get DAta</button> */}
      <form onSubmit={submitHandler}>
        <div>
          <label className="userFormLabel">
            Name <span className="userFormSpan">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={inputHandler}
            className="form-control "
            placeholder="Enter the Name"
          />
          {show && details.name.length == 0 && (
            <span className="required">Name is required</span>
          )}
        </div>
        <div>
          <label className="userFormLabel">
            Adhar <span className="userFormSpan">*</span>
          </label>
          <input
            type="text"
            name="adhar"
            value={details.adhar}
            onChange={inputHandler}
            className="form-control"
            placeholder="Enter the Adhar"
          />
          {show && details.adhar.length == 0 && (
            <span className="required">Adhar is required</span>
          )}
        </div>
        <div>
          <label className="userFormLabel">
            City <span className="userFormSpan">*</span>
          </label>
          <select
            name="city"
            className="form-select"
            value={details.city}
            onChange={inputHandler}
          >
            <option value="" disabled>
              Selected-city
            </option>
            {cityList.map((ele) => (
              <option key={ele.id} value={ele.value}>
                {ele.label}
              </option>
            ))}
          </select>
          {show && details.city.length == 0 && (
            <span className="required">City is required</span>
          )}
        </div>
        <div>
          <label className="userFormLabel">
            Skills <span className="userFormSpan">*</span>
          </label>
          {skillsList.map((ele, index) => (
            <React.Fragment key={index}>
              <input
                type="checkbox"
                value={ele.value}
                onChange={inputHandler}
                className="form-check-input userFormCheckBox"
                name="skills"
                checked={details.skills.includes(ele.value)}
              />
              <label className="userFormCheckBoxLabel">{ele.label}</label>
            </React.Fragment>
          ))}
          {show && details.skills.length == 0 && (
            <span className="required">Skills is required</span>
          )}
        </div>
        <div>
          <label className="userFormLabel">
            Sex <span className="userFormSpan">*</span>
          </label>
          {sexList.map((ele, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                value={ele.value}
                onChange={inputHandler}
                className="form-check-input userFormCheckBox"
                name="sex"
                checked={details.sex == ele.value}
              />
              <label className="userFormCheckBoxLabel">{ele.label}</label>
            </React.Fragment>
          ))}
          {show && details.sex.length == 0 && (
            <span className="requiredSex">Sex is required</span>
          )}
        </div>
        <div>
          <label className="userFormLabel">
            Description <span className="userFormSpan">*</span>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={details.description}
            placeholder="e.g. Enter a description"
            onChange={inputHandler}
          ></textarea>
          {show && details.description.length == 0 && (
            <span className="required">Description is required</span>
          )}
        </div>
        <hr className="hr" />
        <div>
          <label className="userFormLabel">Phone:(Optional)</label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            value={details.phone}
            onChange={inputHandler}
            placeholder="Enter the Phone Number"
          />
        </div>
        <div className="userFormSubmitButton">
          {showSubmit && (
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          )}
          {!showSubmit && (
            <button className="btn btn-warning" type="submit">
              Update
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;
