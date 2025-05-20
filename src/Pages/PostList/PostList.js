import React, { useEffect, useState } from "react";
//import React from "react"
import "./PostList.scss";
import { fetchData } from "../../utils/restUtils";
import AntdForm from "./AntdForm";
// import PostuserForm from "../../Components/PostUserForm/PostuserForm"
// import "./AntdForm";

const PostList = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(5);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [prevCheck, setPrevCheck] = useState(0);
  const list = Array.from(
    { length: Math.floor(data.length / 5) },
    (_, i) => i + 1
  );
  console.log(list, "jj");
  useEffect(() => {
    const getData = async () => {
      try {
        const postData = await fetchData(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(postData);
        setData(postData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
    console.log(check, "kk");
  }, [check]);
  const handleInput = (num) => {
    const newCheck = num * 5;
    const newPrev = (num - 1) * 5;
    setCheck(newCheck);
    setPrevCheck(newPrev);
    setSelectedNumber(num);
  };
  return (
    <div>
      {/* <div className="container postContainer">
        {data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>

            <tbody>
              {data.map(
                (eachpost1) =>
                  eachpost1.id <= check &&
                  eachpost1.id >= prevCheck && (
                    <tr key={eachpost1.id}>
                      <td>{eachpost1.id}</td>
                      <td>{eachpost1.title}</td>
                      <td>{eachpost1.body}</td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        )}
      </div>
      <div className="post">
        {list.map((eachlist) => (
          <div
            className={`postInfo ${
              eachlist == selectedNumber ? "activePost" : ""
            }`}
            key={eachlist}
          >
            <p
              onClick={() => {
                handleInput(eachlist);
              }}
            >
              {eachlist}
            </p>
          </div>
        ))}
      </div> */}
      <div
        className=" container antdContainer"
        // style={{ position: "relative", marginTop: 10 }}
      >
        {/* <h1 style={{ color: "blue", marginLeft: }}>Antd Table</h1> */}
        <AntdForm />
      </div>
      <br />
    </div>
  );
};

export default PostList;
