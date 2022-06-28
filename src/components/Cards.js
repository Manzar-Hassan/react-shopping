import React from "react";

function Cards(props) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {props.data.map((card, i) => (
            <div className="col mb-5" key={i}>
              <div className="card h-100">
                <div
                  className="badge bg-dark text-white position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  {props.data[i].sale}
                </div>
                <img
                  className="card-img-top"
                  src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  alt="product image"
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">{props.data[i].itemType}</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      {props.data[i].starCount.map((star, i) => (
                        <div className="bi-star-fill" key={i-10}></div>
                      ))}
                    </div>
                    <span className="text-muted text-decoration-line-through">
                      {props.data[i].price.oldPrice}
                    </span>
                    {props.data[i].price.newPrice}
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-center flex-column">
                  <div className="text-center">
                    <a className="btn btn-outline-dark mt-auto" href="#">
                      {props.data[i].buttonName}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
