import React from "react";

function FavListItem(props :any) {
  const ddata =
    props.states.length > 0
      ? props.states.map((state :any) => {
          return (
            <div
              className="card m-2"
              key={state.loc}
              style={{ width: "300px" }}
            >
              <h5 className="card-header btn bg-primary">
                <i className="fa fa-star"/>
                {state.loc}
              </h5>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total
                    <span className="badge badge-primary badge-pill">
                      {state.total}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Confirmed Cases Indian
                    <span className="badge badge-primary badge-pill">
                      {state.confirmedCasesIndian}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Confirmed Cases Foreign
                    <span className="badge badge-primary badge-pill">
                      {state.confirmedCasesForeign}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Discharged
                    <span className="badge badge-primary badge-pill">
                      {state.discharged}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Deaths
                    <span className="badge badge-primary badge-pill">
                      {state.deaths}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          );
        })
      : "";

  return (
    props.states.length !== 0 && (
      <div className="container mb-lg-5">
        <div>
          <h2>
            <u>Favourite State</u>
          </h2>
        </div>
        <div className="row w-100 mt-2">{ddata}</div>
      </div>
    )
  );
}

export default FavListItem;
