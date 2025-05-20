import React, { useState } from "react";
import "./ReactForm.scss";
import { Label, Col, Input, Button, FormGroup, Form } from "reactstrap";
import { cityList, sexList, sportsList } from "../../Constants/userConstants";
import "./customToggle.css";
const ReactForm = ({ addDetails }) => {
  console.log(addDetails, "ss");
  const [details, setDetails] = useState({
    firstname: "",
    city: "",
    sports: [],
    sex: "",
    age: 0,
    email: "No",
    contact: "",
  });
  // const [Email, setEmail] = useState(false);
  const inputHandler = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setDetails((prevDetails) => ({
        ...prevDetails,
        sports: checked
          ? [...prevDetails.sports, value]
          : prevDetails.sports.filter((sport) => sport !== value),
      }));
    } else {
      setDetails({ ...details, [name]: value });
    }
  };
  console.log(details, "yy");

  const submitHandler = (e) => {
    e.preventDefault();
    addDetails(details);
    setDetails({
      firstname: "",
      city: "",
      sports: [],
      sex: "",
      age: 0,
      email: "No",
      contact: "",
    });
  };

  return (
    <div className="reactForm">
      <p className="registration">Registration</p>
      <Form onSubmit={submitHandler}>
        <FormGroup row>
          <Label for="firstname" size="lg" sm={2}>
            FirstName<span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              bsSize="lg"
              id="firstname"
              name="firstname"
              placeholder="Enter a FirstName"
              value={details.firstname}
              type="text"
              required
              onChange={inputHandler}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="city" sm={2} size="lg">
            City <span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={10}>
            <Input
              id="city"
              name="city"
              type="select"
              required
              value={details.city}
              onChange={inputHandler}
            >
              <option value="" disabled>
                ---Select City---
              </option>
              {cityList.map((eachCity) => (
                <option value={eachCity.value} key={eachCity.value}>
                  {eachCity.label}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="sports" size="lg" sm={2} className="reactClassLabel">
            Sports <span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={10}>
            {sportsList.map((eachSport) => (
              <FormGroup check key={eachSport.value} inline>
                <Label check className="sportsexlabel">
                  {eachSport.label}
                </Label>
                <Input
                  type="checkbox"
                  bsSize="large"
                  name="sports"
                  value={eachSport.value}
                  className="sportsexcheckbox"
                  checked={details.sports.includes(eachSport.value)}
                  onChange={inputHandler}
                />
              </FormGroup>
            ))}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="sex" size="lg" sm={2} className="reactClassLabel">
            Sex <span style={{ color: "red" }}>*</span>
          </Label>
          <Col sm={10}>
            {sexList.map((eachSex) => (
              <FormGroup check key={eachSex.value} inline>
                <Label check className="sportsexlabel">
                  {eachSex.label}
                </Label>
                <Input
                  type="radio"
                  required
                  bsSize="large"
                  name="sex"
                  value={eachSex.value}
                  className="sportsexcheckbox"
                  checked={details.sex === eachSex.value}
                  onChange={inputHandler}
                />
              </FormGroup>
            ))}
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="age" size="lg" sm={2} className="reactClassLabel">
            Age<span style={{ color: "red" }}>*</span>{" "}
          </Label>
          <Col sm={8}>
            <span>MinAge:0</span> <span className="agespan">MaxAge:90</span>
            <Input
              type="range"
              className="agerange"
              name="age"
              min="0"
              max="90"
              step={1}
              value={details.age}
              required
              onChange={inputHandler}
            />
            <p className="selectedAge">Selected Age: {details.age}</p>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" size="lg" sm={2} className="reactClassLabel">
            Email<span style={{ color: "red" }}>*</span>{" "}
          </Label>
          <Col sm={8}>
            <FormGroup switch>
              <Input
                type="switch"
                color={details.email === "Yes" ? "success" : "danger"}
                checked={details.email === "Yes"}
                className=""
                onClick={() => {
                  setDetails({
                    ...details,
                    email: details.email === "Yes" ? "No" : "Yes",
                  });
                }}
                required
              />
              <Label check style={{ color: "red" }}>
                {details.email === "Yes" ? "yes" : "No"}
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="contact" size="lg" sm={2} className="reactClassLabel">
            Contact
            <span
              style={{ color: "red", fontWeight: "bold", fontSize: "25px" }}
            >
              *
            </span>{" "}
          </Label>
          <Col sm={8}>
            <textarea
              className="contacttextarea"
              name="contact"
              value={details.contact}
              placeholder="Please enter at least 50 characters"
              onChange={inputHandler}
              required
            />
          </Col>
          {/* <Label>{email ? "yes" : "No"}</Label> */}
        </FormGroup>
        <div>
          <Button type="submit" color="primary" className="buttonsubmit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ReactForm;
