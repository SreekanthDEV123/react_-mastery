import React from "react";
// import "./ProductDetails.css";
const ProductDetails = ({ res, closeModal }) => {
  console.log(res, "Res", closeModal);

  return (
    <div
      className={`modal fade show d-block`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          {/* <div className="modal-header">
            <h5 className="modal-title">Cuisine Details</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span> 
            </button>
          </div> */}
          <div className="header">
            <h5>cuisines</h5>
            <button type="button" onClick={closeModal}>
              x
            </button>
          </div>
          <div className="modal-body">
            <h4>name:{res.name}</h4>
            <h4>name:{res.skills}</h4>
            <h4>name:{res.city}</h4>
            {/* <h4>cuisiness:{res.cuisines}</h4> */}
            <h4>description:{res.description}</h4>
            <h4></h4>
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

export default ProductDetails;

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
