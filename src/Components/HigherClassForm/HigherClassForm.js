import React, { Component } from "react";
import { roleList } from "../../Constants/roleList";
import { skillsList } from "../../Constants/userConstants";
import "./HigherClassForm.scss";
// import { Button } from 'reactstrap';
class HigherClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: { firstname: "", role: "", phonenumber: "", skill: [] },
      show: false,
      showButton: true,
    };
  }
  // this.setState({details:{...this.state.details,color:"red"}})
  // this.setState({people:[...this.state.people,this.state.details]})
  isDataValid = () => {
    const { role, firstname, phonenumber, skill } = this.state.person;

    if (
      role.length > 0 &&
      firstname.length > 0 &&
      phonenumber.length > 0 &&
      skill.length > 0
    ) {
      return true;
    }

    return false;
  };
  componentDidUpdate(prevProps, prevState) {
    const { studentInfo } = this.props;
    // const { showButton } = this.state;

    if (
      studentInfo &&
      Object.keys(studentInfo).length > 0 &&
      studentInfo !== prevProps.studentInfo
    ) {
      this.setState({
        person: studentInfo,
      });
      this.setState({
        showButton: false,
      });
    }
    // if (
    //   Object.keys(studentInfo).length == 0 &&
    //   studentInfo !== prevProps.studentInfo
    // ) {
    //   this.setState({
    //     showButton: true,
    //   });
    // }
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { addDetails } = this.props;
    if (this.isDataValid()) {
      console.log("Form is valid!");
      addDetails(
        this.state.person,
        this.state.showButton ? "submit" : "update"
      );
      this.setState({
        person: { firstname: "", role: "", skill: "", phonenumber: "" },
      });
      this.setState({
        showButton: true,
      });
      this.setState({
        show: false,
      });
    } else {
      console.log("Form is invalid.");
      this.setState({
        show: true,
      });
    }
  };

  // inputHandler = (e) => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   if (name === "skill") {
  //     const newSkill = this.state.person.skill.includes(value)
  //       ? this.state.person.skill.filter((eachSkill) => eachSkill !== value)
  //       : [...this.state.person.skill, value];
  //     this.setState({
  //       person: { ...this.state.person, skill: newSkill },
  //     });
  //   } else {
  //     this.setState(
  //       {
  //         person: { ...this.state.person, [name]: value },
  //       }
  //       // () => {
  //       //   console.log(this.state.person, "111111111111");
  //       // }
  //     );
  //     // console.log(this.state.person, "222222222222");
  //   }
  // };
  inputHandler = (e) => {
    const { name, value, checked } = e.target;

    if (name === "skill") {
      let updatedSkills = [...this.state.person.skill];

      if (checked) {
        updatedSkills.push(value);
      } else {
        updatedSkills = updatedSkills.filter((skill) => skill !== value);
      }

      this.setState((prevState) => ({
        person: { ...prevState.person, skill: updatedSkills },
      }));
    } else {
      this.setState({
        person: { ...this.state.person, [name]: value },
      });
    }
  };

  render() {
    const { show, person } = this.state;
    const { showButton } = this.state;

    return (
      <div className="higherClassForm">
        <p className="registration">Registration</p>
        <form onSubmit={this.submitHandler}>
          <div className="inputField">
            <label className="higherClassLabel">
              First Name <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={this.state.person.firstname}
              onChange={this.inputHandler}
            />
            {show && this.state.person.firstname.length == 0 && (
              <span style={{ color: "red" }}>FirstName is Required</span>
            )}
          </div>
          <div className="inputField">
            <label className="higherClassLabel">
              Role
              <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <select
              name="role"
              onChange={this.inputHandler}
              className="form-select"
              value={this.state.person.role}
            >
              <option value="" disabled>
                ---SelectedRole---
              </option>
              {roleList.map((eachRole) => (
                <option value={eachRole.value} key={eachRole.value}>
                  {eachRole.name}
                </option>
              ))}
            </select>
            {show && this.state.person.role.length == 0 && (
              <span style={{ color: "red" }}>Role is Required</span>
            )}
          </div>
          <div className="inputField">
            <label className="higherClassLabel">
              Phone Number <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            <input
              type="phone"
              className="form-control"
              name="phonenumber"
              value={this.state.person.phonenumber}
              onChange={this.inputHandler}
            />
            {show && this.state.person.phonenumber.length == 0 && (
              <span style={{ color: "red" }}>Phone Number is Required</span>
            )}
          </div>

          <div className="inputField">
            <label className="higherClassLabel">
              Skill <span style={{ color: "red" }}>*</span>
            </label>
            <br />
            {skillsList.map((eachSkill) => (
              <label key={eachSkill.value}>
                {" "}
                {/* Add a key to each label */}
                <input
                  type="checkbox"
                  name="skill"
                  value={eachSkill.value}
                  className="form-check-input checklabel"
                  checked={this.state.person.skill.includes(eachSkill.value)}
                  onChange={this.inputHandler}
                />
                {eachSkill.label}
              </label>
            ))}

            <br />
            {show && this.state.person.skill.length == 0 && (
              <span style={{ color: "red" }}>Skill is Required</span>
            )}

            <hr />
          </div>

          <div>
            {showButton && (
              <button type="submit" className="bg-primary submit">
                {" "}
                Submit
              </button>
            )}
            {!showButton && (
              <button type="update" className="bg-info update">
                {" "}
                Update
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
export default HigherClassForm;
