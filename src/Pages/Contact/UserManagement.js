import React, { useState } from "react";
import UserForm from "../../Components/UserForm/UserForm";
import UserData from "../../Components/UserData/UserData";
// import Booking from "../Bookings/Booking";
import "./UsersManagement.css";
import EventBublingCapturing from "../../Components/EventBublingCapturing/EventBublingCapturing";
const UserManagement = () => {
  const [userInfo, setUserInfo] = useState([]);
  // const [copyUserInfo, setcopyUserInfo] = useState([]);
  const [updatingRecord, setUpdatingRecord] = useState({});

  const addUser = (user, action) => {
    if (action === "submit") {
      setUserInfo([...userInfo, { ...user, id: userInfo.length + 1 }]);
      // setcopyUserInfo([...userInfo, { ...user, id: userInfo.length + 1 }]);
    } else {
      const userExists = userInfo.find((userRow) => userRow.id === user.id);
      if (userExists) {
        const updatedUserInfo = userInfo.map((userrow) =>
          userrow.id === user.id ? user : userrow
        );
        setUserInfo(updatedUserInfo);
      }
    }
  };

  const deleteData = (deleteRecord) => {
    const deleteRow = userInfo.filter(
      (eachRecord) => eachRecord.name !== deleteRecord.name
    );
    setUserInfo(deleteRow);
  };

  const editUser = (selectedUser) => {
    console.log(selectedUser, "vsselectedUser");

    setUpdatingRecord(selectedUser);
  };

  const updatedUsersData = (filteredData) => {
    console.log(filteredData, "fixed");
    setUserInfo(filteredData);
  };

  return (
    <div>
      <div className="row">
        <div className="col col-sm-4 col-md-4  signForm">
          <UserForm addUser={addUser} updatingRecord={updatingRecord} />
        </div>
        <div className="col col-sm-8 col-md-8 tableForm">
          {userInfo.length > 0 && (
            <UserData
              data={userInfo}
              editUser={editUser}
              deleteData={deleteData}
              updatedUsersData={updatedUsersData}
              // copyData={copyUserInfo}
            />
          )}
        </div>
      </div>
      <div className="container-fluid">
        <EventBublingCapturing />
      </div>
    </div>
  );
};

export default UserManagement;
