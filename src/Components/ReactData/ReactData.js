import React from "react";
import "./ReactData.scss";
import { Table } from "reactstrap";
const ReactData = ({ datalist }) => {
  console.log(datalist, "dd");
  return (
    <>
      {datalist.length > 0 && (
        <div className="reactData">
          <h1>Details</h1>
          <Table striped>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>City</th>
                <th>Sports</th>
                <th>Sex</th>
                <th>Age</th>
                <th>Email</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {datalist.map((ele, index) => (
                <tr key={index}>
                  <td>{ele.firstname}</td>

                  <td>{ele.city}</td>
                  <td>{ele.sports}</td>
                  <td>{ele.sex}</td>
                  <td>{ele.age}</td>
                  <td>{ele.email}</td>
                  <td>{ele.contact}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default ReactData;
