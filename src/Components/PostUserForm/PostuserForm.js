import React from "react";
import "./PostUserForm.scss"
const PostuserForm = ({ dataList }) => {
  console.log(dataList, "camemehhha");
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>userId</th>
            <th>body</th>
          </tr>
        </thead>

        <tbody>
          {dataList.map((eachpost) => (
            <tr key={eachpost.id}>
              <td>{eachpost.id}</td>
              <td>{eachpost.title}</td>
              <td>{eachpost.userId}</td>
              <td>{eachpost.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostuserForm;
