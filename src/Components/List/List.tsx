import React from "react";

function ListItem(props :any) {
  const ddata =
    props.states.length > 0
      ? props.states.map((state :any) => {
          return (
            <div
              className="card m-2"
              key={state.loc}
              style={{ width: "300px" }}
            >
              <h5
                className="card-header btn bg-primary"
                onClick={() => !state.fav && props.addToFav(state.loc)}
              >
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
    <div className="container">
      <div className="row w-100 mt-2">{ddata}</div>
    </div>
  );
}

export default ListItem;
