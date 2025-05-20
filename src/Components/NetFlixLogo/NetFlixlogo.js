import React from "react";

const NetFlixlogo = () => {
  const style1 = {
    width: "100%",
    marginBottom: "50px",
    backgroundColor: "red",
  };

  const containerStyle = {
    backgroundColor: "rgba(255,0,0,0.1)",
  };

  return (
    <div class="row ">
      <div class="col">
        <div className="mw-100 border " style={containerStyle}>
          <div className="position-absolute top-0 start-0  " style={style1}>
            <img
              src="https://t3.ftcdn.net/jpg/04/81/76/22/240_F_481762281_Xcvl3QsGh1pBMvQuyKIoIqq8aYksXEwX.jpg"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetFlixlogo;
