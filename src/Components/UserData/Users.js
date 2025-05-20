import React from "react";
// import "./ProductDetails.css";
import "./Users.css";
const Users = ({ res, closeModal }) => {
  console.log(res, "Res", closeModal);

  return (
    <div
      className={`modal fade show d-block`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="header">
            <h3>Cuisines</h3>
            <button type="button" onClick={closeModal}>
              x
            </button>
          </div>
          <div className="modal-body ">
            <p className="modal-details">Name:{res.name}</p>
            <p className="modal-details">Description:{res.description}</p>
            <p className="modal-details">Adhar:{res.adhar}</p>
            <p className="modal-details">Sex:{res.sex}</p>
            <p className="modal-details">Skills:{res.skills}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;

{
  /* <div classNameName="modal-wrapper">
        <div classNameName="productcard">
          <h3 classNameName="productreturn">
            ProductDetails{" "}
            <button classNameName="btn btn-danger" onClick={closeModal}>
              x
            </button>
          </h3>

          <hr />
          <h5>Description:{res.description}</h5>
          <h5>cuisines:{res.cuisines}</h5>
        </div>
      </div> */
}
