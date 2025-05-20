import React, { useState } from "react";
import "./UserIndividualDataTable.scss";

const UserIndividualDataTable = ({
  post,
  randomNumber,
  paramsValue,
  luckyNumber,
  show,
}) => {
  const [title, setTitle] = useState("");

  const searchTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
  };

  return (
    <div className="userIndividualTable">
      <div>
        <input
          type="text"
          className="searchBarTitle"
          placeholder=" 🔍 Search a Title.."
          value={title}
          onChange={searchTitle}
        />
      </div>

      <div className="fixedTable">
        {post.length > 0 && (
          <table className="postTableStyles">
            <thead>
              <tr>
                <th>Id</th>
                <th>UserId</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {post.map(
                (eachPost) =>
                  (eachPost.title.startsWith(title) ||
                    eachPost.id.toString() === title) && (
                    <tr
                      key={eachPost.id}
                      className={
                        randomNumber == 0 && luckyNumber == 0
                          ? paramsValue == eachPost.id
                            ? "activeRow"
                            : "inActiveRow"
                          : randomNumber == eachPost.id && show
                          ? "activeRow"
                          : luckyNumber == eachPost.id && !show
                          ? "activeRow"
                          : "inActiveRow"
                      }
                    >
                      <td>{eachPost.id}</td>
                      <td>{eachPost.userId}</td>
                      <td>{eachPost.title}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserIndividualDataTable;
