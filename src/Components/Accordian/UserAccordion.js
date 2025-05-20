import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import "./UserAccordian.scss";
const UserAccordion = () => {
  const [data, setData] = useState([]);

  const fectchUserData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    setData(data);
  };
  useEffect(() => {
    fectchUserData();
  }, []);
  return (
    <div className="accordionTable">
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Company</th>
            <th>Adress</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.company.name}</td>
                <td>
                  {user.address.street}, {user.address.city},{" "}
                  {user.address.zipcode}
                </td>
                <td>{user.website}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserAccordion;
