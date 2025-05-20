import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./UserIndividual.scss";
import UserIndividualDataTable from "../UserIndividualDataTable/UserIndividualDataTable";

const UserIndividualData = () => {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [randomNumber, setRandomNumber] = useState(0);
  const [luckyNumber, setLuckyNumber] = useState(0);
  // const [randomNumber1, setRandomNumber1] = useState(1);
  // const [highlightedId, setHighLightId] = useState(0);
  const [show, setShow] = useState(true);
  const [post, setPosts] = useState([]);
  console.log(params, "paramsm");

  console.log(randomNumber, "random");
  const fetchAllPost = async (a) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    setPosts(data);
  };

  const fetchIndividualpost = async (a) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${a}`);
    const data = await res.json();
    console.log(data);
    setDetails(data);
  };
  const genearaterandomNumber = () => {
    setShow(true);
    const randomNumbers = Math.floor(Math.random() * 100);
    console.log(randomNumbers, "cool");
    setRandomNumber(randomNumbers);
    // setHighLightId(randomNumbers);
    fetchIndividualpost(randomNumbers);
  };
  const genearateLuckyNumber = () => {
    setShow(false);

    const randomNumbers = Math.floor(Math.random() * 100);
    setLuckyNumber(randomNumbers);
    // setHighLightId(randomNumbers);
    fetchIndividualpost(randomNumbers);
  };
  useEffect(() => {
    fetchAllPost();
    fetchIndividualpost(params.number);
  }, []);

  return (
    <div className="row">
      <div className="col col-sm-3">
        {Object.keys(details).length > 0 && (
          <div className="userIndividual">
            <p className="userInfo" id="users">
              UserId:{details.userId}
            </p>
            <p className="userInfo" id="users">
              Id:{details.id}
            </p>
            <p className="userInfo" id="users">
              Body:{details.body}
            </p>
            <p className="userInfo" id="users">
              RandomNumber:{randomNumber}
            </p>
            <p className="userInfo" id="users">
              luckyNumber:{luckyNumber}
            </p>
            {Object.keys(details).length > 0 && (
              <p className="userInfo" id="users">
                Title:{details.title}
              </p>
            )}
          </div>
        )}
        <div className="userButton">
          <button
            className="btn btn-primary rounded-pill userButtonRandom"
            onClick={genearaterandomNumber}
          >
            Generate RandomNumber
          </button>
        </div>
        <div className="userButton">
          <button
            className="btn btn-success rounded-pill userButtonLucky"
            onClick={genearateLuckyNumber}
          >
            My Lucky Number
          </button>
        </div>
      </div>

      <div className="col col-sm-9">
        <UserIndividualDataTable
          post={post}
          randomNumber={randomNumber}
          paramsValue={params.number}
          // highlightedId={highlightedId}
          show={show}
          luckyNumber={luckyNumber}
        />
      </div>
    </div>
  );
};

export default UserIndividualData;

/// randomNumber ==0 ?params==eachpost.id?"red":"pink"
