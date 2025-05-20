import React, { useState } from "react";
import "./UserData.css";
import { useNavigate, Link } from "react-router-dom";

const UserData = ({ data, editUser, deleteData, updatedUsersData }) => {
  const navigate = useNavigate();
  const [selectedNamesSkills, setSelectedNamesSkills] = useState("");
  const [userDetails, setUserDetails] = useState("");

  const editUserRecord = (eachRecord, e) => {
    e.stopPropagation();
    editUser(eachRecord);
    console.log("starts from edit");
  };

  const deleteUserRecord = (deleteRecord, e) => {
    e.stopPropagation();
    deleteData(deleteRecord);
    console.log("starts from delete");
  };

  const handleRowClick = (a, e) => {
    e.stopPropagation();
    console.log("starts from HNADLE");
    setUserDetails(a.name);
    navigate(`/app/${a.id}`);
  };

  const handleNamesSkillsInput = (e) => {
    const updatedNamesSkills = e.target.value;
    setSelectedNamesSkills(updatedNamesSkills);
  };

  return (
    <div>
      <input
        type="text"
        className="searchSkillsNames"
        name="selectedSkillsNames"
        value={selectedNamesSkills}
        onChange={handleNamesSkillsInput}
        placeholder="Enter a Name, Skills, Adhar"
      />
      {data.length > 0 && (
        <table className="custom-hover-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Adhar</th>
              <th>City</th>
              <th>Sex</th>
              <th>Skills</th>
              <th>Description</th>
              <th>Phone Number</th>
              <th>Random Number</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter(
                (eachNamesSkills) =>
                  eachNamesSkills.name.includes(selectedNamesSkills) ||
                  eachNamesSkills.skills.some(
                    (skill) =>
                      skill.includes(selectedNamesSkills) ||
                      eachNamesSkills.adhar.includes(selectedNamesSkills)
                  )
              )
              .map((ele, index) => (
                <tr
                  key={index}
                  onClick={() => handleRowClick(ele)}
                  style={{
                    backgroundColor:
                      userDetails === ele.name ? "pink" : "transparent",
                  }}
                >
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>
                    <Link
                      to={`/app/${ele.adhar}`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {ele.adhar}
                    </Link>
                  </td>
                  <td>{ele.city}</td>
                  <td>{ele.sex}</td>
                  <td>{ele.skills.join(",")}</td>
                  <td>{ele.description}</td>
                  <td>{ele.phone}</td>
                  <td>{ele.randomNumber}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => editUserRecord(ele, e)}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => deleteUserRecord(ele, e)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserData;
