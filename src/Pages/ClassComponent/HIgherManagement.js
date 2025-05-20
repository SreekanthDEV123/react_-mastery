import React, { Component } from "react";
import HigherForm from "../../Components/HigherForm/HigherForm";
import HigherData from "../../Components/HigherData/HigherData";
import HigherClassData from "../../Components/HigherClassData/HigherClassData";
import HigherClassForm from "../../Components/HigherClassForm/HigherClassForm";
// import "./HigherManagement.scss";

class HIgherManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      details: { ranNo: 20, userId: "", title: "", body: "" },
      individualPost: [],
      studentData: [],
      studentDetails: {},
    };
  }

  handleButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  updateDetails = (updatedPost) => {
    // let randomNumber=0;
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber, "random");
    this.setState({
      details: {
        ranNo: randomNumber,
        userId: updatedPost.id,
        title: updatedPost.title,
        body: updatedPost.body,
      },
    });
  };
  fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          details: {
            ...this.state.details,
            userId: data[0].userId,
            title: data[0].title,
            body: data[0].body,
          },
          individualPost: data,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };
  componentDidMount() {
    this.fetchData();
  }
  addDetails = (addStudent, type) => {
    if (type === "submit") {
      this.setState(
        {
          studentData: [
            ...this.state.studentData,
            { ...addStudent, id: this.state.studentData.length + 1 },
          ],
        },
        () => {
          console.log(this.state.studentData.length, "jj");
        }
      );
    } else {
      const isExist = this.state.studentData.find(
        (eachStudent) => eachStudent.id == addStudent.id
      );
      console.log(isExist, "finded");
      if (isExist) {
        const filteredData = this.state.studentData.map((everyStudent) =>
          everyStudent.id == isExist.id ? addStudent : everyStudent
        );
        this.setState({
          studentData: filteredData,
        });
      }
    }
  };
  updatedStudent = (student) => {
    this.setState({ studentDetails: student });
  };
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count > 1;
  }
  deletedStudent = (removeStudent) => {
    const filteredData = this.state.studentData.filter(
      (eachStudent) => eachStudent.id != removeStudent.id
    );
    this.setState({
      studentData: filteredData,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    // console.log(this.state.studentData, "didUpdate", prevState);
    // if (prevState.studentData !== this.state.studentData) {
    //   console.log("studentData has changed");
    //   console.log("Previous studentData:", prevState.studentData);
    //   console.log("Current studentData:", this.state.studentData);
    // } else {
    //   console.log("no data ");
    // }
    console.log(
      prevState.studentDetails,
      "objectSaved",
      this.state.studentDetails
    );
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    const { count, details, individualPost, studentData } = this.state;

    return (
      <div className="row">
        <p>Count: {count}</p>
        <p>UserID: {details.userId}</p>
        <p>randomNumber:{details.ranNo}</p>
        <p>Title: {details.title}</p>
        <p>Body: {details.body}</p>

        <button onClick={this.handleButton} className="click">
          Increase Count
        </button>
        <div className="col-sm-1 col-md-1">
          {/* Count: {count} */}
          <HigherForm handleButton={this.handleButton} />
          {/* <h1>hi</h1> */}
        </div>
        <div className="col-sm-4 col-md-4">
          {/* Count: {count} */}
          <HigherData
            posts={individualPost}
            updateDetails={this.updateDetails}
          />
        </div>
        <div className="col-sm-4 col-md-4">
          <HigherClassForm
            addDetails={this.addDetails}
            studentInfo={this.state.studentDetails}
          />
        </div>
        <div className="col-sm-3 col-md-3">
          <HigherClassData
            StudentsList={studentData}
            name={"sreekanth"}
            deletedStudent={this.deletedStudent}
            updatedStudent={this.updatedStudent}
          />
        </div>
      </div>
    );
  }
}

export default HIgherManagement;
