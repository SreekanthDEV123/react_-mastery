import React from "react";

const NevianForm = ({ data, savedEntry }) => {
  const editItem = (item) => {
    // console.log(item, "Came");
    savedEntry(item);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Sex</th>
            <th>City</th>

            <th>Sports</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele, index) => (
            <tr key={index}>
              <td>{ele.firstname}</td>
              <td> {ele.sex}</td>
              <td>{ele.city}</td>
              <td> {ele.sports}</td>
              <td>
                <button onClick={() => editItem(ele)}>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NevianForm;
