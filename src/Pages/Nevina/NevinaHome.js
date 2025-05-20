import React, { useState } from "react";
import NevianForm from "./NevianForm";
import NevinaAccordion from "./NevinaAccordion";
const NevinaHome = () => {
  const [userinfo, setUserInfo] = useState([]);
  const [selectedEntry, setselectedEntry] = useState({});

  const addDetails = (entry) => {
    setUserInfo([...userinfo, { ...entry, id: userinfo.length + 1 }]);
  };
  const savedEntry = (user) => {
    setselectedEntry(user);
  };
  const updateDetails = (updateEntry) => {
    console.log(updateEntry, "kk");

    const userExisting = userinfo.find(
      (recordExisting) => recordExisting.id == updateEntry.id
    );
    if (userExisting) {
      const filteredData = userinfo.map((User) => {
        if (User.id == userExisting.id) {
          return updateEntry;
        } else {
          return User;
        }
      });
      setUserInfo(filteredData);
      setselectedEntry("");
    }
  };
  return (
    <div className="row">
      <div className="col-md-5">
        <NevinaAccordion
          addDetails={addDetails}
          selectedEntry={selectedEntry}
          updateDetails={updateDetails}
        />
      </div>

      <div className="col-md-5">
        <NevianForm data={userinfo} savedEntry={savedEntry} />
      </div>
    </div>
  );
};

export default NevinaHome;
