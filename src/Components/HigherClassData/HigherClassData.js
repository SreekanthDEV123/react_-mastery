import React, { Component } from "react"; // Make sure this is correct
import "./HigherClassData.scss";
class HigherClassData extends Component {
  // Define displayPost method if needed (for now it's a placeholder)
  displayPost = (eachPost) => {
    console.log("Display post:", eachPost);
  };
  deletePost = (eachPost) => {
    const { deletedStudent } = this.props;
    deletedStudent(eachPost);
  };
  editPost = (eachPost) => {
    const { updatedStudent } = this.props;
    updatedStudent(eachPost);
  };

  render() {
    const { StudentsList, name } = this.props;
    console.log(StudentsList, "came", name);

    return (
      <div>
        <div className="higherClassData">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Phone Number</th>
                <th>Skill</th>
                <th>Username</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {StudentsList.map((eachPost) => (
                <tr key={eachPost.id}>
                  <td>{eachPost.id}</td>
                  <td>{eachPost.phonenumber}</td>
                  <td>{eachPost.skill.join(",")}</td>
                  <td>{eachPost.firstname}</td>
                  <td>
                    <button
                      onClick={() => this.editPost(eachPost)}
                      className="btn btn-success"
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => this.deletePost(eachPost)}
                      className="btn btn-success"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HigherClassData;
